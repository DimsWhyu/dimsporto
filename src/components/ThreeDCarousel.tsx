"use client";

import React, { useRef, useEffect, useState, TouchEvent, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar, Building2, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ThreeDCarouselItem {
  id: number | string;
  title: string;       // Role e.g., "Data Analyst Intern"
  brand: string;       // Company / Organization e.g., "Otoritas Jasa Keuangan (OJK)"
  period?: string;     // Period e.g., "Feb 2026 – Mar 2026"
  description?: string; // Short summary
  points?: string[];   // Detailed accomplishments / key responsibilities
  tags: string[];      // Technologies / competencies
  imageUrl?: string;   // Optional card top header background image
  logoUrl?: string;    // Company logo image
  link?: string;       // Optional link URL
  gradient?: string;   // Custom gradient background for header
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

const ThreeDCarousel = ({
  items = [],
  autoRotate = true,
  rotateInterval = 4500,
  cardHeight = 480,
  isMobileSwipe = true,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 40;

  const nextSlide = useCallback(() => {
    if (items.length === 0) return;
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    if (items.length === 0) return;
    setActive((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto rotation
  useEffect(() => {
    if (autoRotate && isInView && !isHovering && items.length > 1) {
      const interval = setInterval(nextSlide, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length, nextSlide]);

  // Intersection observer for visibility check
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, prevSlide, nextSlide]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: TouchEvent) => {
    if (!isMobileSwipe) return;
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isMobileSwipe) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileSwipe || !touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const getCardStyle = (index: number) => {
    const total = items.length;
    if (total === 0) return {};

    // Calculate relative index position (-total/2 to total/2)
    let diff = (index - active) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      // Center active card
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
        filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.15))",
      };
    } else if (diff === 1 || (total === 2 && diff === -1)) {
      // Right card
      return {
        transform: isMobile
          ? "translateX(30%) scale(0.88) rotateY(-10deg)"
          : "translateX(45%) scale(0.92) rotateY(-15deg)",
        opacity: 0.6,
        zIndex: 20,
        cursor: "pointer",
        filter: "blur(0.5px)",
      };
    } else if (diff === -1) {
      // Left card
      return {
        transform: isMobile
          ? "translateX(-30%) scale(0.88) rotateY(10deg)"
          : "translateX(-45%) scale(0.92) rotateY(15deg)",
        opacity: 0.6,
        zIndex: 20,
        cursor: "pointer",
        filter: "blur(0.5px)",
      };
    } else {
      // Background hidden cards
      const dir = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${dir * (isMobile ? 60 : 80)}%) scale(0.75) rotateY(${-dir * 25}deg)`,
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section id="ThreeDCarousel" className="relative w-full py-4 select-none">
      <div className="w-full mx-auto px-2 sm:px-4">
        {/* Carousel Container */}
        <div
          className="relative overflow-visible h-[560px] sm:h-[580px] flex items-center justify-center [perspective:1200px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item, index) => {
              const cardStyle = getCardStyle(index);
              const isActive = index === active;

              return (
                <div
                  key={item.id}
                  onClick={() => !isActive && setActive(index)}
                  style={cardStyle}
                  className="absolute top-1/2 -translate-y-1/2 w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] transition-all duration-500 ease-out preserve-3d"
                >
                  <Card
                    style={{ minHeight: `${cardHeight}px` }}
                    className={`overflow-hidden border-2 transition-all duration-300 flex flex-col bg-card/95 backdrop-blur-md ${
                      isActive
                        ? "border-primary/60 ring-2 ring-primary/20 shadow-2xl"
                        : "border-border/80 shadow-md hover:border-primary/40"
                    }`}
                  >
                    {/* Header Banner */}
                    <div
                      className={`relative p-5 flex flex-col justify-between overflow-hidden border-b border-border/60 ${
                        item.gradient || "bg-gradient-to-r from-primary/20 via-surface-2 to-card"
                      }`}
                      style={
                        item.imageUrl
                          ? {
                              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${item.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }
                          : undefined
                      }
                    >
                      {/* Top Bar: Brand Logo & Period */}
                      <div className="flex items-center justify-between gap-3 z-10">
                        <div className="flex items-center gap-3">
                          {item.logoUrl ? (
                            <img
                              src={item.logoUrl}
                              alt={item.brand}
                              className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[150px] object-contain rounded-md shadow-xs shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                              <Building2 className="w-5 h-5" />
                            </div>
                          )}
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block line-clamp-1">
                              {item.brand}
                            </span>
                          </div>
                        </div>

                        {item.period && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 bg-background/80 backdrop-blur-md text-[11px] font-mono font-medium text-foreground shadow-2xs shrink-0">
                            <Calendar className="w-3 h-3 text-primary" />
                            <span>{item.period}</span>
                          </div>
                        )}
                      </div>

                      {/* Main Title / Role */}
                      <div className="mt-4 z-10">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary shrink-0" />
                          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground line-clamp-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                      <div>
                        {item.description && (
                          <p className="text-sm font-medium text-muted-foreground mb-3 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.points && item.points.length > 0 && (
                          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.points.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 animate-pulse-slow" />
                                <span className="text-foreground/90">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Tags & Action Link */}
                      <div className="mt-5 pt-4 border-t border-border/50 flex flex-col gap-3">
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all group"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Desktop Navigation Arrow Controls */}
          {!isMobile && items.length > 1 && (
            <>
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 hover:bg-background border border-border/80 rounded-full flex items-center justify-center text-foreground hover:text-primary z-40 shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer"
                onClick={prevSlide}
                aria-label="Previous Experience"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 hover:bg-background border border-border/80 rounded-full flex items-center justify-center text-foreground hover:text-primary z-40 shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer"
                onClick={nextSlide}
                aria-label="Next Experience"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Pagination Dot Controls */}
          {items.length > 1 && (
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center items-center space-x-2.5 z-40">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    active === idx
                      ? "bg-primary w-7 shadow-sm"
                      : "bg-border hover:bg-muted-foreground/40 w-2.5"
                  }`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
