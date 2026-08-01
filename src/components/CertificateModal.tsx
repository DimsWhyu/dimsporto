"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  cert: {
    title: string;
    subtitle?: string;
    scope?: string;
    year?: string;
    certificateUrl: string;
  } | null;
}

export function CertificateModal({ isOpen, onClose, cert }: CertificateModalProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset controls state when cert changes or opens
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, cert]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "r" || e.key === "R") {
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !cert || !mounted) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[500000] flex flex-col items-center justify-between bg-black/90 backdrop-blur-2xl p-4 sm:p-6 select-none overflow-hidden"
        onClick={onClose}
      >
        {/* Header Bar */}
        <div
          className="relative z-20 flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/70 p-3 sm:p-4 text-white backdrop-blur-xl shadow-2xl mt-2 sm:mt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-display text-xs sm:text-base font-bold text-white">
                  {cert.title}
                </h3>
                {cert.scope && (
                  <span className="hidden md:inline-block rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary border border-primary/30 shrink-0 uppercase">
                    {cert.scope}
                  </span>
                )}
              </div>
              {cert.subtitle && (
                <p className="truncate text-[11px] sm:text-xs text-white/70">{cert.subtitle}</p>
              )}
            </div>
          </div>

          {/* Close Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-red-500/40 hover:border-red-500/60 active:scale-95 cursor-pointer"
              title="Close (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div
          ref={containerRef}
          className="relative z-10 flex h-full w-full max-w-6xl flex-1 items-center justify-center overflow-hidden my-2 sm:my-4"
          onWheel={handleWheel}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            drag={scale > 1}
            dragConstraints={containerRef}
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{
              scale: scale,
              rotate: rotation,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className={cn(
              "flex items-center justify-center max-h-[70vh] max-w-[90vw] transition-cursor",
              scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
            )}
          >
            <img
              src={cert.certificateUrl}
              alt={cert.title}
              className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/10"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
              }}
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Floating Zoom Controls Toolbar */}
        <div
          className="relative z-20 flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-white backdrop-blur-xl shadow-2xl mb-2 sm:mb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.75}
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:opacity-40 cursor-pointer"
            title="Zoom Out (-)"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="font-mono text-xs font-medium w-12 text-center text-white/90">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={scale >= 3.5}
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:opacity-40 cursor-pointer"
            title="Zoom In (+)"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <div className="h-4 w-[1px] bg-white/20 my-auto" />
          <button
            onClick={handleRotate}
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 cursor-pointer"
            title="Rotate 90°"
          >
            <RotateCw className="h-4 w-4" />
          </button>
          <button
            onClick={handleReset}
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 cursor-pointer"
            title="Reset Zoom & Rotation"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
