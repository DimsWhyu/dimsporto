import { useEffect, useState, useMemo } from "react";
import { Github, ArrowUpRight, Loader2 } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const USERNAME = "DimsWhyu";
const GITHUB_URL = `https://github.com/${USERNAME}`;

export function GitHubContributions() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
        );
        if (!res.ok) throw new Error("Failed to fetch github contributions");
        const json: ApiResponse = await res.json();
        if (isMounted) {
          setData(json.contributions || []);
          const total =
            json.total?.lastYear ?? json.contributions.reduce((acc, c) => acc + c.count, 0);
          setTotalCount(total);
        }
      } catch (err) {
        console.error("Failed to load GitHub contributions", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Group contributions into weeks (columns) & generate month labels
  const { weeks, monthLabels } = useMemo(() => {
    if (!data.length) return { weeks: [], monthLabels: [] };

    // Group days into columns of 7
    const w: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    data.forEach((day, idx) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || idx === data.length - 1) {
        w.push(currentWeek);
        currentWeek = [];
      }
    });

    // Month labels positioning
    const months: { label: string; colIndex: number }[] = [];
    let lastMonth = "";

    w.forEach((week, colIdx) => {
      const firstDayInWeek = week[0];
      if (firstDayInWeek) {
        const d = new Date(firstDayInWeek.date);
        const monthName = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
        if (monthName !== lastMonth) {
          months.push({ label: monthName, colIndex: colIdx });
          lastMonth = monthName;
        }
      }
    });

    return { weeks: w, monthLabels: months };
  }, [data]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-500/40 dark:bg-emerald-500/40 border-emerald-500/30";
      case 2:
        return "bg-emerald-500/70 dark:bg-emerald-500/70 border-emerald-400/50";
      case 3:
        return "bg-emerald-500 dark:bg-emerald-400 border-emerald-300";
      case 4:
        return "bg-emerald-600 dark:bg-emerald-300 border-emerald-200";
      default:
        return "bg-surface-2/80 dark:bg-surface-2/90 border-border/60";
    }
  };

  return (
    <div className="mt-8 rounded-2xl border-2 border-border/90 bg-card p-6 shadow-md transition-all hover:border-primary/60 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            GitHub Contributions
          </span>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2 px-3 py-1 text-xs font-mono text-foreground hover:border-primary hover:text-primary transition-all shadow-2xs"
        >
          <Github className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Grid Container */}
      <div className="mt-4 overflow-x-auto pb-2 scrollbar-none">
        {loading ? (
          <div className="flex h-28 items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
            <Loader2 className="size-4 animate-spin text-primary" />
            <span>Loading contributions...</span>
          </div>
        ) : (
          <div className="min-w-[540px]">
            {/* Months Header */}
            <div className="relative mb-2 flex text-[10px] font-mono font-semibold uppercase text-muted-foreground h-4">
              {monthLabels.map((m, i) => (
                <span
                  key={`${m.label}-${i}`}
                  style={{
                    position: "absolute",
                    left: `${(m.colIndex / (weeks.length || 1)) * 100}%`,
                  }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Matrix Grid */}
            <div className="flex gap-[3.5px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`size-2.5 rounded-[2.5px] border transition-all duration-150 ${getLevelColor(
                        day.level,
                      )} hover:scale-130 hover:z-10 shadow-2xs`}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t-2 border-border/80 pt-3.5">
        <div className="font-mono text-xs text-muted-foreground">
          {hoveredDay ? (
            <span>
              <strong className="text-foreground font-semibold">{hoveredDay.count}</strong>{" "}
              contributions on {hoveredDay.date}
            </span>
          ) : (
            <span>
              <strong className="text-foreground font-semibold">
                {totalCount !== null ? totalCount : 0}
              </strong>{" "}
              CONTRIBUTIONS
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          LAST YEAR
        </span>
      </div>
    </div>
  );
}
