import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import dimasPhoto from "@/assets/profile/dimas-formal.png";
import logoNav from "@/assets/brand/logo-nav.png";
import logoNavWht from "@/assets/brand/logo-nav-white.png";
import ojkLogo from "@/assets/experiences/ojk-logo.jpg";
import idxLogo from "@/assets/experiences/idx-logo.png";
import pkuyLogo from "@/assets/experiences/pkuy-logo.jpg";
import fsadLogo from "@/assets/experiences/fsad-logo.png";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedList } from "@/components/ui/animated-list";
import { TextReveal } from "@/components/ui/text-reveal";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { ClippedCircle } from "@/components/unlumen-ui/clipped-circle";
import { GitHubContributions } from "@/components/github-contributions";
import { InitialLoader } from "@/components/initial-loader";
import { SkillsBeamShowcase } from "@/components/skills-beam-showcase";
import parkvisionImg from "@/assets/projects/parkvision.png";
import indostockImg from "@/assets/projects/indostock.png";
import orderDashboardImg from "@/assets/projects/order-dashboard.png";
import customerClusterImg from "@/assets/projects/customer-cluster.png";
import tspOptimizerImg from "@/assets/projects/tsp-optimizer.png";
import simulationDasImg from "@/assets/projects/simulation-das.png";
import dataWarehouseImg from "@/assets/projects/data-warehouse.jpeg";
import cert01 from "@/assets/achievements/01-ibsc-unj-2026.jpg";
import cert02 from "@/assets/achievements/02-dokter-data-2026.png";
import cert03 from "@/assets/achievements/03-satria-data-2025.jpg";
import cert04 from "@/assets/achievements/04-bnyc-ub-2025.png";
import cert05 from "@/assets/achievements/05-isfest-umn-2025.png";
import cert06 from "@/assets/achievements/06-iyt-itb-2024.png";
import cert07 from "@/assets/achievements/07-4c-filkom-ub-2024.png";
import cert08 from "@/assets/achievements/08-gba-olympiad-2023.jpg";
import { FlippingCard } from "@/components/ui/flipping-card";
import ThreeDCarousel, { ThreeDCarouselItem } from "@/components/ThreeDCarousel";
import { ScrollTimeline, TimelineEvent } from "@/components/ScrollTimeline";


export const Route = createFileRoute("/")({
  component: Portfolio,
});

const CV_URL = "https://drive.google.com/file/d/1mzAsEG_2YFVSqtDOvY_E7tsW3vvR-Dw4/view?usp=sharing";
const SOCIALS = {
  instagram: "https://www.instagram.com/dwhyu.s_/",
  linkedin: "https://www.linkedin.com/in/dimaswahyusaputra111/",
  email: "dimswahyus@gmail.com",
  github: "https://github.com/DimsWhyu",
  phone: "+6281311211367",
};

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

// simple-icons CDN slugs (https://cdn.simpleicons.org/<slug>)
const ICONS: Record<string, string> = {
  Python: "python/3776AB",
  SQL: "postgresql/4169E1",
  MySQL: "mysql/4479A1",
  Pandas: "pandas/150458",
  NumPy: "numpy/013243",
  "Scikit-learn": "scikitlearn/F7931E",
  Matplotlib: "matplotlib/11557C",
  Seaborn: "python/4C72B0",
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
  YOLOv8: "ultralytics/111F68",
  Vercel: "vercel/000000",
  "Big Data": "apachespark/E25A1C",
  "Time Series": "chartdotjs/FF6384",
  EDA: "jupyter/F37626",
  "Machine Learning": "tensorflow/FF6F00",
  "Data Warehousing": "snowflake/29B5E8",
  "Statistical Analysis": "r/276DC3",
};

const CUSTOM_ICONS: Record<string, string> = {
  Tableau: "https://freepnglogo.com/images/all_img/tableau-software-logo-b762.png",
  "Power BI":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png",
  "Excel / VBA":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png",
  Matplotlib:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1280px-Matplotlib_icon.svg.png",
};

