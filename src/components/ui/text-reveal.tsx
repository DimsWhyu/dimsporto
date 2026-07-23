"use client";

import { useRef, type ComponentPropsWithoutRef, type FC, type ReactNode } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.45"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[150vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-screen max-w-5xl items-center justify-start px-6 py-12">
        <p className="flex flex-wrap justify-start text-3xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-left">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block mx-[0.18em] my-[0.08em] select-none">
      {/* Background Dimmed Text (Establishes exact layout flow) */}
      <span className="text-foreground/20 dark:text-foreground/20">{children}</span>
      {/* Foreground Highlighted Text (Pinned exactly on top) */}
      <motion.span style={{ opacity }} className="absolute inset-0 text-foreground font-extrabold">
        {children}
      </motion.span>
    </span>
  );
};
