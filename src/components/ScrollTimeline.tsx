"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Award, Medal, Maximize2, Sparkles, Crown } from "lucide-react";
import { CertificateModal } from "@/components/CertificateModal";

export type RankCategory = "gold" | "silver" | "bronze" | "other";

export interface RankTheme {
  category: RankCategory;
  badgeLabel: string;
  badgeClass: string;
  cardBorderClass: string;
  cardGlowClass: string;
  cardBgGradient: string;
  topSheenClass: string;
  iconBgClass: string;
  iconColorClass: string;
  nodeBorderClass: string;
  nodeBgClass: string;
  nodeDotBg: string;
  nodeGlow: string;
}

export function getRankTheme(title: string): RankTheme {
  const t = title.toLowerCase();

  if (
    t.includes("1st place") ||
    t.includes("gold medal") ||
    t.includes("winner") ||
    t.includes("juara 1")
  ) {
    return {
      category: "gold",
      badgeLabel: t.includes("gold") ? "Gold Medal" : "1st Place Winner",
      badgeClass:
        "bg-amber-400/20 text-amber-500 dark:text-amber-300 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
      cardBorderClass: "border-amber-400/60 dark:border-amber-400/50 hover:border-amber-400/90",
      cardGlowClass:
        "shadow-[0_4px_25px_-4px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_35px_rgba(245,158,11,0.45)] hover:scale-[1.015]",
      cardBgGradient: "from-amber-500/15 via-card/95 to-amber-950/20",
      topSheenClass:
        "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]",
      iconBgClass:
        "bg-gradient-to-br from-amber-400/30 to-yellow-500/20 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]",
      iconColorClass: "text-amber-500 dark:text-amber-300",
      nodeBorderClass: "border-amber-400",
      nodeBgClass: "bg-amber-400/20",
      nodeDotBg: "bg-amber-400",
      nodeGlow: "0 0 16px rgba(245,158,11,0.8)",
    };
  }

  if (
    t.includes("2nd place") ||
    t.includes("1st runner up") ||
    t.includes("runner up") ||
    t.includes("silver medal") ||
    t.includes("juara 2")
  ) {
    return {
      category: "silver",
      badgeLabel: t.includes("silver") ? "Silver Medal" : "1st Runner Up",
      badgeClass:
        "bg-slate-300/25 text-slate-700 dark:text-slate-200 border-slate-300/50 shadow-[0_0_12px_rgba(203,213,225,0.25)]",
      cardBorderClass: "border-slate-300/60 dark:border-slate-400/50 hover:border-slate-300/90",
      cardGlowClass:
        "shadow-[0_4px_25px_-4px_rgba(203,213,225,0.25)] hover:shadow-[0_8px_35px_rgba(203,213,225,0.45)] hover:scale-[1.015]",
      cardBgGradient: "from-slate-300/15 via-card/95 to-slate-900/20",
      topSheenClass:
        "bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 shadow-[0_0_12px_rgba(203,213,225,0.8)]",
      iconBgClass:
        "bg-gradient-to-br from-slate-300/30 to-slate-400/20 border-slate-300/50 shadow-[0_0_12px_rgba(203,213,225,0.3)]",
      iconColorClass: "text-slate-700 dark:text-slate-200",
      nodeBorderClass: "border-slate-300",
      nodeBgClass: "bg-slate-300/20",
      nodeDotBg: "bg-slate-300",
      nodeGlow: "0 0 16px rgba(203,213,225,0.8)",
    };
  }

  if (
    t.includes("3rd place") ||
    t.includes("2nd runner up") ||
    t.includes("bronze medal") ||
    t.includes("juara 3")
  ) {
    return {
      category: "bronze",
      badgeLabel: t.includes("bronze") ? "Bronze Medal" : "3rd Place",
      badgeClass:
        "bg-amber-700/20 text-amber-600 dark:text-amber-400 border-amber-700/50 shadow-[0_0_12px_rgba(217,119,6,0.2)]",
      cardBorderClass: "border-amber-700/60 dark:border-amber-600/50 hover:border-amber-600/90",
      cardGlowClass:
        "shadow-[0_4px_25px_-4px_rgba(217,119,6,0.2)] hover:shadow-[0_8px_35px_rgba(217,119,6,0.4)] hover:scale-[1.015]",
      cardBgGradient: "from-amber-700/15 via-card/95 to-orange-950/20",
      topSheenClass:
        "bg-gradient-to-r from-amber-700 via-orange-500 to-amber-800 shadow-[0_0_12px_rgba(217,119,6,0.8)]",
      iconBgClass:
        "bg-gradient-to-br from-amber-700/30 to-orange-600/20 border-amber-700/50 shadow-[0_0_12px_rgba(217,119,6,0.3)]",
      iconColorClass: "text-amber-600 dark:text-amber-400",
      nodeBorderClass: "border-amber-600",
      nodeBgClass: "bg-amber-600/20",
      nodeDotBg: "bg-amber-600",
      nodeGlow: "0 0 16px rgba(217,119,6,0.8)",
    };
  }

  return {
    category: "other",
    badgeLabel: "Finalist / Award",
    badgeClass:
      "bg-primary/20 text-primary border-primary/40 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    cardBorderClass: "border-primary/40 hover:border-primary/80",
    cardGlowClass:
      "shadow-[0_4px_25px_-4px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.4)] hover:scale-[1.015]",
    cardBgGradient: "from-primary/15 via-card/95 to-indigo-950/20",
    topSheenClass:
      "bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]",
    iconBgClass:
      "bg-gradient-to-br from-primary/30 to-accent/20 border-primary/50 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
    iconColorClass: "text-primary",
    nodeBorderClass: "border-primary",
    nodeBgClass: "bg-primary/20",
    nodeDotBg: "bg-primary",
    nodeGlow: "0 0 16px rgba(59,130,246,0.8)",
  };
}

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  scope?: "International" | "National" | string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
  certificateUrl?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2026",
    scope: "International",
    title: "1st Place — International Business Strategy Competition (UNJ)",
    subtitle: "Universitas Negeri Jakarta",
  },
  {
    year: "2026",
    scope: "International",
    title: "1st Place — Dokter Data Infographic Competition",
    subtitle: "Statistics Department Universitas Diponegoro",
  },
  {
    year: "2025",
    scope: "National",
    title: "Gold Medal — SATRIA DATA 2025, Kemendiktisaintek RI",
    subtitle: "Kemendiktisaintek RI",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title,
  subtitle,
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-border/60",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "elevated",
  cardEffect = "glow",
  parallaxIntensity = 0,
  progressLineWidth = 3,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "slide",
  className = "",
  connectorStyle = "line",
  perspective = true,
  darkMode = false,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedCert, setSelectedCert] = useState<TimelineEvent | null>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 60%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? (index % 3) * 0.15
        : 0.1;

    const initialStates = {
      fade: { opacity: 0, y: 30 },
      slide: {
        x:
          cardAlignment === "left"
            ? -50
            : cardAlignment === "right"
            ? 50
            : index % 2 === 0
            ? -50
            : 50,
        opacity: 0,
      },
      scale: { scale: 0.85, opacity: 0 },
      flip: { rotateY: 45, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation] || initialStates.fade,
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.6,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: true, margin: "-40px" },
    };
  };

  const getConnectorClasses = () => {
    const baseClasses = cn(
      "absolute left-3.5 sm:left-4 lg:left-1/2 transform lg:-translate-x-1/2",
      lineColor
    );
    const widthStyle = `w-[${progressLineWidth}px]`;
    switch (connectorStyle) {
      case "dots":
        return cn(baseClasses, "w-1 rounded-full");
      case "dashed":
        return cn(
          baseClasses,
          widthStyle,
          `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`
        );
      case "line":
      default:
        return cn(baseClasses, widthStyle);
    }
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-2xl transition-all duration-300";
    const variantClasses = {
      default: "bg-card border border-border shadow-sm",
      elevated: "bg-card/95 backdrop-blur-md border border-border/90 shadow-md hover:border-primary/50",
      outlined: "bg-card/40 backdrop-blur border-2 border-primary/20",
      filled: "bg-primary/10 border border-primary/30",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:scale-[1.015]",
      shadow: "hover:shadow-xl hover:-translate-y-1",
      bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
    };
    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+32px)]"
          : "lg:ml-[calc(50%+32px)]"
        : cardAlignment === "left"
        ? "lg:mr-auto lg:ml-0"
        : "lg:ml-auto lg:mr-0";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      alignmentClassesDesktop,
      "ml-8 sm:ml-12 lg:ml-0 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(50%-44px)]"
    );
  };

  const getScopeBadge = (scope?: string) => {
    if (!scope) return null;
    const isInt = scope.toLowerCase().includes("international");
    return (
      <span
        className={cn(
          "rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider shadow-2xs shrink-0",
          isInt
            ? "bg-primary/20 text-primary border-primary/30"
            : "bg-accent/20 text-accent-foreground border-accent/30"
        )}
      >
        {scope}
      </span>
    );
  };

  const getEventIcon = (event: TimelineEvent) => {
    if (event.icon) return event.icon;
    if (event.scope?.toLowerCase().includes("international")) {
      return <Trophy className="h-4 w-4 text-primary shrink-0" />;
    } else if (event.title.toLowerCase().includes("gold") || event.title.toLowerCase().includes("1st")) {
      return <Medal className="h-4 w-4 text-amber-500 shrink-0" />;
    }
    return <Award className="h-4 w-4 text-secondary-1 shrink-0" />;
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative w-full select-none py-6 sm:py-10",
        darkMode ? "bg-background text-foreground" : "",
        className
      )}
    >
      {(title || subtitle) && (
        <div className="text-center pb-8 px-4">
          {title && <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>}
          {subtitle && (
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-3 sm:px-6 pt-4 pb-12">
        <div className="relative mx-auto">
          {/* Timeline Connector Line */}
          <div className={cn(getConnectorClasses(), "h-[calc(100%-1rem)] absolute top-2 z-10")} />

          {/* Enhanced Progress Indicator with Traveling Glow */}
          {progressIndicator && (
            <>
              {/* Progress Line */}
              <motion.div
                className="absolute top-2 z-10 left-3.5 sm:left-4 lg:left-1/2 -translate-x-1/2"
                style={{
                  height: progressHeight,
                  maxHeight: "calc(100% - 1rem)",
                  width: `${progressLineWidth}px`,
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background: `linear-gradient(to bottom, #3b82f6, #6366f1, #8b5cf6)`,
                  boxShadow: `
                    0 0 12px rgba(99,102,241,0.5),
                    0 0 20px rgba(139,92,246,0.3)
                  `,
                }}
              />
              {/* Traveling Glow Comet at line head */}
              <motion.div
                className="absolute z-20 left-3.5 sm:left-4 lg:left-1/2"
                style={{
                  top: `calc(${progressHeight} + 8px)`,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(99,102,241,0.6) 45%, rgba(59,130,246,0) 80%)",
                    boxShadow: `
                      0 0 12px 3px rgba(139, 92, 246, 0.7),
                      0 0 20px 6px rgba(99, 102, 241, 0.5),
                      0 0 32px 10px rgba(59, 130, 246, 0.3)
                    `,
                  }}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          {/* Events List */}
          <div className="relative z-20 space-y-8 lg:space-y-12">
            {events.map((event, index) => {
              const yOffset = useTransform(
                smoothProgress,
                [0, 1],
                [parallaxIntensity * 60, -parallaxIntensity * 60]
              );
              const isActive = index <= activeIndex;
              const theme = getRankTheme(event.title);

              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative flex items-center py-2",
                    "flex-col lg:flex-row",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                      : cardAlignment === "left"
                      ? "lg:justify-start"
                      : "lg:flex-row-reverse lg:justify-start"
                  )}
                >
                  {/* Node Dot */}
                  <div
                    className={cn(
                      "absolute top-6 lg:top-1/2 transform -translate-y-1/2 z-30",
                      "left-3.5 sm:left-4 lg:left-1/2 -translate-x-1/2"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "w-6 h-6 rounded-full border-2 bg-background flex items-center justify-center transition-colors duration-300",
                        isActive
                          ? cn(theme.nodeBorderClass, theme.nodeBgClass)
                          : "border-border bg-card"
                      )}
                      animate={
                        isActive
                          ? {
                              scale: [1, 1.25, 1],
                              boxShadow: [
                                "0 0 0px transparent",
                                theme.nodeGlow,
                                "0 0 0px transparent",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    >
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors duration-300",
                          isActive ? theme.nodeDotBg : "bg-muted-foreground/40"
                        )}
                      />
                    </motion.div>
                  </div>

                  {/* Card item */}
                  <motion.div
                    className={cn(getCardClasses(index))}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-60px" }}
                    style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                  >
                    <Card
                      className={cn(
                        "relative overflow-hidden border-2 transition-all duration-500 rounded-2xl bg-gradient-to-br backdrop-blur-md group",
                        theme.cardBgGradient,
                        theme.cardBorderClass,
                        theme.cardGlowClass
                      )}
                    >
                      {/* Top Metallic Sheen Bar */}
                      <div
                        className={cn(
                          "absolute top-0 left-0 right-0 h-[3px] z-20 transition-all duration-300",
                          theme.topSheenClass
                        )}
                      />

                      {/* Ambient glowing radial orb for Gold, Silver, Bronze */}
                      {theme.category === "gold" && (
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-400/30" />
                      )}
                      {theme.category === "silver" && (
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-300/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-300/30" />
                      )}
                      {theme.category === "bronze" && (
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-700/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-600/30" />
                      )}

                      <CardContent className="p-5 sm:p-6 relative z-10">
                        {/* Header: Year, Rank Badge & Scope Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-110",
                                theme.iconBgClass
                              )}
                            >
                              {theme.category === "gold" ? (
                                <Crown className="h-4 w-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                              ) : theme.category === "silver" ? (
                                <Medal className="h-4 w-4 text-slate-300 dark:text-slate-200 drop-shadow-[0_0_6px_rgba(226,232,240,0.8)]" />
                              ) : theme.category === "bronze" ? (
                                <Award className="h-4 w-4 text-amber-500 drop-shadow-[0_0_6px_rgba(217,119,6,0.8)]" />
                              ) : (
                                <Trophy className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <span className="font-mono text-sm font-bold text-foreground">
                              {event.year}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                            {/* Rank Category Badge */}
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-2xs",
                                theme.badgeClass
                              )}
                            >
                              {theme.category === "gold" && (
                                <Sparkles className="h-3 w-3 animate-pulse text-amber-400" />
                              )}
                              {theme.badgeLabel}
                            </span>

                            {/* Scope Badge */}
                            {getScopeBadge(event.scope)}
                          </div>
                        </div>

                        {/* Event Title */}
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug tracking-tight">
                          {event.title}
                        </h3>

                        {/* Subtitle / Description if present */}
                        {event.subtitle && (
                          <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                            {event.subtitle}
                          </p>
                        )}
                        {event.description && (
                          <p className="mt-2 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
                            {event.description}
                          </p>
                        )}

                        {/* Certificate Image Preview Fit */}
                        {event.certificateUrl && (
                          <div
                            className={cn(
                              "mt-4 relative group/cert overflow-hidden rounded-xl border bg-background/50 transition-all duration-300 cursor-pointer shadow-xs",
                              theme.category === "gold"
                                ? "border-amber-400/40 hover:border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                                : theme.category === "silver"
                                ? "border-slate-300/40 hover:border-slate-300/80 shadow-[0_0_15px_rgba(203,213,225,0.15)]"
                                : "border-border/80 hover:border-primary/60"
                            )}
                            onClick={() => setSelectedCert(event)}
                          >
                            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-1.5 bg-gradient-to-b from-surface/40 to-surface/80">
                              <img
                                src={event.certificateUrl}
                                alt={event.title}
                                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover/cert:scale-[1.02]"
                                loading="lazy"
                              />
                              {/* Hover Overlay Badge */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100 backdrop-blur-[2px] rounded-xl">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/80 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg">
                                  <Maximize2 className="h-3.5 w-3.5 text-primary" />
                                  Click to Inspect & Zoom
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certificate Zoom Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        cert={
          selectedCert
            ? {
                title: selectedCert.title,
                subtitle: selectedCert.subtitle,
                scope: selectedCert.scope,
                year: selectedCert.year,
                certificateUrl: selectedCert.certificateUrl!,
              }
            : null
        }
      />
    </div>
  );
};