function iconUrl(name: string) {
  if (CUSTOM_ICONS[name]) return CUSTOM_ICONS[name];
  const slug = ICONS[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}

function Logo({ name, size = 14 }: { name: string; size?: number }) {
  const url = iconUrl(name);
  if (!url) return null;
  return (
    <img
      src={url}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className="inline-block shrink-0"
      style={{ height: size, width: size }}
    />
  );
}

const SKILLS = {
  Programming: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  Visualization: ["Power BI", "Looker Studio", "Tableau", "Excel / VBA"],
  "Data & Analytics": [
    "EDA",
    "Statistical Analysis",
    "Machine Learning",
    "Big Data",
    "Data Warehousing",
  ],
  Tools: ["Git / GitHub", "Jupyter", "Google Colab", "Streamlit", "MySQL", "Pentaho Kettle"],
};

const EXPERIENCE: ThreeDCarouselItem[] = [
  {
    id: 1,
    title: "Data Analyst Intern",
    brand: "Otoritas Jasa Keuangan (OJK) — East Java",
    period: "Feb 2026 – Mar 2026",
    logoUrl: ojkLogo,
    points: [
      "Built SPLOG, a web-based logistics system managing 315+ items and centralizing stock monitoring.",
      "Automated reporting pipelines that cut report preparation time by ~60%.",
    ],
    tags: ["Data Analytics", "Logistics System", "Automation", "Financial Services"],
    gradient: "bg-gradient-to-r from-blue-600/30 via-indigo-600/15 to-card",
  },
  {
    id: 2,
    title: "Data Scientist Intern",
    brand: "id/x partners × Rakamin Academy",
    period: "Aug 2025 – Sep 2025",
    logoUrl: idxLogo,
    points: [
      "Delivered an end-to-end ML capstone with measurable accuracy benchmarks using Python & Scikit-learn.",
      "Collaborated with Business Analysts, Data Engineers, and PMs to ship data-driven IT solutions.",
    ],
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Cross-Functional"],
    gradient: "bg-gradient-to-r from-purple-600/30 via-pink-600/15 to-card",
  },
  {
    id: 3,
    title: "CEO Analyst",
    brand: "Produktifkuy",
    period: "Jan 2025 – Jul 2025",
    logoUrl: pkuyLogo,
    points: [
      "Selected as 1 of 53 from 1,500+ applicants; led analysis across 6 divisions resulting in 6 org-wide improvements.",
      "Authored 20+ strategic proposals and data-driven decks supporting executive decisions.",
    ],
    tags: ["Executive Strategy", "Org Analytics", "Decision Support", "Leadership"],
    gradient: "bg-gradient-to-r from-emerald-600/30 via-teal-600/15 to-card",
  },
  {
    id: 4,
    title: "Vice Project Officer",
    brand: "FSAD FAIR 2025 — Organizational",
    period: "May 2025 – Jul 2025",
    logoUrl: fsadLogo,
    points: [
      "Coordinated 70+ committee members; engaged 160+ high school students nationwide.",
    ],
    tags: ["Project Management", "Team Leadership", "Event Coordination", "FSAD ITS"],
    gradient: "bg-gradient-to-r from-amber-600/30 via-orange-600/15 to-card",
  },
];

const PROJECTS = [
  {
    name: "ParkVision AI",
    tag: "Computer Vision",
    image: parkvisionImg,
    desc: "Real-time parking slot detection web app using YOLOv8 with full-stack inference pipeline & interactive dashboard, deployed on Vercel.",
    tech: ["YOLOv8", "Python", "Vercel", "Streamlit"],
    url: "http://parkvisionai.vercel.app/",
    detailsTitle: "ParkVision AI",
    details: [
      "Real-time parking slot detection web application powered by YOLOv8 deep learning.",
      "Full-stack computer vision inference pipeline with live occupancy analytics & telemetry.",
      "Deployed on Vercel with high-performance responsive stream processing."
    ],
  },
  {
    name: "IndoStockAI",
    tag: "ML Forecasting",
    image: indostockImg,
    desc: "Realtime Stock Analytics & Forecasting System combining live market data with ML forecasting for the Indonesian capital market.",
    tech: ["Python", "Big Data", "Time Series", "Streamlit"],
    url: "https://www.linkedin.com/posts/dimaswahyusaputra111_bigdataanalytics-machinelearning-stockmarketanalytics-activity-7418655014862196736-iAVA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
    detailsTitle: "IndoStockAI: Realtime Stock Analytics",
    details: [
      "AI stock analytics platform for the Indonesian capital market (IDX).",
      "Combines Big Data analytics with Time Series ML models for market forecasting.",
      "Surfaces live price action, technical indicators, and predictive buy/sell signals."
    ],
  },
  {
    name: "Order Management Dashboard",
    tag: "Business Intelligence",
    image: orderDashboardImg,
    desc: "Looker Studio dashboard analyzing 9,994 orders across 49 states & 3 customer segments (PCA HIMASTA-ITS 2026).",
    tech: ["Looker Studio", "SQL", "EDA"],
    url: "https://lnkd.in/gjYSBt_M",
    detailsTitle: "Order Management Dashboard (PCA)",
    details: [
      "Analyzed 9,994 orders from 793 customers across 49 states & 3 customer segments.",
      "Consumer segment contributed 51.9% of orders; Technology accounted for 60.3% of orders.",
      "NYC recorded highest order volume (915 transactions); total orders grew from 7.6K to 12.5K.",
      "Special thanks to Fa Rida & Fitria Nur Aida for sharing valuable insights during PCA HIMASTA-ITS 2026!"
    ],
  },
  {
    name: "Clustering-Based Customer Insights",
    tag: "Unsupervised ML",
    image: customerClusterImg,
    desc: "E-Commerce Customer Behavior & Sales Data Analysis using K-Means Clustering at Institut Teknologi Sepuluh Nopember (ITS).",
    tech: ["Scikit-learn", "Python", "Tableau"],
    url: "https://www.linkedin.com/posts/dimaswahyusaputra111_unsupervisedmachinelearning-kmeansclustering-activity-7412402721502339073-TRvi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
    detailsTitle: "Clustering-Based Customer Insights (ITS)",
    details: [
      "Determined optimal K=4 clusters using Elbow Method & Silhouette Score evaluation.",
      "Clustered on Monetary Value, Avg Session Duration, Customer Ratings & Return Rate.",
      "Uncovered personas: High-Potential Newcomers, One-Time Big Spenders, At-Risk Lapsed & Loyal Returners.",
      "Enables targeted business strategies like loyalty programs & recovery campaigns."
    ],
  },
  {
    name: "TSP Optimizer Application",
    tag: "Metaheuristic Optimization",
    image: tspOptimizerImg,
    desc: "Interactive simulation & optimization application solving Traveling Salesman Problem (TSP) for PCB drilling at ITS.",
    tech: ["Python", "Machine Learning"],
    url: "https://www.linkedin.com/posts/dimaswahyusaputra111_metaheuristicoptimization-travelingsalesmanproblem-activity-7411438890093338624-y9tr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
    detailsTitle: "TSP Optimizer Application (ITS)",
    details: [
      "Modeled PCB drilling process as TSP to minimize total travel distance & operational cost.",
      "Implemented Nearest Neighbor, Nearest/Cheapest/Farthest/Arbitrary Insertion + 2-Opt local search.",
      "Farthest Insertion produced shortest route; 2-Opt achieved up to 15% distance reduction.",
      "Provides interactive simulation & route visualization for manufacturing decision support."
    ],
  },
  {
    name: "Design Analysis and Simulation",
    tag: "Simulation & Optimization",
    image: simulationDasImg,
    desc: "Customer service system simulation & waiting time optimization at Galaxy Mall 2 Food Court Surabaya (ITS Final Project).",
    tech: ["Statistical Analysis", "EDA"],
    url: "https://www.linkedin.com/posts/dimaswahyusaputra111_final-project-for-the-design-analysis-and-activity-7377047766457384960-ijPT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
    detailsTitle: "Design Analysis and Simulation (ITS)",
    details: [
      "Analyzed customer service system efficiency & waiting times at Galaxy Mall 2 Food Court.",
      "Identified low utility at food stands vs high bottleneck at cashier & seating areas.",
      "Optimized model via Response Surface Methodology (RSM) with Central Composite Design.",
      "1 cashier + 5 seating servers brought all server utility below 50% for optimal flow.",
      "Tools: ExtendSim, EasyFit, SPSS, Minitab, and Figma."
    ],
  },
  {
    name: "Data Warehouse Course Project",
    tag: "Data Engineering & BI",
    image: dataWarehouseImg,
    desc: "End-to-end Data Warehouse & Power BI monitoring dashboard for ITS Course Registration Form (FRS) academic planning.",
    tech: ["MySQL", "Pentaho Kettle", "Power BI"],
    url: "https://www.linkedin.com/posts/dimaswahyusaputra111_datawarehouse-businessintelligence-powerbi-activity-7347203885381361664-3MIg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
    detailsTitle: "Data Warehouse Course Project (ITS)",
    details: [
      "Designed end-to-end data process for ITS Course Registration Form (FRS) system.",
      "Built MySQL OLTP/OLAP databases & executed ETL pipelines using Pentaho Kettle.",
      "Developed Power BI dashboards tracking SKS credit distribution, GPA trends & class capacities.",
      "Created Figma UI mockups before Power BI deployment to guide academic planning."
    ],
  },
];

const SECTION_ACCENTS: Record<string, string> = {
  top: "var(--primary)",
  about: "var(--secondary-3)",
  experience: "var(--secondary-2)",
  projects: "var(--accent)",
  achievements: "var(--secondary-4)",
  contact: "var(--secondary-1)",
};

const ACHIEVEMENTS: TimelineEvent[] = [
  {
    year: "2026",
    scope: "International",
    title: "1st Place — International Business Strategy Competition (UNJ)",
    subtitle: "Universitas Negeri Jakarta",
    certificateUrl: cert01,
  },
  {
    year: "2026",
    scope: "International",
    title: "1st Place — Dokter Data Infographic Competition",
    subtitle: "Dokter Data Indonesia",
    certificateUrl: cert02,
  },
  {
    year: "2025",
    scope: "National",
    title: "Gold Medal — SATRIA DATA 2025",
    subtitle: "Kemendiktisaintek RI",
    certificateUrl: cert03,
  },
  {
    year: "2025",
    scope: "National",
    title: "1st Place — Brawijaya National Youth Competition (UB)",
    subtitle: "Universitas Brawijaya",
    certificateUrl: cert04,
  },
  {
    year: "2025",
    scope: "National",
    title: "1st Place — Data Competition, ISFEST UMN",
    subtitle: "Universitas Multimedia Nusantara",
    certificateUrl: cert05,
  },
  {
    year: "2024",
    scope: "International",
    title: "1st Runner Up — International Youthpreneur Competition",
    subtitle: "SBM ITB",
    certificateUrl: cert06,
  },
  {
    year: "2024",
    scope: "National",
    title: "1st Place — Infographic Competition 4C FILKOM UB",
    subtitle: "Universitas Brawijaya",
    certificateUrl: cert07,
  },
  {
    year: "2023",
    scope: "International",
    title: "Silver Medal — Greater Bay Area International Math Olympiad",
    subtitle: "GBA Olympiad Committee",
    certificateUrl: cert08,
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "top");
  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    const corners = document.createElement("div");
    corners.className = "cursor-corners";

    const tl = document.createElement("span");
    const tr = document.createElement("span");
    const bl = document.createElement("span");
    const br = document.createElement("span");
    tl.className = "corner-tl";
    tr.className = "corner-tr";
    bl.className = "corner-bl";
    br.className = "corner-br";

    corners.appendChild(tl);
    corners.appendChild(tr);
    corners.appendChild(bl);
    corners.appendChild(br);
    ring.appendChild(corners);

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let currentTarget: HTMLElement | null = null;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const clickable = t?.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer',
      );
      if (clickable) {
        currentTarget = clickable;
        ring.classList.add("hover");
        dot.classList.add("hover");
      } else {
        currentTarget = null;
        ring.classList.remove("hover");
        dot.classList.remove("hover");
      }
    };

    const tick = () => {
      if (currentTarget && document.body.contains(currentTarget)) {
        const rect = currentTarget.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        const targetW = rect.width + 16;
        const targetH = rect.height + 16;

        rx += (targetX - rx) * 0.2;
        ry += (targetY - ry) * 0.2;

        ring.style.width = `${targetW}px`;
        ring.style.height = `${targetH}px`;
      } else {
        if (currentTarget) {
          currentTarget = null;
          ring.classList.remove("hover");
          dot.classList.remove("hover");
        }
        rx += (mx - rx) * 0.2;
        ry += (my - ry) * 0.2;

        ring.style.width = "";
        ring.style.height = "";
      }

      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      dot.remove();
      ring.remove();
    };
  }, []);
  return null;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="back-to-top-enter fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-white shadow-lg shadow-[#0066cc]/30 transition hover:scale-110 active:scale-95"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

