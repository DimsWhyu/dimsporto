import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  "Halo", // Indonesia
  "Hello", // Inggris
  "你好", // Mandarin (Nǐ hǎo)
  "Hola", // Spanyol
  "مرحبًا", // Arab (Marhaban)
  "Bonjour", // Prancis
  "こんにちは", // Jepang (Konnichiwa)
];

export function InitialLoader({ onComplete }: { onComplete?: () => void }) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll while loader is active
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (index < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 260);
      return () => clearTimeout(timer);
    } else {
      // Ensure the last language ("こんにちは") is displayed completely before exiting
      const timer = setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-background p-6 md:p-12 select-none overflow-hidden"
        >
          {/* Dynamic Background Effects */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/25 blur-3xl animate-blob pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary-1/20 blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 w-full flex items-center justify-between font-mono text-xs text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="font-bold text-foreground">Dimas Portfolio 2026</span>
            </div>
            <span className="hidden sm:inline font-semibold">ITS / Data Science</span>
          </div>

          {/* Center Shell — Instant text swap without blur or per-word transition */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-5xl px-4 py-8">
            <div className="relative min-h-[160px] sm:min-h-[220px] md:min-h-[260px] w-full flex items-center justify-center py-6 px-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center justify-center gap-3 sm:gap-5"
              >
                <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-foreground text-center leading-none">
                  {GREETINGS[index]}
                </span>
                <span className="h-3.5 w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-full bg-primary animate-pulse shrink-0" />
              </motion.div>
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className="relative z-10 h-6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
