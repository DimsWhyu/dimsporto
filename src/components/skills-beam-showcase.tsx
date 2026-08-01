import { useRef, useState, createRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import logoNav from "@/assets/brand/logo-nav.png";
import logoNavWht from "@/assets/brand/logo-nav-white.png";

// Curated core technologies (libraries removed for clean balance)
const TOP_SKILLS = [
  "Python",
  "SQL",
  "MySQL",
  "Machine Learning",
  "Big Data",
  "Data Warehousing",
  "Statistical Analysis",
  "Streamlit",
];

const BOTTOM_SKILLS = [
  "Power BI",
  "Looker Studio",
  "Tableau",
  "Excel / VBA",
  "Git / GitHub",
  "Jupyter",
  "Google Colab",
  "Pentaho Kettle",
];

const ALL_SKILLS = [...TOP_SKILLS, ...BOTTOM_SKILLS];

const CUSTOM_ICONS: Record<string, string> = {
  Tableau: "https://freepnglogo.com/images/all_img/tableau-software-logo-b762.png",
  "Power BI":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png",
  "Excel / VBA":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png",
};

const ICONS: Record<string, string> = {
  Python: "python/3776AB",
  SQL: "postgresql/4169E1",
  MySQL: "mysql/4479A1",
  "Power BI": "powerbi/F2C811",
  "Looker Studio": "looker/4285F4",
  Tableau: "tableau/E97627",
  "Excel / VBA": "microsoftexcel/217346",
  "Git / GitHub": "github/181717",
  Jupyter: "jupyter/F37626",
  "Google Colab": "googlecolab/F9AB00",
  Streamlit: "streamlit/FF4B4B",
  Pentaho: "databricks/FF3621",
  "Pentaho Kettle": "databricks/FF3621",
  "Big Data": "apachespark/E25A1C",
  "Machine Learning": "tensorflow/FF6F00",
  "Data Warehousing": "snowflake/29B5E8",
  "Statistical Analysis": "r/276DC3",
};

interface SkillLogoProps {
  name: string;
  elementRef: (el: HTMLDivElement | null) => void;
  hoveredSkill: string | null;
  setHoveredSkill: (name: string | null) => void;
}

function SkillLogo({ name, elementRef, hoveredSkill, setHoveredSkill }: SkillLogoProps) {
  const url =
    CUSTOM_ICONS[name] ?? (ICONS[name] ? `https://cdn.simpleicons.org/${ICONS[name]}` : null);
  const isHovered = hoveredSkill === name;
  const isDimmed = hoveredSkill !== null && !isHovered;

  return (
    <div
      ref={elementRef}
      title={name}
      onMouseEnter={() => setHoveredSkill(name)}
      onMouseLeave={() => setHoveredSkill(null)}
      onTouchStart={(e) => {
        // Toggle hover on touch
        e.stopPropagation();
        setHoveredSkill(isHovered ? null : name);
      }}
      className={`group/icon relative flex h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border p-1.5 xs:p-2 sm:p-2.5 shadow-2xs transition-all duration-300 cursor-pointer shrink-0 ${
        isHovered
          ? "scale-115 z-40 border-primary bg-card ring-2 ring-primary/60 shadow-lg shadow-primary/20 opacity-100"
          : isDimmed
            ? "opacity-25 blur-[1.5px] scale-90 border-border/40 bg-card/40"
            : "border-border/80 bg-card/90 hover:border-primary hover:scale-110 opacity-100"
      }`}
    >
      {url ? (
        <img src={url} alt={name} className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 object-contain" />
      ) : (
        <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-primary">
          {name.slice(0, 2)}
        </span>
      )}
      {/* Floating Tooltip */}
      <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 font-mono text-[10px] font-medium text-background shadow-md ${
        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover/icon:opacity-100 group-hover/icon:scale-100"
      }`}>
        {name}
      </span>
    </div>
  );
}

export function SkillsBeamShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Store refs for each skill logo
  const skillRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});
  ALL_SKILLS.forEach((skill) => {
    if (!skillRefs.current[skill]) {
      skillRefs.current[skill] = createRef<HTMLDivElement>();
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-between w-full max-w-full min-w-0 rounded-3xl border border-border/80 bg-card p-3 xs:p-4 sm:p-6 shadow-sm overflow-hidden min-h-[440px] xs:min-h-[480px] sm:min-h-[520px]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Centered Technical Stack Header */}
      <div className="w-full flex items-center justify-center z-10 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-border/50">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold text-center">
          Technical Stack
        </div>
      </div>

      {/* TOP SKILLS (8 EQUAL SKILLS ABOVE LOGO) */}
      <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 z-10 my-1 sm:my-2 px-1">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md">
          {TOP_SKILLS.slice(0, 4).map((item) => (
            <SkillLogo
              key={item}
              name={item}
              elementRef={(el) => {
                if (skillRefs.current[item]) {
                  (
                    skillRefs.current[item] as React.MutableRefObject<HTMLDivElement | null>
                  ).current = el;
                }
              }}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md">
          {TOP_SKILLS.slice(4).map((item) => (
            <SkillLogo
              key={item}
              name={item}
              elementRef={(el) => {
                if (skillRefs.current[item]) {
                  (
                    skillRefs.current[item] as React.MutableRefObject<HTMLDivElement | null>
                  ).current = el;
                }
              }}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
      </div>

      {/* CENTER LOGO HUB */}
      <div
        ref={centerRef}
        className={`z-30 my-4 sm:my-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border-2 border-primary/50 bg-card p-2.5 sm:p-3 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
          hoveredSkill !== null ? "scale-105 border-primary shadow-primary/20" : ""
        }`}
      >
        <img
          src={logoNav}
          alt="Dimas Logo"
          className="h-7 sm:h-8 w-auto object-contain dark:hidden"
        />
        <img
          src={logoNavWht}
          alt="Dimas Logo"
          className="h-7 sm:h-8 w-auto object-contain hidden dark:block"
        />
      </div>

      {/* BOTTOM SKILLS (8 EQUAL SKILLS BELOW LOGO) */}
      <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 z-10 my-1 sm:my-2 px-1">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md">
          {BOTTOM_SKILLS.slice(0, 4).map((item) => (
            <SkillLogo
              key={item}
              name={item}
              elementRef={(el) => {
                if (skillRefs.current[item]) {
                  (
                    skillRefs.current[item] as React.MutableRefObject<HTMLDivElement | null>
                  ).current = el;
                }
              }}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md">
          {BOTTOM_SKILLS.slice(4).map((item) => (
            <SkillLogo
              key={item}
              name={item}
              elementRef={(el) => {
                if (skillRefs.current[item]) {
                  (
                    skillRefs.current[item] as React.MutableRefObject<HTMLDivElement | null>
                  ).current = el;
                }
              }}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>
      </div>

      {/* ANIMATED BEAMS FROM EVERY SINGLE CORE SKILL LOGO TO CENTER LOGO HUB */}
      {ALL_SKILLS.map((skill, idx) => {
        const ref = skillRefs.current[skill];
        if (!ref) return null;
        const isHovered = hoveredSkill === skill;
        const curvature = (idx % 2 === 0 ? 1 : -1) * (15 + (idx % 4) * 8);

        return (
          <AnimatedBeam
            key={skill}
            containerRef={containerRef}
            fromRef={ref}
            toRef={centerRef}
            curvature={curvature}
            pathColor={isHovered ? "#0066cc" : "currentColor"}
            pathWidth={isHovered ? 3 : 1.5}
            pathOpacity={isHovered ? 0.8 : hoveredSkill !== null ? 0.05 : 0.25}
            gradientStartColor={isHovered ? "#0066cc" : "#0066cc"}
            gradientStopColor={isHovered ? "#2997ff" : "#2997ff"}
            duration={3 + (idx % 4) * 0.6}
            delay={(idx * 0.2) % 2}
          />
        );
      })}
    </div>
  );
}