function SocialDock() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: "-50%", scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: "-50%", scale: 1 }}
          exit={{ opacity: 0, x: 50, y: "-50%", scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden md:block"
        >
          <Dock orientation="vertical" className="bg-surface/80 border-border shadow-lg">
            <DockIcon className="hover:bg-primary/20 hover:text-primary transition-colors">
              <a
                href={`mailto:${SOCIALS.email}`}
                aria-label="Email"
                className="flex items-center justify-center w-full h-full text-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </DockIcon>
            <DockIcon className="hover:bg-primary/20 hover:text-primary transition-colors">
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-full h-full text-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </DockIcon>
            <DockIcon className="hover:bg-primary/20 hover:text-primary transition-colors">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-full h-full text-foreground hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </DockIcon>
            <DockIcon className="hover:bg-primary/20 hover:text-primary transition-colors">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-full h-full text-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </DockIcon>
          </Dock>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TextRevealSection() {
  return (
    <section className="bg-background relative border-y border-border/50">
      <TextReveal className="max-w-4xl mx-auto px-6">
        Building high-performance data pipelines, training machine learning models, and delivering
        interactive dashboards that drive growth.
      </TextReveal>
    </section>
  );
}

function useTypewriter(words: string[], { typeMs = 90, holdMs = 1400, eraseMs = 45 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");
  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("erasing"), holdMs);
      }
    } else if (phase === "erasing") {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
      } else {
        setI((n) => n + 1);
        setPhase("typing");
        return;
      }
    }
    return () => clearTimeout(t!);
  }, [text, phase, i, words, typeMs, holdMs, eraseMs]);
  return text;
}

