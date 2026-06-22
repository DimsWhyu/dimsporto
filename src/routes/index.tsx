import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import dimasPhoto from "@/assets/Foto Formal_Dimas_Putih.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const CV_URL = "https://drive.google.com/file/d/1mzAsEG_2YFVSqtDOvY_E7tsW3vvR-Dw4/view?usp=sharing";
const SOCIALS = {
  instagram: "https://www.instagram.com/dwhyu.s_/",
  linkedin: "https://www.linkedin.com/in/dimaswahyusaputra111/",
  email: "dimswahyus@gmail.com",
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
  Matplotlib: "python/11557C",
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

function iconUrl(name: string) {
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
  "Data & Analytics": ["EDA", "Statistical Analysis", "Machine Learning", "Big Data", "Data Warehousing"],
  Tools: ["Git / GitHub", "Jupyter", "Google Colab", "Streamlit", "MySQL", "Pentaho Kettle"],
};

const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "Otoritas Jasa Keuangan (OJK) — East Java",
    period: "Feb 2026 – Mar 2026",
    points: [
      "Built SPLOG, a web-based logistics system managing 315+ items and centralizing stock monitoring.",
      "Automated reporting pipelines that cut report preparation time by ~60%.",
    ],
  },
  {
    role: "Data Scientist Intern",
    org: "id/x partners × Rakamin Academy",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Delivered an end-to-end ML capstone with measurable accuracy benchmarks using Python & Scikit-learn.",
      "Collaborated with Business Analysts, Data Engineers, and PMs to ship data-driven IT solutions.",
    ],
  },
  {
    role: "CEO Analyst",
    org: "Produktifkuy",
    period: "Jan 2025 – Jul 2025",
    points: [
      "Selected as 1 of 53 from 1,500+ applicants; led analysis across 6 divisions resulting in 6 org-wide improvements.",
      "Authored 20+ strategic proposals and data-driven decks supporting executive decisions.",
    ],
  },
  {
    role: "Vice Project Officer — FSAD FAIR 2025",
    org: "Organizational",
    period: "May 2025 – Jul 2025",
    points: ["Coordinated 70+ committee members; engaged 160+ high school students nationwide."],
  },
];

const PROJECTS = [
  { name: "ParkVision AI", tag: "Computer Vision", desc: "Real-time parking slot detection web app using YOLOv8 with full-stack inference pipeline and interactive dashboard, deployed on Vercel.", tech: ["YOLOv8", "Python", "Vercel", "Streamlit"], url: "http://parkvisionai.vercel.app/" },
  { name: "IndoStockAI", tag: "ML Forecasting", desc: "AI stock analytics platform combining real-time market data with ML forecasting for the Indonesian capital market.", tech: ["Python", "Big Data", "Time Series", "Streamlit"], url: "https://www.linkedin.com/posts/dimaswahyusaputra111_bigdataanalytics-machinelearning-stockmarketanalytics-activity-7418655014862196736-iAVA" },
  { name: "Order Management Dashboard", tag: "Business Intelligence", desc: "Looker Studio dashboard analyzing 9,994 orders across 49 states — surfaced Consumer segment as 51.9% of orders and Technology as 60.3% of revenue.", tech: ["Looker Studio", "SQL", "EDA"], url: "https://lnkd.in/gjYSBt_M" },
  { name: "Customer Segmentation", tag: "Unsupervised ML", desc: "K-Means clustering (K=4, Elbow + Silhouette validated) on e-commerce data to define personas like High-Potential Newcomers and At-Risk Lapsed.", tech: ["Scikit-learn", "Python", "Tableau"], url: "https://www.linkedin.com/posts/dimaswahyusaputra111_unsupervisedmachinelearning-kmeansclustering-activity-7412402721502339073-TRvi" },
  { name: "FRS Monitoring Data Warehouse", tag: "Data Engineering", desc: "End-to-end OLTP/OLAP warehouse for ITS course registration with ETL in Pentaho Kettle and Power BI dashboards on GPA & capacity trends.", tech: ["MySQL", "Pentaho", "Power BI"], url: "https://www.linkedin.com/posts/dimaswahyusaputra111_datawarehouse-businessintelligence-powerbi-activity-7347203885381361664-3MIg" },
  { name: "TSP Optimizer", tag: "Optimization", desc: "PCB drilling TSP optimizer using 5 constructive heuristics and 2-Opt, achieving up to 15% distance reduction vs. greedy.", tech: ["Python", "Machine Learning"], url: "https://www.linkedin.com/posts/dimaswahyusaputra111_metaheuristicoptimization-travelingsalesmanproblem-activity-7411438890093338624-y9tr" },
  { name: "Design Analysis & Simulation", tag: "Engineering", desc: "Final project for the Design Analysis and Simulation course — modeling, simulation, and engineering analysis presented end-to-end.", tech: ["Python", "Statistical Analysis"], url: "https://www.linkedin.com/posts/dimaswahyusaputra111_final-project-for-the-design-analysis-and-activity-7377047766457384960-ijPT" },
];

