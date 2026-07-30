import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FlippingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  height?: number | string;
  width?: number | string;
}

export function FlippingCard({
  frontContent,
  backContent,
  className,
  height = 420,
  width,
  ...props
}: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "group [perspective:1000px] w-full cursor-pointer select-none",
        className
      )}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: width ? (typeof width === "number" ? `${width}px` : width) : "100%",
      }}
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border-2 border-border/90 bg-card shadow-lg [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden">
          {frontContent}
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-3xl border-2 border-primary/50 bg-card shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
          {backContent}
        </div>
      </div>
    </div>
  );
}