function ThemeToggle() {
  return (
    <AnimatedThemeToggler className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:scale-105 hover:border-primary [&_svg]:w-4 [&_svg]:h-4" />
  );
}

function SocialIcons({ size = 16, className = "" }: { size?: number; className?: string }) {
  const cls =
    "grid place-items-center rounded-full border border-border bg-surface text-foreground transition hover:scale-110 hover:border-primary hover:text-primary";
  const style = { width: size + 18, height: size + 18 };
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={SOCIALS.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={cls}
        style={style}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4z" />
        </svg>
      </a>
      <a
        href={SOCIALS.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={cls}
        style={style}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className={cls} style={style}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => ["top", ...NAV.map((n) => n.id)], []);
  const active = useActiveSection(ids);
  const accent = SECTION_ACCENTS[active] ?? "var(--primary)";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navMenuItems = [{ id: "top", label: "Home" }, ...NAV];

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 mx-auto transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-[width,max-width,top,padding,border-radius] ${
          scrolled
            ? "top-0 w-full max-w-[100vw] rounded-none border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-xs py-3.5 px-6 sm:px-10 md:px-14"
            : "top-4 w-[calc(100%-2rem)] max-w-[64rem] rounded-full border border-border/80 bg-card/95 backdrop-blur-xl shadow-lg py-2.5 px-5 sm:px-6 md:px-8"
        }`}
        style={{ ["--accent-c" as never]: accent }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left Brand Logo */}
          <a href="#top" className="flex items-center gap-3 transition-transform hover:scale-102">
            <img
              src={logoNav}
              alt="Dimas Wahyu Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain dark:hidden"
            />
            <img
              src={logoNavWht}
              alt="Dimas Wahyu Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain hidden dark:block"
            />
            <span className="font-display font-bold text-base md:text-lg tracking-tight">
              Dimas Wahyu
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {NAV.map((n) => {
              const isActive = active === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0066cc] hover:bg-[#0071e3] px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-2xs"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Download CV
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-2xs hover:border-primary/80 active:scale-95 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              <span>{open ? "CLOSE" : "MENU"}</span>
              <span className="text-primary font-bold text-sm leading-none">
                {open ? "✕" : "+"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu (Reference: irfansabrian.vercel.app) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-background p-6 sm:p-8 md:hidden overflow-y-auto select-none"
          >
            {/* Top Bar Header */}
            <div className="w-full flex items-center justify-between border-b border-border/70 pb-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
              <div className="flex items-center gap-2.5">
                <img src={logoNav} alt="Logo" className="h-7 w-auto object-contain dark:hidden" />
                <img
                  src={logoNavWht}
                  alt="Logo"
                  className="h-7 w-auto object-contain hidden dark:block"
                />
                <span className="font-bold text-foreground">DIMAS WAHYU / 2026</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-border/90 bg-card px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-xs active:scale-95 transition-all"
              >
                <span>CLOSE</span>
                <span className="text-primary font-bold text-sm">✕</span>
              </button>
            </div>

            {/* Center List of Numbered Nav Links */}
            <nav className="my-auto py-8 flex flex-col gap-5 sm:gap-6">
              {navMenuItems.map((n, idx) => {
                const isActive = active === n.id;
                const numStr = `0${idx + 1}`;
                return (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 text-left transition-all"
                  >
                    <span className="font-mono text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      {numStr}
                    </span>
                    <span
                      className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight transition-all duration-200 group-hover:translate-x-2 ${
                        isActive ? "gradient-text" : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {n.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Bottom Footer Actions */}
            <div className="w-full pt-4 border-t border-border/70 flex flex-col gap-3">
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-98 transition-all"
              >
                Download CV ✦
              </a>
              <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl border-1.5 border-border bg-card text-center font-semibold text-foreground hover:border-primary transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl border-1.5 border-border bg-card text-center font-semibold text-foreground hover:border-primary transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const words = useMemo(
    () => ["decisions", "dashboards", "predictions", "products", "growth", "stories"],
    [],
  );
  const typed = useTypewriter(words);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <InteractiveGridPattern
        className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        width={40}
        height={40}
        squares={[24, 24]}
        squaresClassName="hover:fill-primary/10 stroke-border/40"
      />
      <div className="absolute left-1/4 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-blob" />
      <div
        className="absolute right-1/4 top-1/2 -z-10 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-secondary-1/25 blur-3xl animate-blob"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="absolute left-1/2 bottom-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-blob"
        style={{ animationDelay: "-9s" }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Internship & Full-time roles
          </div>
          <h1 className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
            <span className="block">Turning complex</span>
            <span className="block">data into</span>
            <span className="block">
              <span className="rainbow-text">{typed}</span>
              <span className="caret" aria-hidden />
            </span>
            <span className="block text-foreground/90">that ship.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm <span className="text-foreground font-medium">Dimas Wahyu Saputra</span> — a
            final-year Data Science student at <span className="text-foreground">ITS</span>,
            building dashboards, ML models, and analytics products that move metrics in the real
            world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 active:scale-95"
            >
              View my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-[#0071e3] px-5 py-3 text-sm font-medium text-white shadow-md transition hover:scale-[1.03] active:scale-95"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-surface active:scale-95"
            >
              Get in touch
            </a>
            <SocialIcons />
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "20+", v: "Awards won" },
              { k: "3", v: "Internships" },
              { k: "9k+", v: "Rows analyzed" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold gradient-text">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div
            className="relative aspect-square rounded-[2rem] border-2 border-border/90 bg-gradient-to-br from-primary/25 via-secondary-1/15 to-accent/25 p-4 glow-ring shadow-lg"
            style={{
              transform:
                "perspective(900px) rotateX(calc(var(--my,0)*-6deg)) rotateY(calc(var(--mx,0)*8deg))",
            }}
          >
            <div className="absolute -right-4 -top-4 rounded-full border border-border/90 glass px-3 py-1.5 font-mono text-xs font-semibold animate-float-slow shadow-xs">
              data-driven ✦
            </div>
            <img
              src={dimasPhoto}
              alt="Dimas Wahyu Saputra"
              className="h-full w-full rounded-[1.5rem] object-cover object-top"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border/90 glass p-3 font-mono text-xs shadow-sm">
              <div className="text-muted-foreground font-semibold">status</div>
              <div className="text-foreground font-medium">Final-year @ ITS · Open 2026</div>
            </div>
            <div
              className="absolute -left-6 top-1/3 grid h-12 w-12 place-items-center rounded-2xl border-1.5 border-border bg-card shadow-md animate-float-slow"
              style={{ animationDelay: "-2s" }}
            >
              <img src="https://cdn.simpleicons.org/python/3776AB" alt="" width={24} height={24} />
            </div>
            <div
              className="absolute -right-6 top-2/3 grid h-12 w-12 place-items-center rounded-2xl border-1.5 border-border bg-card shadow-md animate-float-slow"
              style={{ animationDelay: "-4s" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png"
                alt="Power BI"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Python",
    "SQL",
    "Power BI",
    "Scikit-learn",
    "Looker Studio",
    "Streamlit",
    "Tableau",
    "MySQL",
    "Pandas",
    "NumPy",
    "Jupyter",
    "Git / GitHub",
  ];
  return (
    <div className="border-y border-border bg-surface/50 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 font-display text-xl text-muted-foreground md:text-2xl">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3">
            <Logo name={t} size={22} />
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  reveal = "",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  reveal?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className={`reveal ${reveal} mb-8 md:mb-10 max-w-2xl`}>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

const SKILL_ACCENTS = [
  "from-primary/25 via-surface/60 to-secondary-1/25",
  "from-secondary-2/25 via-surface/60 to-accent/25",
  "from-secondary-3/25 via-surface/60 to-primary/25",
  "from-secondary-4/25 via-surface/60 to-secondary-1/25",
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          Final-year data scientist with a <span className="gradient-text">builder's instinct</span>
          .
        </>
      }
      reveal="reveal-blur"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start">
        <div className="reveal reveal-left space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I study{" "}
            <span className="text-foreground font-medium">
              Data Science at Institut Teknologi Sepuluh Nopember (ITS)
            </span>{" "}
            and was named{" "}
            <span className="text-foreground font-medium">
              3rd Most Outstanding Student of ITS 2026
            </span>
            . I'm an awardee of the{" "}
            <span className="text-foreground font-medium">Beasiswa Indonesia Maju (BIM) DN</span>{" "}
            scholarship from Kemdiktisaintek RI.
          </p>
          <p>
            My work spans the full analytics stack — from collecting and modeling messy data, to
            building interactive dashboards in Power BI and Looker Studio, to deploying ML pipelines
            that real users depend on.
          </p>
          <p>
            Outside coursework, I lead student initiatives, compete in international analytics
            competitions, and consistently turn raw datasets into stories teams can actually act on.
          </p>
          <GitHubContributions />
        </div>
        <div className="reveal reveal-right w-full">
          <SkillsBeamShowcase />
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title={
        <>
          Where I've made an <span className="rainbow-text">impact</span>.
        </>
      }
      reveal="reveal-left"
    >
      <ThreeDCarousel
        items={EXPERIENCE}
        autoRotate={true}
        rotateInterval={4500}
        cardHeight={480}
      />
    </Section>
  );
}

const PROJECT_ACCENTS = [
  "from-primary/20 via-card to-secondary-1/20",
  "from-secondary-2/20 via-card to-accent/20",
  "from-secondary-3/20 via-card to-primary/20",
  "from-secondary-4/20 via-card to-secondary-1/20",
  "from-accent/20 via-card to-secondary-3/20",
  "from-secondary-1/20 via-card to-secondary-2/20",
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title={
        <>
          Selected work across <span className="gradient-text">ML, BI & optimization</span>.
        </>
      }
      reveal="reveal-zoom"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <FlippingCard
            key={i}
            height={460}
            className="reveal reveal-zoom group/card hover:scale-[1.01] transition-all duration-300"
            frontContent={
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-card via-surface/90 to-card p-5">
                {/* Background image & gradient overlay */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border/70 shadow-inner">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-xs">
                    {p.tag}
                  </span>

                  {/* Project index badge */}
                  <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/90 backdrop-blur-md">
                    0{i + 1}
                  </span>
                </div>

                {/* Body Content */}
                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-surface-2/80 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground shadow-2xs"
                      >
                        <Logo name={t} size={11} />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Flip Prompt Hint */}
                  <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2.5 text-[11px] font-medium text-primary">
                    <span className="inline-flex items-center gap-1.5 opacity-90 group-hover/card:opacity-100">
                      Hover / Tap to flip
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse">
                        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                      </svg>
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">Flip →</span>
                  </div>
                </div>
              </div>
            }
            backContent={
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-card via-surface-2/95 to-card p-5 text-card-foreground">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-xl" />

                {/* Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {p.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-base font-semibold text-foreground line-clamp-1">
                    {p.detailsTitle || p.name}
                  </h3>

                  {/* Highlights Bullet List */}
                  <ul className="mt-2.5 space-y-1.5 text-[11.5px] leading-relaxed text-muted-foreground overflow-y-auto max-h-[200px] pr-1">
                    {p.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Explore More Button */}
                <div className="mt-3 border-t border-border/60 pt-2.5">
                  <div className="mb-2.5 flex flex-wrap gap-1">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded bg-surface-2/90 px-1.5 py-0.5 font-mono text-[9.5px] text-muted-foreground"
                      >
                        <Logo name={t} size={10} />
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    Explore More
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="04 — Recognition"
      title={<>Awards & achievements.</>}
      reveal="reveal-rotate"
    >
      <ScrollTimeline
        events={ACHIEVEMENTS}
        progressIndicator={true}
        cardAlignment="alternating"
        cardVariant="elevated"
        revealAnimation="slide"
      />
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={
        <>
          Let's build something <span className="gradient-text">measurable</span>.
        </>
      }
      reveal="reveal-flip"
    >
      <div className="reveal reveal-flip grid gap-8 rounded-3xl border-2 border-border/90 bg-card p-6 sm:p-8 md:grid-cols-[1.2fr_1fr] md:p-12 shadow-xl">
        <div>
          <p className="text-muted-foreground text-sm sm:text-base">
            I'm currently open to internships and entry-level roles in data analytics, data science,
            and business intelligence. Reach out — I usually reply within a day.
          </p>
          <div className="mt-8 space-y-3 font-mono text-sm">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary break-all"
            >
              <span className="text-muted-foreground shrink-0 font-semibold">email</span>→{" "}
              {SOCIALS.email}
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary break-all"
            >
              <span className="text-muted-foreground shrink-0 font-semibold">linkedin</span>→
              /in/dimaswahyusaputra111
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary break-all"
            >
              <span className="text-muted-foreground shrink-0 font-semibold">instagram</span>→
              @dwhyu.s_
            </a>
            <a
              href={`tel:${SOCIALS.phone}`}
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <span className="text-muted-foreground shrink-0 font-semibold">phone</span>→ +62 813
              1121 1367
            </a>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground shrink-0 font-semibold">based</span>→ Surabaya,
              East Java
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-[#0071e3] px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Download CV
            </a>
            <SocialIcons size={18} />
          </div>
        </div>
        <a
          href={`mailto:${SOCIALS.email}?subject=Opportunity for Dimas`}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary-1 to-accent p-8 text-primary-foreground transition hover:scale-[1.02]"
        >
          <div className="font-mono text-xs uppercase tracking-widest opacity-80">
            Start a conversation
          </div>
          <div className="mt-3 font-display text-3xl font-semibold leading-tight">Say hi →</div>
          <div className="mt-6 text-sm opacity-90">
            For collaborations, internships, freelance dashboards, or just to talk about data.
          </div>
          <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl transition group-hover:bg-white/40" />
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="font-mono">© {new Date().getFullYear()} Dimas Wahyu Saputra</div>
        <SocialIcons />
        <div className="font-mono">Crafted with care · Surabaya, ID</div>
      </div>
    </footer>
  );
}

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InitialLoader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TextRevealSection />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <SocialDock />
    </div>
  );
}