const SECTION_ACCENTS: Record<string, string> = {
  top: "var(--primary)",
  about: "var(--secondary-3)",
  experience: "var(--secondary-2)",
  projects: "var(--accent)",
  achievements: "var(--secondary-4)",
  contact: "var(--secondary-1)",
};

const ACHIEVEMENTS = [
  { year: "2026", scope: "International", title: "1st Place — International Business Strategy Competition (UNJ)" },
  { year: "2026", scope: "International", title: "1st Place — Dokter Data Infographic Competition" },
  { year: "2025", scope: "National", title: "Gold Medal — SATRIA DATA 2025, Kemendiktisaintek RI" },
  { year: "2025", scope: "National", title: "1st Place — Brawijaya National Youth Competition (UB)" },
  { year: "2025", scope: "National", title: "1st Place — Data Competition, ISFEST UMN" },
  { year: "2024", scope: "International", title: "1st Runner Up — International Youthpreneur Competition (SBM ITB)" },
  { year: "2024", scope: "National", title: "1st Place — Infographic Competition 4C FILKOM UB" },
  { year: "2023", scope: "International", title: "Silver — Greater Bay Area International Math Olympiad" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
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
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hov = !!t?.closest('a, button, [role="button"], input, textarea, select, label');
      ring.classList.toggle("hover", hov);
      dot.classList.toggle("hover", hov);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      dot.remove(); ring.remove();
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
      className="back-to-top-enter fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary via-secondary-1 to-accent text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition hover:scale-110"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
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
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:scale-105 hover:border-primary">
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

function SocialIcons({ size = 16, className = "" }: { size?: number; className?: string }) {
  const cls = "grid place-items-center rounded-full border border-border bg-surface text-foreground transition hover:scale-110 hover:border-primary hover:text-primary";
  const style = { width: size + 18, height: size + 18 };
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={cls} style={style}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4z"/></svg>
      </a>
      <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={cls} style={style}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className={cls} style={style}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
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
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
      style={{ ["--accent-c" as never]: accent }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all md:px-6 ${scrolled ? "glass border-border nav-shell-accent" : "border-transparent"}`}
        style={{ width: "calc(100% - 2rem)" }}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold">
          <span
            className="grid h-7 w-7 place-items-center rounded-full text-primary-foreground text-xs transition-colors"
            style={{ background: `linear-gradient(135deg, ${accent}, var(--secondary-1))` }}
          >DW</span>
          <span className="hidden sm:inline">Dimas Wahyu</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition ${isActive ? "nav-pill-active" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition hover:scale-105"
            style={{ background: `linear-gradient(90deg, ${accent}, var(--secondary-1))` }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
            Download CV
          </a>
          <ThemeToggle />
          <button onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden" aria-label="Menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-border glass p-3 md:hidden">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2 text-sm hover:bg-surface ${active === n.id ? "nav-pill-active" : "text-foreground"}`}>
              {n.label}
            </a>
          ))}
          <a href={CV_URL} target="_blank" rel="noreferrer" className="mt-2 block rounded-lg px-3 py-2 text-center text-sm font-medium text-primary-foreground" style={{ background: `linear-gradient(90deg, ${accent}, var(--secondary-1))` }}>
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const words = useMemo(() => ["decisions", "dashboards", "predictions", "products", "growth", "stories"], []);
  const typed = useTypewriter(words);
  useEffect(() => {
    const el = ref.current; if (!el) return;
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
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/4 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-blob" />
      <div className="absolute right-1/4 top-1/2 -z-10 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-secondary-1/25 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
      <div className="absolute left-1/2 bottom-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "-9s" }} />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Internship & Full-time roles
          </div>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.1] md:text-7xl">
            <span className="block">Turning complex</span>
            <span className="block">data into</span>
            <span className="block">
              <span className="rainbow-text">{typed}</span>
              <span className="caret" aria-hidden />
            </span>
            <span className="block text-foreground/90">that ship.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm <span className="text-foreground font-medium">Dimas Wahyu Saputra</span> — a final-year Data Science student at <span className="text-foreground">ITS</span>, building dashboards, ML models, and analytics products that move metrics in the real world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:translate-x-0.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href={CV_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary-1 to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:scale-[1.03]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
              Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-surface">
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
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div
            className="relative aspect-square rounded-[2rem] border border-border bg-gradient-to-br from-primary/25 via-secondary-1/15 to-accent/25 p-4 glow-ring"
            style={{ transform: "perspective(900px) rotateX(calc(var(--my,0)*-6deg)) rotateY(calc(var(--mx,0)*8deg))" }}
          >
            <div className="absolute -right-4 -top-4 rounded-full border border-border glass px-3 py-1.5 font-mono text-xs animate-float-slow">
              data-driven ✦
            </div>
            <img src={dimasPhoto} alt="Dimas Wahyu Saputra" className="h-full w-full rounded-[1.5rem] object-cover object-top" loading="eager" />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border glass p-3 font-mono text-xs">
              <div className="text-muted-foreground">status</div>
              <div className="text-foreground">Final-year @ ITS · Open 2026</div>
            </div>
            <div className="absolute -left-6 top-1/3 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-lg animate-float-slow" style={{ animationDelay: "-2s" }}>
              <img src="https://cdn.simpleicons.org/python/3776AB" alt="" width={24} height={24} />
            </div>
            <div className="absolute -right-6 top-2/3 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-lg animate-float-slow" style={{ animationDelay: "-4s" }}>
              <img src="https://cdn.simpleicons.org/powerbi/F2C811" alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Python", "SQL", "Power BI", "Scikit-learn", "Looker Studio", "Streamlit", "Tableau", "MySQL", "Pandas", "NumPy", "Jupyter", "Git / GitHub"];
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

function Section({ id, eyebrow, title, children, reveal = "" }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode; reveal?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className={`reveal ${reveal} mb-12 max-w-2xl`}>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

const SKILL_ACCENTS = ["from-primary/15 to-secondary-1/15", "from-secondary-2/15 to-accent/15", "from-secondary-3/15 to-primary/15", "from-secondary-4/15 to-secondary-1/15"];

function About() {
  return (
    <Section id="about" eyebrow="01 — About" title={<>Final-year data scientist with a <span className="gradient-text">builder's instinct</span>.</>} reveal="reveal-blur">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="reveal reveal-left space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I study <span className="text-foreground">Data Science at Institut Teknologi Sepuluh Nopember (ITS)</span> and was named <span className="text-foreground">3rd Most Outstanding Student of ITS 2026</span>. I'm an awardee of the <span className="text-foreground">Beasiswa Indonesia Maju (BIM) DN</span> scholarship from Kemdiktisaintek RI.
          </p>
          <p>
            My work spans the full analytics stack — from collecting and modeling messy data, to building interactive dashboards in Power BI and Looker Studio, to deploying ML pipelines that real users depend on.
          </p>
          <p>
            Outside coursework, I lead student initiatives, compete in international analytics competitions, and consistently turn raw datasets into stories teams can actually act on.
          </p>
        </div>
        <div className="reveal reveal-right grid gap-3">
          {Object.entries(SKILLS).map(([cat, items], idx) => (
            <div key={cat} className={`rounded-2xl border border-border bg-gradient-to-br ${SKILL_ACCENTS[idx % SKILL_ACCENTS.length]} bg-card p-5 tilt-on-hover`}>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{cat}</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs">
                    <Logo name={s} size={12} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title={<>Where I've made an <span className="rainbow-text">impact</span>.</>} reveal="reveal-left">
      <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
        {EXPERIENCE.map((e, i) => (
          <li key={i} className={`reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} relative`}>
            <span className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center rounded-full bg-background md:-left-[45px]">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary via-secondary-1 to-accent animate-pulse-glow" />
            </span>
            <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-[0_20px_60px_-30px] hover:shadow-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <div className="mt-1 text-sm text-primary">{e.org}</div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const PROJECT_ACCENTS = [
  "from-primary/10 via-transparent to-secondary-1/10",
  "from-secondary-2/10 via-transparent to-accent/10",
  "from-secondary-3/10 via-transparent to-primary/10",
  "from-secondary-4/10 via-transparent to-secondary-1/10",
  "from-accent/10 via-transparent to-secondary-3/10",
  "from-secondary-1/10 via-transparent to-secondary-2/10",
];

function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title={<>Selected work across <span className="gradient-text">ML, BI & optimization</span>.</>} reveal="reveal-zoom">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <article key={i} className={`reveal reveal-zoom group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]} bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60`}>
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/30" />
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  <Logo name={t} size={12} />
                  {t}
                </span>
              ))}
            </div>
            {p.url && (
              <div className="mt-6 flex">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"><path d="M7 17 17 7M9 7h8v8"/></svg>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="04 — Recognition" title={<>Awards & achievements.</>} reveal="reveal-rotate">
      <div className="grid gap-3">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className={`reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary-1/5`}>
            <span className="font-display text-xl font-semibold text-muted-foreground group-hover:text-foreground">{a.year}</span>
            <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${a.scope === "International" ? "bg-primary/15 text-primary" : "bg-accent/20 text-accent-foreground"}`}>{a.scope}</span>
            <span className="text-sm md:text-base">{a.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title={<>Let's build something <span className="gradient-text">measurable</span>.</>} reveal="reveal-flip">
      <div className="reveal reveal-flip grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1.2fr_1fr] md:p-12">

        <div>
          <p className="text-muted-foreground">
            I'm currently open to internships and entry-level roles in data analytics, data science, and business intelligence. Reach out — I usually reply within a day.
          </p>
          <div className="mt-8 space-y-3 font-mono text-sm">
            <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="text-muted-foreground">email</span>→ {SOCIALS.email}
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="text-muted-foreground">linkedin</span>→ /in/dimaswahyusaputra111
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="text-muted-foreground">instagram</span>→ @dwhyu.s_
            </a>
            <a href={`tel:${SOCIALS.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary">
              <span className="text-muted-foreground">phone</span>→ +62 813 1121 1367
            </a>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">based</span>→ Surabaya, East Java
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={CV_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary-1 to-accent px-4 py-2 text-sm font-medium text-primary-foreground transition hover:scale-[1.03]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
              Download CV
            </a>
            <SocialIcons size={18} />
          </div>
        </div>
        <a href={`mailto:${SOCIALS.email}?subject=Opportunity for Dimas`} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary-1 to-accent p-8 text-primary-foreground transition hover:scale-[1.02]">
          <div className="font-mono text-xs uppercase tracking-widest opacity-80">Start a conversation</div>
          <div className="mt-3 font-display text-3xl font-semibold leading-tight">Say hi →</div>
          <div className="mt-6 text-sm opacity-90">For collaborations, internships, freelance dashboards, or just to talk about data.</div>
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
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
