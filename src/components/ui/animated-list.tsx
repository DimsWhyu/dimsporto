"use client";

import React, { useEffect, useMemo, useState, useRef, type ComponentPropsWithoutRef } from "react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { height: 0, opacity: 0, scale: 0.95 },
    animate: { height: "auto", opacity: 1, scale: 1 },
    exit: { height: 0, opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 220, damping: 26 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full overflow-hidden">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2000, ...props }: AnimatedListProps) => {
    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

    // Store items shown. Each item has a unique id to ensure animations trigger properly
    const [items, setItems] = useState<{ id: string; element: React.ReactNode }[]>([]);
    const currentIndexRef = useRef(0);

    useEffect(() => {
      if (childrenArray.length === 0) return;

      // Initialize with the first item
      setItems([{ id: `init-0`, element: childrenArray[0] }]);
      currentIndexRef.current = 1;

      const interval = setInterval(() => {
        setItems((prev) => {
          const nextIndex = currentIndexRef.current % childrenArray.length;
          currentIndexRef.current++;

          const nextItem = {
            id: `${currentIndexRef.current}-${nextIndex}`,
            element: childrenArray[nextIndex],
          };

          const updated = [nextItem, ...prev];
          if (updated.length > childrenArray.length) {
            return updated.slice(0, childrenArray.length);
          }
          return updated;
        });
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray, delay]);

    return (
      <div className={cn(`flex flex-col items-center gap-4`, className)} {...props}>
        <AnimatePresence>
          {items.map((item) => (
            <AnimatedListItem key={item.id}>{item.element}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";
