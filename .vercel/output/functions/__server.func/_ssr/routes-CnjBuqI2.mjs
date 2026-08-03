import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Calendar, D as ArrowUpRight, E as Award, O as ArrowRight, S as ChevronLeft, T as Briefcase, _ as Github, a as Sun, b as Crown, c as RotateCcw, d as Medal, f as Maximize2, g as Instagram, h as Linkedin, i as Trophy, l as Phone, m as LoaderCircle, n as ZoomIn, o as Sparkles, p as Mail, r as X, s as RotateCw, t as ZoomOut, u as Moon, v as ExternalLink, w as Building2, x as ChevronRight, y as Download } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as motion, i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion$1 } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CnjBuqI2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var dimas_formal_default = "/assets/dimas-formal-D5kYmjN1.png";
var memoji_default = "/assets/memoji-DktfebgO.png";
var logo_nav_default = "/assets/logo-nav-B4PF436_.png";
var logo_nav_white_default = "/assets/logo-nav-white-BOVcUqNG.png";
var ojk_logo_default = "/assets/ojk-logo-Cs-uygCR.jpg";
var idx_logo_default = "/assets/idx-logo-D1vxuoLN.png";
var pkuy_logo_default = "/assets/pkuy-logo-Dw50WDZ8.jpg";
var fsad_logo_default = "/assets/fsad-logo-DYZrpq_Y.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function polygonCollapsed(cx, cy, vertexCount) {
	return `polygon(${Array.from({ length: vertexCount }, () => `${cx}px ${cy}px`).join(", ")})`;
}
function getThemeTransitionClipPaths(variant, cx, cy, maxRadius, viewportWidth, viewportHeight) {
	switch (variant) {
		case "circle": return [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxRadius}px at ${cx}px ${cy}px)`];
		case "square": {
			const halfW = Math.max(cx, viewportWidth - cx);
			const halfH = Math.max(cy, viewportHeight - cy);
			const halfSide = Math.max(halfW, halfH) * 1.05;
			const end = [
				`${cx - halfSide}px ${cy - halfSide}px`,
				`${cx + halfSide}px ${cy - halfSide}px`,
				`${cx + halfSide}px ${cy + halfSide}px`,
				`${cx - halfSide}px ${cy + halfSide}px`
			].join(", ");
			return [polygonCollapsed(cx, cy, 4), `polygon(${end})`];
		}
		case "triangle": {
			const scale = maxRadius * 2.2;
			const dx = Math.sqrt(3) / 2 * scale;
			const verts = [
				`${cx}px ${cy - scale}px`,
				`${cx + dx}px ${cy + .5 * scale}px`,
				`${cx - dx}px ${cy + .5 * scale}px`
			].join(", ");
			return [polygonCollapsed(cx, cy, 3), `polygon(${verts})`];
		}
		case "diamond": {
			const R = maxRadius * Math.SQRT2;
			const end = [
				`${cx}px ${cy - R}px`,
				`${cx + R}px ${cy}px`,
				`${cx}px ${cy + R}px`,
				`${cx - R}px ${cy}px`
			].join(", ");
			return [polygonCollapsed(cx, cy, 4), `polygon(${end})`];
		}
		case "hexagon": {
			const R = maxRadius * Math.SQRT2;
			const verts = [];
			for (let i = 0; i < 6; i++) {
				const a = -Math.PI / 2 + i * Math.PI / 3;
				verts.push(`${cx + R * Math.cos(a)}px ${cy + R * Math.sin(a)}px`);
			}
			return [polygonCollapsed(cx, cy, 6), `polygon(${verts.join(", ")})`];
		}
		case "rectangle": {
			const halfW = Math.max(cx, viewportWidth - cx);
			const halfH = Math.max(cy, viewportHeight - cy);
			const end = [
				`${cx - halfW}px ${cy - halfH}px`,
				`${cx + halfW}px ${cy - halfH}px`,
				`${cx + halfW}px ${cy + halfH}px`,
				`${cx - halfW}px ${cy + halfH}px`
			].join(", ");
			return [polygonCollapsed(cx, cy, 4), `polygon(${end})`];
		}
		case "star": {
			const R = maxRadius * Math.SQRT2 * 1.03;
			const innerRatio = .42;
			const starPolygon = (radius) => {
				const verts = [];
				for (let i = 0; i < 5; i++) {
					const outerA = -Math.PI / 2 + i * 2 * Math.PI / 5;
					verts.push(`${cx + radius * Math.cos(outerA)}px ${cy + radius * Math.sin(outerA)}px`);
					const innerA = outerA + Math.PI / 5;
					verts.push(`${cx + radius * innerRatio * Math.cos(innerA)}px ${cy + radius * innerRatio * Math.sin(innerA)}px`);
				}
				return `polygon(${verts.join(", ")})`;
			};
			return [starPolygon(Math.max(2, R * .025)), starPolygon(R)];
		}
		default: return [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxRadius}px at ${cx}px ${cy}px)`];
	}
}
var AnimatedThemeToggler = ({ className, duration = 400, variant, fromCenter = false, theme, onThemeChange, ...props }) => {
	const shape = variant ?? "circle";
	const isControlled = theme !== void 0;
	const [internalIsDark, setInternalIsDark] = (0, import_react.useState)(false);
	const isDark = isControlled ? theme === "dark" : internalIsDark;
	const buttonRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isControlled) return;
		const updateTheme = () => {
			setInternalIsDark(document.documentElement.classList.contains("dark"));
		};
		updateTheme();
		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		return () => observer.disconnect();
	}, [isControlled]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		ref: buttonRef,
		onClick: (0, import_react.useCallback)(() => {
			const button = buttonRef.current;
			if (!button) return;
			const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
			const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
			let x;
			let y;
			if (fromCenter) {
				x = viewportWidth / 2;
				y = viewportHeight / 2;
			} else {
				const { top, left, width, height } = button.getBoundingClientRect();
				x = left + width / 2;
				y = top + height / 2;
			}
			const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));
			const applyTheme = () => {
				const newTheme = !isDark;
				document.documentElement.classList.toggle("dark");
				if (isControlled) onThemeChange?.(newTheme ? "dark" : "light");
				else {
					setInternalIsDark(newTheme);
					localStorage.setItem("theme", newTheme ? "dark" : "light");
				}
			};
			if (typeof document.startViewTransition !== "function") {
				applyTheme();
				return;
			}
			const clipPath = getThemeTransitionClipPaths(shape, x, y, maxRadius, viewportWidth, viewportHeight);
			const root = document.documentElement;
			root.dataset.magicuiThemeVt = "active";
			root.style.setProperty("--magicui-theme-toggle-vt-duration", `${duration}ms`);
			root.style.setProperty("--magicui-theme-vt-clip-from", clipPath[0]);
			const cleanup = () => {
				delete root.dataset.magicuiThemeVt;
				root.style.removeProperty("--magicui-theme-toggle-vt-duration");
				root.style.removeProperty("--magicui-theme-vt-clip-from");
			};
			const transition = document.startViewTransition(() => {
				(0, import_react_dom.flushSync)(applyTheme);
			});
			if (typeof transition?.finished?.finally === "function") transition.finished.finally(cleanup);
			else cleanup();
			const ready = transition?.ready;
			if (ready && typeof ready.then === "function") ready.then(() => {
				document.documentElement.animate({ clipPath }, {
					duration,
					easing: shape === "star" ? "linear" : "ease-in-out",
					fill: "forwards",
					pseudoElement: "::view-transition-new(root)"
				});
			});
		}, [
			shape,
			fromCenter,
			duration,
			isDark,
			isControlled,
			onThemeChange
		]),
		className: cn(className),
		...props,
		children: [isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Toggle theme"
		})]
	});
};
var DEFAULT_SIZE = 40;
var DEFAULT_MAGNIFICATION = 60;
var DEFAULT_DISTANCE = 140;
var DEFAULT_DISABLEMAGNIFICATION = false;
var dockVariants = cva("supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md");
var Dock = import_react.forwardRef(({ className, children, iconSize = DEFAULT_SIZE, iconMagnification = DEFAULT_MAGNIFICATION, disableMagnification = DEFAULT_DISABLEMAGNIFICATION, iconDistance = DEFAULT_DISTANCE, direction = "middle", orientation = "horizontal", ...props }, ref) => {
	const mouseValue = useMotionValue(Infinity);
	const renderChildren = () => {
		return import_react.Children.map(children, (child) => {
			if (import_react.isValidElement(child) && child.type === DockIcon) return import_react.cloneElement(child, {
				...child.props,
				mouseValue,
				size: iconSize,
				magnification: iconMagnification,
				disableMagnification,
				distance: iconDistance,
				orientation
			});
			return child;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
		ref,
		onMouseMove: (e) => mouseValue.set(orientation === "horizontal" ? e.pageX : e.pageY),
		onMouseLeave: () => mouseValue.set(Infinity),
		...props,
		className: cn(dockVariants({ className }), orientation === "horizontal" ? "h-[58px] w-max flex-row" : "w-[58px] h-max flex-col", {
			"items-start": direction === "top" && orientation === "horizontal",
			"items-center": direction === "middle",
			"items-end": direction === "bottom" && orientation === "horizontal"
		}),
		children: renderChildren()
	});
});
Dock.displayName = "Dock";
var DockIcon = ({ size = DEFAULT_SIZE, magnification = DEFAULT_MAGNIFICATION, disableMagnification, distance = DEFAULT_DISTANCE, mouseValue, orientation = "horizontal", className, children, ...props }) => {
	const ref = (0, import_react.useRef)(null);
	const padding = Math.max(6, size * .2);
	const defaultMouseValue = useMotionValue(Infinity);
	const distanceCalc = useTransform(mouseValue ?? defaultMouseValue, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? {
			left: 0,
			top: 0,
			width: 0,
			height: 0
		};
		if (orientation === "horizontal") return val - (bounds.left + window.scrollX + bounds.width / 2);
		else return val - (bounds.top + window.scrollY + bounds.height / 2);
	});
	const targetSize = disableMagnification ? size : magnification;
	const scaleSize = useSpring(useTransform(distanceCalc, [
		-distance,
		0,
		distance
	], [
		size,
		targetSize,
		size
	]), {
		mass: .1,
		stiffness: 150,
		damping: 12
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
		ref,
		style: {
			width: scaleSize,
			height: scaleSize,
			padding
		},
		className: cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", disableMagnification && "hover:bg-muted-foreground transition-colors", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })
	});
};
DockIcon.displayName = "DockIcon";
var TextReveal = ({ children, className }) => {
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 0.85", "end 0.35"]
	});
	if (typeof children !== "string") throw new Error("TextReveal: children must be a string");
	const words = children.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: sectionRef,
		className: cn("relative z-0 h-[100vh]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 mx-auto flex h-screen max-w-5xl items-center justify-start px-6 py-8 md:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flex flex-wrap justify-start text-3xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight text-left",
				children: words.map((word, i) => {
					const start = i / words.length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Word, {
						progress: scrollYProgress,
						range: [start, start + 1 / words.length],
						children: word
					}, i);
				})
			})
		})
	});
};
var Word = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block mx-[0.18em] my-[0.08em] select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground/20 dark:text-foreground/20",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			style: { opacity },
			className: "absolute inset-0 text-foreground font-extrabold",
			children
		})]
	});
};
/**
* The InteractiveGridPattern component.
*
* @see InteractiveGridPatternProps for the props interface.
* @returns A React component.
*/
function InteractiveGridPattern({ width = 40, height = 40, squares = [24, 24], className, squaresClassName, ...props }) {
	const [horizontal, vertical] = squares;
	const [hoveredSquare, setHoveredSquare] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "100%",
		height: "100%",
		className: cn("absolute inset-0 h-full w-full border border-border/30", className),
		...props,
		children: Array.from({ length: horizontal * vertical }).map((_, index) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: index % horizontal * width,
				y: Math.floor(index / horizontal) * height,
				width,
				height,
				className: cn("stroke-border/40 transition-all duration-100 ease-in-out not-[&:hover]:duration-1000", hoveredSquare === index ? "fill-primary/10 dark:fill-primary/20" : "fill-transparent", squaresClassName),
				onMouseEnter: () => setHoveredSquare(index),
				onMouseLeave: () => setHoveredSquare(null)
			}, index);
		})
	});
}
var USERNAME = "DimsWhyu";
var GITHUB_URL = `https://github.com/${USERNAME}`;
function GitHubContributions() {
	const [data, setData] = (0, import_react.useState)([]);
	const [totalCount, setTotalCount] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [hoveredDay, setHoveredDay] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		async function fetchContributions() {
			try {
				const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`);
				if (!res.ok) throw new Error("Failed to fetch github contributions");
				const json = await res.json();
				if (isMounted) {
					setData(json.contributions || []);
					setTotalCount(json.total?.lastYear ?? json.contributions.reduce((acc, c) => acc + c.count, 0));
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
	const { weeks, monthLabels } = (0, import_react.useMemo)(() => {
		if (!data.length) return {
			weeks: [],
			monthLabels: []
		};
		const w = [];
		let currentWeek = [];
		data.forEach((day, idx) => {
			currentWeek.push(day);
			if (currentWeek.length === 7 || idx === data.length - 1) {
				w.push(currentWeek);
				currentWeek = [];
			}
		});
		const months = [];
		let lastMonth = "";
		w.forEach((week, colIdx) => {
			const firstDayInWeek = week[0];
			if (firstDayInWeek) {
				const monthName = new Date(firstDayInWeek.date).toLocaleString("en-US", { month: "short" }).toUpperCase();
				if (monthName !== lastMonth) {
					months.push({
						label: monthName,
						colIndex: colIdx
					});
					lastMonth = monthName;
				}
			}
		});
		return {
			weeks: w,
			monthLabels: months
		};
	}, [data]);
	const getLevelColor = (level) => {
		switch (level) {
			case 1: return "bg-emerald-500/40 dark:bg-emerald-500/40 border-emerald-500/30";
			case 2: return "bg-emerald-500/70 dark:bg-emerald-500/70 border-emerald-400/50";
			case 3: return "bg-emerald-500 dark:bg-emerald-400 border-emerald-300";
			case 4: return "bg-emerald-600 dark:bg-emerald-300 border-emerald-200";
			default: return "bg-surface-2/80 dark:bg-surface-2/90 border-border/60";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 sm:mt-8 w-full max-w-full min-w-0 overflow-hidden rounded-2xl border-2 border-border/90 bg-card p-4 sm:p-6 shadow-md transition-all hover:border-primary/60 hover:shadow-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "GitHub Contributions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sm:hidden font-mono text-[10px] text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20",
						children: "Slide ↔"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: GITHUB_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "group inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2 px-3 py-1 text-xs font-mono text-foreground hover:border-primary hover:text-primary transition-all shadow-2xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4 text-muted-foreground group-hover:text-primary transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-4 w-full overflow-x-auto pb-3 touch-pan-x custom-scrollbar",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-28 items-center justify-center gap-2 text-xs font-mono text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading contributions..." })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full min-w-[480px] sm:min-w-[500px] lg:min-w-0 select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mb-2 flex text-[9px] sm:text-[10px] font-mono font-semibold uppercase text-muted-foreground h-4",
						children: monthLabels.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								position: "absolute",
								left: `${m.colIndex / (weeks.length || 1) * 100}%`
							},
							children: m.label
						}, `${m.label}-${i}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-between gap-[2px] sm:gap-[3.5px] lg:gap-[4px] w-full",
						children: weeks.map((week, wIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-[2px] sm:gap-[3.5px] lg:gap-[4px] flex-1",
							children: week.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onMouseEnter: () => setHoveredDay(day),
								onMouseLeave: () => setHoveredDay(null),
								onTouchStart: () => setHoveredDay(day),
								className: `w-full aspect-square rounded-[2px] sm:rounded-[2.5px] border transition-all duration-150 ${getLevelColor(day.level)} hover:scale-130 hover:z-10 shadow-2xs`,
								title: `${day.count} contributions on ${day.date}`
							}, day.date))
						}, wIdx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between border-t-2 border-border/80 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs text-muted-foreground",
					children: hoveredDay ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground font-semibold",
							children: hoveredDay.count
						}),
						" ",
						"contributions on ",
						hoveredDay.date
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground font-semibold",
							children: totalCount !== null ? totalCount : 0
						}),
						" ",
						"CONTRIBUTIONS"
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: "LAST YEAR"
				})]
			})
		]
	});
}
var GREETINGS = [
	"Halo",
	"Hello",
	"你好",
	"Hola",
	"مرحبًا",
	"Bonjour",
	"こんにちは"
];
function InitialLoader({ onComplete }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [isFinished, setIsFinished] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (index < GREETINGS.length - 1) {
			const timer = setTimeout(() => {
				setIndex((prev) => prev + 1);
			}, 260);
			return () => clearTimeout(timer);
		} else {
			const timer = setTimeout(() => {
				setIsFinished(true);
				document.body.style.overflow = "";
				if (onComplete) onComplete();
			}, 350);
			return () => clearTimeout(timer);
		}
	}, [index, onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !isFinished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { y: 0 },
		exit: {
			y: "-100%",
			transition: {
				duration: .85,
				ease: [
					.76,
					0,
					.24,
					1
				]
			}
		},
		className: "fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-background p-6 md:p-12 select-none overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/25 blur-3xl animate-blob pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary-1/20 blur-3xl animate-blob animation-delay-2000 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 w-full flex items-center justify-between font-mono text-xs text-muted-foreground uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-primary animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground",
						children: "Dimas Portfolio 2026"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline font-semibold",
					children: "ITS / Data Science"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-5xl px-4 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[160px] sm:min-h-[220px] md:min-h-[260px] w-full flex items-center justify-center py-6 px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							ease: "easeOut"
						},
						className: "flex items-center justify-center gap-3 sm:gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-foreground text-center leading-none",
							children: GREETINGS[index]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3.5 w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-full bg-primary animate-pulse shrink-0" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative z-10 h-6" })
		]
	}, "loader") });
}
var AnimatedBeam = ({ className, containerRef, fromRef, toRef, curvature = 0, reverse = false, duration = 5, delay = 0, pathColor = "currentColor", pathWidth = 2, pathOpacity = .2, gradientStartColor = "#0066cc", gradientStopColor = "#2997ff", repeat = Infinity, repeatDelay = 0, startXOffset = 0, startYOffset = 0, endXOffset = 0, endYOffset = 0 }) => {
	const id = (0, import_react.useId)();
	const [pathD, setPathD] = (0, import_react.useState)("");
	const [svgDimensions, setSvgDimensions] = (0, import_react.useState)({
		width: 0,
		height: 0
	});
	const gradientCoordinates = reverse ? {
		x1: ["90%", "-10%"],
		x2: ["100%", "0%"],
		y1: ["0%", "0%"],
		y2: ["0%", "0%"]
	} : {
		x1: ["10%", "110%"],
		x2: ["0%", "100%"],
		y1: ["0%", "0%"],
		y2: ["0%", "0%"]
	};
	(0, import_react.useEffect)(() => {
		const updatePath = () => {
			if (containerRef.current && fromRef.current && toRef.current) {
				const containerRect = containerRef.current.getBoundingClientRect();
				const rectA = fromRef.current.getBoundingClientRect();
				const rectB = toRef.current.getBoundingClientRect();
				const svgWidth = containerRect.width;
				const svgHeight = containerRect.height;
				setSvgDimensions({
					width: svgWidth,
					height: svgHeight
				});
				const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
				const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
				const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
				const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
				const controlY = startY - curvature;
				setPathD(`M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`);
			}
		};
		const resizeObserver = new ResizeObserver(() => {
			updatePath();
		});
		if (containerRef.current) resizeObserver.observe(containerRef.current);
		updatePath();
		return () => {
			resizeObserver.disconnect();
		};
	}, [
		containerRef,
		fromRef,
		toRef,
		curvature,
		startXOffset,
		startYOffset,
		endXOffset,
		endYOffset
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		fill: "none",
		width: svgDimensions.width,
		height: svgDimensions.height,
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("pointer-events-none absolute top-0 left-0 transform-gpu stroke-2", className),
		viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathD,
				stroke: pathColor,
				strokeWidth: pathWidth,
				strokeOpacity: pathOpacity,
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: pathD,
				strokeWidth: pathWidth,
				stroke: `url(#${id})`,
				strokeOpacity: "1",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.linearGradient, {
				className: "transform-gpu",
				id,
				gradientUnits: "userSpaceOnUse",
				initial: {
					x1: "0%",
					x2: "0%",
					y1: "0%",
					y2: "0%"
				},
				animate: {
					x1: gradientCoordinates.x1,
					x2: gradientCoordinates.x2,
					y1: gradientCoordinates.y1,
					y2: gradientCoordinates.y2
				},
				transition: {
					delay,
					duration,
					ease: [
						.16,
						1,
						.3,
						1
					],
					repeat,
					repeatDelay
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						stopColor: gradientStartColor,
						stopOpacity: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: gradientStartColor }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "32.5%",
						stopColor: gradientStopColor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: gradientStopColor,
						stopOpacity: "0"
					})
				]
			}) })
		]
	});
};
var TOP_SKILLS = [
	"Python",
	"SQL",
	"MySQL",
	"Machine Learning",
	"Big Data",
	"Data Warehousing",
	"Statistical Analysis",
	"Streamlit"
];
var BOTTOM_SKILLS = [
	"Power BI",
	"Looker Studio",
	"Tableau",
	"Excel / VBA",
	"Git / GitHub",
	"Jupyter",
	"Google Colab",
	"Pentaho Kettle"
];
var ALL_SKILLS = [...TOP_SKILLS, ...BOTTOM_SKILLS];
var CUSTOM_ICONS$1 = {
	Tableau: "https://freepnglogo.com/images/all_img/tableau-software-logo-b762.png",
	"Power BI": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png",
	"Excel / VBA": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png"
};
var ICONS$1 = {
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
	"Statistical Analysis": "r/276DC3"
};
function SkillLogo({ name, elementRef, hoveredSkill, setHoveredSkill }) {
	const url = CUSTOM_ICONS$1[name] ?? (ICONS$1[name] ? `https://cdn.simpleicons.org/${ICONS$1[name]}` : null);
	const isHovered = hoveredSkill === name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: elementRef,
		title: name,
		onMouseEnter: () => setHoveredSkill(name),
		onMouseLeave: () => setHoveredSkill(null),
		onTouchStart: (e) => {
			e.stopPropagation();
			setHoveredSkill(isHovered ? null : name);
		},
		className: `group/icon relative flex h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border p-1.5 xs:p-2 sm:p-2.5 shadow-2xs transition-all duration-300 cursor-pointer shrink-0 ${isHovered ? "scale-115 z-40 border-primary bg-card ring-2 ring-primary/60 shadow-lg shadow-primary/20 opacity-100" : hoveredSkill !== null && !isHovered ? "opacity-25 blur-[1.5px] scale-90 border-border/40 bg-card/40" : "border-border/80 bg-card/90 hover:border-primary hover:scale-110 opacity-100"}`,
		children: [url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: name,
			className: "h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 object-contain"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-primary",
			children: name.slice(0, 2)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `absolute -bottom-7 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 font-mono text-[10px] font-medium text-background shadow-md ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover/icon:opacity-100 group-hover/icon:scale-100"}`,
			children: name
		})]
	});
}
function SkillsBeamShowcase() {
	const containerRef = (0, import_react.useRef)(null);
	const centerRef = (0, import_react.useRef)(null);
	const [hoveredSkill, setHoveredSkill] = (0, import_react.useState)(null);
	const skillRefs = (0, import_react.useRef)({});
	ALL_SKILLS.forEach((skill) => {
		if (!skillRefs.current[skill]) skillRefs.current[skill] = (0, import_react.createRef)();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative flex flex-col items-center justify-between w-full max-w-full min-w-0 rounded-3xl border border-border/80 bg-card p-3 xs:p-4 sm:p-6 shadow-sm overflow-hidden min-h-[440px] xs:min-h-[480px] sm:min-h-[520px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full flex items-center justify-center z-10 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold text-center",
					children: "Technical Stack"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex flex-col items-center gap-2.5 sm:gap-3 z-10 my-1 sm:my-2 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md",
					children: TOP_SKILLS.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillLogo, {
						name: item,
						elementRef: (el) => {
							if (skillRefs.current[item]) skillRefs.current[item].current = el;
						},
						hoveredSkill,
						setHoveredSkill
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md",
					children: TOP_SKILLS.slice(4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillLogo, {
						name: item,
						elementRef: (el) => {
							if (skillRefs.current[item]) skillRefs.current[item].current = el;
						},
						hoveredSkill,
						setHoveredSkill
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: centerRef,
				className: `z-30 my-4 sm:my-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border-2 border-primary/50 bg-card p-2.5 sm:p-3 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${hoveredSkill !== null ? "scale-105 border-primary shadow-primary/20" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_nav_default,
					alt: "Dimas Logo",
					className: "h-7 sm:h-8 w-auto object-contain dark:hidden"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_nav_white_default,
					alt: "Dimas Logo",
					className: "h-7 sm:h-8 w-auto object-contain hidden dark:block"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex flex-col items-center gap-2.5 sm:gap-3 z-10 my-1 sm:my-2 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md",
					children: BOTTOM_SKILLS.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillLogo, {
						name: item,
						elementRef: (el) => {
							if (skillRefs.current[item]) skillRefs.current[item].current = el;
						},
						hoveredSkill,
						setHoveredSkill
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 max-w-full sm:max-w-md",
					children: BOTTOM_SKILLS.slice(4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillLogo, {
						name: item,
						elementRef: (el) => {
							if (skillRefs.current[item]) skillRefs.current[item].current = el;
						},
						hoveredSkill,
						setHoveredSkill
					}, item))
				})]
			}),
			ALL_SKILLS.map((skill, idx) => {
				const ref = skillRefs.current[skill];
				if (!ref) return null;
				const isHovered = hoveredSkill === skill;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedBeam, {
					containerRef,
					fromRef: ref,
					toRef: centerRef,
					curvature: (idx % 2 === 0 ? 1 : -1) * (15 + idx % 4 * 8),
					pathColor: isHovered ? "#0066cc" : "currentColor",
					pathWidth: isHovered ? 3 : 1.5,
					pathOpacity: isHovered ? .8 : hoveredSkill !== null ? .05 : .25,
					gradientStartColor: isHovered ? "#0066cc" : "#0066cc",
					gradientStopColor: isHovered ? "#2997ff" : "#2997ff",
					duration: 3 + idx % 4 * .6,
					delay: idx * .2 % 2
				}, skill);
			})
		]
	});
}
var parkvision_default = "/assets/parkvision-BQEk1JqW.png";
var indostock_default = "/assets/indostock-BxjPYMPu.png";
var order_dashboard_default = "/assets/order-dashboard-BaWm4Ipw.png";
var customer_cluster_default = "/assets/customer-cluster-BovZ3pPX.png";
var tsp_optimizer_default = "/assets/tsp-optimizer-CKZiYEtc.png";
var simulation_das_default = "/assets/simulation-das-BAmuLjr8.png";
var data_warehouse_default = "/assets/data-warehouse-BCMUrhJu.jpeg";
var _01_ibsc_unj_2026_default = "/assets/01-ibsc-unj-2026-BaFFQMIm.jpg";
var _02_dokter_data_2026_default = "/assets/02-dokter-data-2026-BrBPuIlx.png";
var _03_satria_data_2025_default = "/assets/03-satria-data-2025-5ZOsQJD-.jpg";
var _04_bnyc_ub_2025_default = "/assets/04-bnyc-ub-2025-vn18YvTD.png";
var _05_isfest_umn_2025_default = "/assets/05-isfest-umn-2025-C7PZCtvS.png";
var _06_iyt_itb_2024_default = "/assets/06-iyt-itb-2024-C6-B3iWb.png";
var _07_4c_filkom_ub_2024_default = "/assets/07-4c-filkom-ub-2024-CvRGNX1N.png";
var _08_gba_olympiad_2023_default = "/assets/08-gba-olympiad-2023-DpH-80vi.jpg";
function FlippingCard({ frontContent, backContent, className, height = 420, width, ...props }) {
	const [isFlipped, setIsFlipped] = (0, import_react.useState)(false);
	const handleContainerClick = (e) => {
		if (e.target.closest("a, button")) return;
		setIsFlipped((prev) => !prev);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("group [perspective:1000px] w-full cursor-pointer select-none touch-manipulation", className),
		style: {
			height: typeof height === "number" ? `${height}px` : height,
			width: width ? typeof width === "number" ? `${width}px` : width : "100%"
		},
		onClick: handleContainerClick,
		onMouseEnter: () => {
			if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) setIsFlipped(true);
		},
		onMouseLeave: () => {
			if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) setIsFlipped(false);
		},
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d]", isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 h-full w-full rounded-3xl border-2 border-border/90 bg-card shadow-lg [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden",
				children: frontContent
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 h-full w-full rounded-3xl border-2 border-primary/50 bg-card shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden",
				children: backContent
			})]
		})
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var ThreeDCarousel = ({ items = [], autoRotate = true, rotateInterval = 4500, cardHeight = 480, isMobileSwipe = true }) => {
	const [active, setActive] = (0, import_react.useState)(0);
	const carouselRef = (0, import_react.useRef)(null);
	const [isInView, setIsInView] = (0, import_react.useState)(false);
	const [isHovering, setIsHovering] = (0, import_react.useState)(false);
	const [touchStart, setTouchStart] = (0, import_react.useState)(null);
	const [touchEnd, setTouchEnd] = (0, import_react.useState)(null);
	const isMobile = useIsMobile();
	const minSwipeDistance = 40;
	const nextSlide = (0, import_react.useCallback)(() => {
		if (items.length === 0) return;
		setActive((prev) => (prev + 1) % items.length);
	}, [items.length]);
	const prevSlide = (0, import_react.useCallback)(() => {
		if (items.length === 0) return;
		setActive((prev) => (prev - 1 + items.length) % items.length);
	}, [items.length]);
	(0, import_react.useEffect)(() => {
		if (autoRotate && isInView && !isHovering && items.length > 1) {
			const interval = setInterval(nextSlide, rotateInterval);
			return () => clearInterval(interval);
		}
	}, [
		isInView,
		isHovering,
		autoRotate,
		rotateInterval,
		items.length,
		nextSlide
	]);
	(0, import_react.useEffect)(() => {
		const el = carouselRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: .2 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (!isInView) return;
			if (e.key === "ArrowLeft") prevSlide();
			else if (e.key === "ArrowRight") nextSlide();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isInView,
		prevSlide,
		nextSlide
	]);
	const onTouchStart = (e) => {
		if (!isMobileSwipe) return;
		setTouchStart(e.targetTouches[0].clientX);
		setTouchEnd(null);
	};
	const onTouchMove = (e) => {
		if (!isMobileSwipe) return;
		setTouchEnd(e.targetTouches[0].clientX);
	};
	const onTouchEnd = () => {
		if (!isMobileSwipe || !touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		if (distance > minSwipeDistance) nextSlide();
		else if (distance < -40) prevSlide();
	};
	const getCardStyle = (index) => {
		const total = items.length;
		if (total === 0) return {};
		let diff = (index - active) % total;
		if (diff > total / 2) diff -= total;
		if (diff < -total / 2) diff += total;
		if (diff === 0) return {
			transform: "translateX(0%) scale(1) rotateY(0deg)",
			opacity: 1,
			zIndex: 30,
			pointerEvents: "auto",
			filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.15))"
		};
		else if (diff === 1 || total === 2 && diff === -1) return {
			transform: isMobile ? "translateX(10%) scale(0.82) rotateY(-6deg)" : "translateX(45%) scale(0.92) rotateY(-15deg)",
			opacity: .5,
			zIndex: 20,
			cursor: "pointer",
			filter: "blur(0.5px)"
		};
		else if (diff === -1) return {
			transform: isMobile ? "translateX(-10%) scale(0.82) rotateY(6deg)" : "translateX(-45%) scale(0.92) rotateY(15deg)",
			opacity: .5,
			zIndex: 20,
			cursor: "pointer",
			filter: "blur(0.5px)"
		};
		else {
			const dir = diff > 0 ? 1 : -1;
			return {
				transform: `translateX(${dir * (isMobile ? 35 : 80)}%) scale(0.7) rotateY(${-dir * 20}deg)`,
				opacity: 0,
				zIndex: 10,
				pointerEvents: "none"
			};
		}
	};
	if (!items || items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ThreeDCarousel",
		className: "relative w-full py-2 sm:py-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full mx-auto px-1 sm:px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-visible h-[480px] xs:h-[500px] sm:h-[580px] flex items-center justify-center [perspective:1200px]",
				onMouseEnter: () => setIsHovering(true),
				onMouseLeave: () => setIsHovering(false),
				onTouchStart,
				onTouchMove,
				onTouchEnd,
				ref: carouselRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: items.map((item, index) => {
							const cardStyle = getCardStyle(index);
							const isActive = index === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onClick: () => !isActive && setActive(index),
								style: cardStyle,
								className: "absolute top-1/2 -translate-y-1/2 w-[calc(100vw-4.5rem)] xs:w-[calc(100vw-5rem)] max-w-[300px] xs:max-w-[320px] sm:max-w-[440px] md:max-w-[500px] transition-all duration-500 ease-out preserve-3d",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									style: { minHeight: isMobile ? "390px" : `${cardHeight}px` },
									className: `overflow-hidden border-2 transition-all duration-300 flex flex-col bg-card/95 backdrop-blur-md ${isActive ? "border-primary/60 ring-2 ring-primary/20 shadow-2xl" : "border-border/80 shadow-md hover:border-primary/40"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden border-b border-border/60 ${item.gradient || "bg-gradient-to-r from-primary/20 via-surface-2 to-card"}`,
										style: item.imageUrl ? {
											backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${item.imageUrl})`,
											backgroundSize: "cover",
											backgroundPosition: "center"
										} : void 0,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2.5 z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 sm:gap-3 min-w-0",
												children: [item.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.logoUrl,
													alt: item.brand,
													className: "h-8 sm:h-12 w-auto max-w-[110px] sm:max-w-[150px] object-contain rounded-md shadow-xs shrink-0"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-8 h-8 sm:w-10 sm:h-10 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-4 h-4 sm:w-5 sm:h-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "truncate",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground block truncate",
														children: item.brand
													})
												})]
											}), item.period && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border/80 bg-background/80 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-medium text-foreground shadow-2xs shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.period })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2.5 sm:mt-4 z-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 sm:gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-base sm:text-xl font-bold text-foreground line-clamp-1",
													children: item.title
												})]
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "p-3.5 sm:p-6 flex flex-col justify-between flex-grow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3 leading-relaxed",
											children: item.description
										}), item.points && item.points.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed",
											children: item.points.map((pt, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 animate-pulse-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground/90",
													children: pt
												})]
											}, idx))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-border/50 flex flex-col gap-2.5 sm:gap-3",
											children: [item.tags && item.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1 sm:gap-1.5",
												children: item.tags.map((tag, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] sm:text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400",
													children: tag
												}, idx))
											}), item.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: item.link,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all group",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn more" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })]
											})]
										})]
									})]
								})
							}, item.id);
						})
					}),
					items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute -left-1 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-background/90 hover:bg-background border border-border/90 rounded-full flex items-center justify-center text-foreground hover:text-primary z-40 shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer",
						onClick: prevSlide,
						"aria-label": "Previous Experience",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4 sm:w-6 sm:h-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute -right-1 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-background/90 hover:bg-background border border-border/90 rounded-full flex items-center justify-center text-foreground hover:text-primary z-40 shadow-lg transition-all hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer",
						onClick: nextSlide,
						"aria-label": "Next Experience",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 sm:w-6 sm:h-6" })
					})] }),
					items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-2 left-0 right-0 flex justify-center items-center space-x-2.5 z-40",
						children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${active === idx ? "bg-primary w-7 shadow-sm" : "bg-border hover:bg-muted-foreground/40 w-2.5"}`,
							onClick: () => setActive(idx),
							"aria-label": `Go to slide ${idx + 1}`
						}, idx))
					})
				]
			})
		})
	});
};
function CertificateModal({ isOpen, onClose, cert }) {
	const [scale, setScale] = (0, import_react.useState)(1);
	const [rotation, setRotation] = (0, import_react.useState)(0);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			setScale(1);
			setRotation(0);
			document.body.style.overflow = "hidden";
		} else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen, cert]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "+" || e.key === "=") handleZoomIn();
			else if (e.key === "-") handleZoomOut();
			else if (e.key === "r" || e.key === "R") handleReset();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);
	if (!isOpen || !cert || !mounted) return null;
	const handleZoomIn = () => {
		setScale((prev) => Math.min(prev + .25, 3.5));
	};
	const handleZoomOut = () => {
		setScale((prev) => Math.max(prev - .25, .75));
	};
	const handleReset = () => {
		setScale(1);
		setRotation(0);
	};
	const handleRotate = () => {
		setRotation((prev) => (prev + 90) % 360);
	};
	const handleWheel = (e) => {
		e.preventDefault();
		if (e.deltaY < 0) handleZoomIn();
		else handleZoomOut();
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		className: "fixed inset-0 z-[500000] flex flex-col items-center justify-between bg-black/90 backdrop-blur-2xl p-4 sm:p-6 select-none overflow-hidden",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/70 p-3 sm:p-4 text-white backdrop-blur-xl shadow-2xl mt-2 sm:mt-4",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 sm:h-5 sm:w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "truncate font-display text-xs sm:text-base font-bold text-white",
								children: cert.title
							}), cert.scope && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline-block rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary border border-primary/30 shrink-0 uppercase",
								children: cert.scope
							})]
						}), cert.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] sm:text-xs text-white/70",
							children: cert.subtitle
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-red-500/40 hover:border-red-500/60 active:scale-95 cursor-pointer",
						title: "Close (Esc)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: containerRef,
				className: "relative z-10 flex h-full w-full max-w-6xl flex-1 items-center justify-center overflow-hidden my-2 sm:my-4",
				onWheel: handleWheel,
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
					drag: scale > 1,
					dragConstraints: containerRef,
					dragElastic: .05,
					onDragStart: () => setIsDragging(true),
					onDragEnd: () => setIsDragging(false),
					animate: {
						scale,
						rotate: rotation
					},
					transition: {
						type: "spring",
						stiffness: 260,
						damping: 25
					},
					className: cn("flex items-center justify-center max-h-[70vh] max-w-[90vw] transition-cursor", scale > 1 ? isDragging ? "cursor-grabbing" : "cursor-grab" : "cursor-default"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cert.certificateUrl,
						alt: cert.title,
						className: "max-h-[70vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/10",
						style: { filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))" },
						draggable: false
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-white backdrop-blur-xl shadow-2xl mb-2 sm:mb-4",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleZoomOut,
						disabled: scale <= .75,
						className: "flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:opacity-40 cursor-pointer",
						title: "Zoom Out (-)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs font-medium w-12 text-center text-white/90",
						children: [Math.round(scale * 100), "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleZoomIn,
						disabled: scale >= 3.5,
						className: "flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:opacity-40 cursor-pointer",
						title: "Zoom In (+)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-[1px] bg-white/20 my-auto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleRotate,
						className: "flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 cursor-pointer",
						title: "Rotate 90°",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleReset,
						className: "flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 cursor-pointer",
						title: "Reset Zoom & Rotation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
					})
				]
			})
		]
	}) }), document.body);
}
function getRankTheme(title) {
	const t = title.toLowerCase();
	if (t.includes("1st place") || t.includes("gold medal") || t.includes("winner") || t.includes("juara 1")) return {
		category: "gold",
		badgeLabel: t.includes("gold") ? "Gold Medal" : "1st Place Winner",
		badgeClass: "bg-amber-400/20 text-amber-500 dark:text-amber-300 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
		cardBorderClass: "border-amber-400/60 dark:border-amber-400/50 hover:border-amber-400/90",
		cardGlowClass: "shadow-[0_4px_25px_-4px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_35px_rgba(245,158,11,0.45)] hover:scale-[1.015]",
		cardBgGradient: "from-amber-500/15 via-card/95 to-amber-950/20",
		topSheenClass: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]",
		iconBgClass: "bg-gradient-to-br from-amber-400/30 to-yellow-500/20 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]",
		iconColorClass: "text-amber-500 dark:text-amber-300",
		nodeBorderClass: "border-amber-400",
		nodeBgClass: "bg-amber-400/20",
		nodeDotBg: "bg-amber-400",
		nodeGlow: "0 0 16px rgba(245,158,11,0.8)"
	};
	if (t.includes("2nd place") || t.includes("1st runner up") || t.includes("runner up") || t.includes("silver medal") || t.includes("juara 2")) return {
		category: "silver",
		badgeLabel: t.includes("silver") ? "Silver Medal" : "1st Runner Up",
		badgeClass: "bg-slate-300/25 text-slate-700 dark:text-slate-200 border-slate-300/50 shadow-[0_0_12px_rgba(203,213,225,0.25)]",
		cardBorderClass: "border-slate-300/60 dark:border-slate-400/50 hover:border-slate-300/90",
		cardGlowClass: "shadow-[0_4px_25px_-4px_rgba(203,213,225,0.25)] hover:shadow-[0_8px_35px_rgba(203,213,225,0.45)] hover:scale-[1.015]",
		cardBgGradient: "from-slate-300/15 via-card/95 to-slate-900/20",
		topSheenClass: "bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 shadow-[0_0_12px_rgba(203,213,225,0.8)]",
		iconBgClass: "bg-gradient-to-br from-slate-300/30 to-slate-400/20 border-slate-300/50 shadow-[0_0_12px_rgba(203,213,225,0.3)]",
		iconColorClass: "text-slate-700 dark:text-slate-200",
		nodeBorderClass: "border-slate-300",
		nodeBgClass: "bg-slate-300/20",
		nodeDotBg: "bg-slate-300",
		nodeGlow: "0 0 16px rgba(203,213,225,0.8)"
	};
	if (t.includes("3rd place") || t.includes("2nd runner up") || t.includes("bronze medal") || t.includes("juara 3")) return {
		category: "bronze",
		badgeLabel: t.includes("bronze") ? "Bronze Medal" : "3rd Place",
		badgeClass: "bg-amber-700/20 text-amber-600 dark:text-amber-400 border-amber-700/50 shadow-[0_0_12px_rgba(217,119,6,0.2)]",
		cardBorderClass: "border-amber-700/60 dark:border-amber-600/50 hover:border-amber-600/90",
		cardGlowClass: "shadow-[0_4px_25px_-4px_rgba(217,119,6,0.2)] hover:shadow-[0_8px_35px_rgba(217,119,6,0.4)] hover:scale-[1.015]",
		cardBgGradient: "from-amber-700/15 via-card/95 to-orange-950/20",
		topSheenClass: "bg-gradient-to-r from-amber-700 via-orange-500 to-amber-800 shadow-[0_0_12px_rgba(217,119,6,0.8)]",
		iconBgClass: "bg-gradient-to-br from-amber-700/30 to-orange-600/20 border-amber-700/50 shadow-[0_0_12px_rgba(217,119,6,0.3)]",
		iconColorClass: "text-amber-600 dark:text-amber-400",
		nodeBorderClass: "border-amber-600",
		nodeBgClass: "bg-amber-600/20",
		nodeDotBg: "bg-amber-600",
		nodeGlow: "0 0 16px rgba(217,119,6,0.8)"
	};
	return {
		category: "other",
		badgeLabel: "Finalist / Award",
		badgeClass: "bg-primary/20 text-primary border-primary/40 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
		cardBorderClass: "border-primary/40 hover:border-primary/80",
		cardGlowClass: "shadow-[0_4px_25px_-4px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.4)] hover:scale-[1.015]",
		cardBgGradient: "from-primary/15 via-card/95 to-indigo-950/20",
		topSheenClass: "bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]",
		iconBgClass: "bg-gradient-to-br from-primary/30 to-accent/20 border-primary/50 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
		iconColorClass: "text-primary",
		nodeBorderClass: "border-primary",
		nodeBgClass: "bg-primary/20",
		nodeDotBg: "bg-primary",
		nodeGlow: "0 0 16px rgba(59,130,246,0.8)"
	};
}
var DEFAULT_EVENTS = [
	{
		year: "2026",
		scope: "International",
		title: "1st Place — International Business Strategy Competition (UNJ)",
		subtitle: "Universitas Negeri Jakarta"
	},
	{
		year: "2026",
		scope: "International",
		title: "1st Place — Dokter Data Infographic Competition",
		subtitle: "Statistics Department Universitas Diponegoro"
	},
	{
		year: "2025",
		scope: "National",
		title: "Gold Medal — SATRIA DATA 2025, Kemendiktisaintek RI",
		subtitle: "Kemendiktisaintek RI"
	}
];
var ScrollTimeline = ({ events = DEFAULT_EVENTS, title, subtitle, animationOrder = "sequential", cardAlignment = "alternating", lineColor = "bg-border/60", activeColor = "bg-primary", progressIndicator = true, cardVariant = "elevated", cardEffect = "glow", parallaxIntensity = 0, progressLineWidth = 3, progressLineCap = "round", dateFormat = "badge", revealAnimation = "slide", className = "", connectorStyle = "line", perspective = true, darkMode = false }) => {
	const scrollRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(-1);
	const [selectedCert, setSelectedCert] = (0, import_react.useState)(null);
	const timelineRefs = (0, import_react.useRef)([]);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start 60%", "end 75%"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 25,
		restDelta: .001
	});
	const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
	(0, import_react.useEffect)(() => {
		const unsubscribe = scrollYProgress.on("change", (v) => {
			const newIndex = Math.floor(v * events.length);
			if (newIndex !== activeIndex && newIndex >= 0 && newIndex < events.length) setActiveIndex(newIndex);
		});
		return () => unsubscribe();
	}, [
		scrollYProgress,
		events.length,
		activeIndex
	]);
	const getCardVariants = (index) => {
		const baseDelay = animationOrder === "simultaneous" ? 0 : animationOrder === "staggered" ? index % 3 * .15 : .1;
		const initialStates = {
			fade: {
				opacity: 0,
				y: 30
			},
			slide: {
				x: cardAlignment === "left" ? -50 : cardAlignment === "right" ? 50 : index % 2 === 0 ? -50 : 50,
				opacity: 0
			},
			scale: {
				scale: .85,
				opacity: 0
			},
			flip: {
				rotateY: 45,
				opacity: 0
			},
			none: { opacity: 1 }
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
					duration: .6,
					delay: baseDelay,
					ease: [
						.25,
						.1,
						.25,
						1
					]
				}
			},
			viewport: {
				once: true,
				margin: "-40px"
			}
		};
	};
	const getConnectorClasses = () => {
		const baseClasses = cn("absolute left-3.5 sm:left-4 lg:left-1/2 transform lg:-translate-x-1/2", lineColor);
		const widthStyle = `w-[${progressLineWidth}px]`;
		switch (connectorStyle) {
			case "dots": return cn(baseClasses, "w-1 rounded-full");
			case "dashed": return cn(baseClasses, widthStyle, `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`);
			default: return cn(baseClasses, widthStyle);
		}
	};
	const getCardClasses = (index) => {
		const baseClasses = "relative z-30 rounded-2xl transition-all duration-300";
		const variantClasses = {
			default: "bg-card border border-border shadow-sm",
			elevated: "bg-card/95 backdrop-blur-md border border-border/90 shadow-md hover:border-primary/50",
			outlined: "bg-card/40 backdrop-blur border-2 border-primary/20",
			filled: "bg-primary/10 border border-primary/30"
		};
		const effectClasses = {
			none: "",
			glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:scale-[1.015]",
			shadow: "hover:shadow-xl hover:-translate-y-1",
			bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]"
		};
		const alignmentClassesDesktop = cardAlignment === "alternating" ? index % 2 === 0 ? "lg:mr-[calc(50%+32px)]" : "lg:ml-[calc(50%+32px)]" : cardAlignment === "left" ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0";
		return cn(baseClasses, variantClasses[cardVariant], effectClasses[cardEffect], alignmentClassesDesktop, "ml-8 sm:ml-12 lg:ml-0 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(50%-44px)]");
	};
	const getScopeBadge = (scope) => {
		if (!scope) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider shadow-2xs shrink-0", scope.toLowerCase().includes("international") ? "bg-primary/20 text-primary border-primary/30" : "bg-accent/20 text-accent-foreground border-accent/30"),
			children: scope
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: scrollRef,
		className: cn("relative w-full select-none py-6 sm:py-10", darkMode ? "bg-background text-foreground" : "", className),
		children: [
			(title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center pb-8 px-4",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl md:text-4xl font-bold mb-2",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm md:text-base text-muted-foreground max-w-xl mx-auto",
					children: subtitle
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-5xl mx-auto px-3 sm:px-6 pt-4 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn(getConnectorClasses(), "h-[calc(100%-1rem)] absolute top-2 z-10") }),
						progressIndicator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
							className: "absolute top-2 z-10 left-3.5 sm:left-4 lg:left-1/2 -translate-x-1/2",
							style: {
								height: progressHeight,
								maxHeight: "calc(100% - 1rem)",
								width: `${progressLineWidth}px`,
								borderRadius: progressLineCap === "round" ? "9999px" : "0px",
								background: `linear-gradient(to bottom, #3b82f6, #6366f1, #8b5cf6)`,
								boxShadow: `
                    0 0 12px rgba(99,102,241,0.5),
                    0 0 20px rgba(139,92,246,0.3)
                  `
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
							className: "absolute z-20 left-3.5 sm:left-4 lg:left-1/2",
							style: {
								top: `calc(${progressHeight} + 8px)`,
								translateX: "-50%",
								translateY: "-50%"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
								className: "w-4 h-4 rounded-full",
								style: {
									background: "radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(99,102,241,0.6) 45%, rgba(59,130,246,0) 80%)",
									boxShadow: `
                      0 0 12px 3px rgba(139, 92, 246, 0.7),
                      0 0 20px 6px rgba(99, 102, 241, 0.5),
                      0 0 32px 10px rgba(59, 130, 246, 0.3)
                    `
								},
								animate: { scale: [
									1,
									1.35,
									1
								] },
								transition: {
									duration: 1.8,
									repeat: Infinity,
									ease: "easeInOut"
								}
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-20 space-y-8 lg:space-y-12",
							children: events.map((event, index) => {
								const yOffset = useTransform(smoothProgress, [0, 1], [parallaxIntensity * 60, -parallaxIntensity * 60]);
								const isActive = index <= activeIndex;
								const theme = getRankTheme(event.title);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: (el) => {
										timelineRefs.current[index] = el;
									},
									className: cn("relative flex items-center py-2", "flex-col lg:flex-row", cardAlignment === "alternating" ? index % 2 === 0 ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start" : cardAlignment === "left" ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("absolute top-6 lg:top-1/2 transform -translate-y-1/2 z-30", "left-3.5 sm:left-4 lg:left-1/2 -translate-x-1/2"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
											className: cn("w-6 h-6 rounded-full border-2 bg-background flex items-center justify-center transition-colors duration-300", isActive ? cn(theme.nodeBorderClass, theme.nodeBgClass) : "border-border bg-card"),
											animate: isActive ? {
												scale: [
													1,
													1.25,
													1
												],
												boxShadow: [
													"0 0 0px transparent",
													theme.nodeGlow,
													"0 0 0px transparent"
												]
											} : {},
											transition: {
												duration: 1.2,
												repeat: Infinity,
												repeatDelay: 3,
												ease: "easeInOut"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-2 h-2 rounded-full transition-colors duration-300", isActive ? theme.nodeDotBg : "bg-muted-foreground/40") })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
										className: cn(getCardClasses(index)),
										variants: getCardVariants(index),
										initial: "initial",
										whileInView: "whileInView",
										viewport: {
											once: true,
											margin: "-60px"
										},
										style: parallaxIntensity > 0 ? { y: yOffset } : void 0,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
											className: cn("relative overflow-hidden border-2 transition-all duration-500 rounded-2xl bg-gradient-to-br backdrop-blur-md group", theme.cardBgGradient, theme.cardBorderClass, theme.cardGlowClass),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute top-0 left-0 right-0 h-[3px] z-20 transition-all duration-300", theme.topSheenClass) }),
												theme.category === "gold" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-400/30" }),
												theme.category === "silver" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-300/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-slate-300/30" }),
												theme.category === "bronze" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-700/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-600/30" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
													className: "p-5 sm:p-6 relative z-10",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center justify-between gap-2 mb-3.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: cn("flex h-8 w-8 items-center justify-center rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-110", theme.iconBgClass),
																	children: theme.category === "gold" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" }) : theme.category === "silver" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-4 w-4 text-slate-300 dark:text-slate-200 drop-shadow-[0_0_6px_rgba(226,232,240,0.8)]" }) : theme.category === "bronze" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-amber-500 drop-shadow-[0_0_6px_rgba(217,119,6,0.8)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-primary" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-mono text-sm font-bold text-foreground",
																	children: event.year
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-center gap-1.5 shrink-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-2xs", theme.badgeClass),
																	children: [theme.category === "gold" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 animate-pulse text-amber-400" }), theme.badgeLabel]
																}), getScopeBadge(event.scope)]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-base sm:text-lg font-bold text-foreground leading-snug tracking-tight",
															children: event.title
														}),
														event.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs sm:text-sm font-medium text-muted-foreground",
															children: event.subtitle
														}),
														event.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed",
															children: event.description
														}),
														event.certificateUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: cn("mt-4 relative group/cert overflow-hidden rounded-xl border bg-background/50 transition-all duration-300 cursor-pointer shadow-xs", theme.category === "gold" ? "border-amber-400/40 hover:border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.15)]" : theme.category === "silver" ? "border-slate-300/40 hover:border-slate-300/80 shadow-[0_0_15px_rgba(203,213,225,0.15)]" : "border-border/80 hover:border-primary/60"),
															onClick: () => setSelectedCert(event),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-1.5 bg-gradient-to-b from-surface/40 to-surface/80",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: event.certificateUrl,
																	alt: event.title,
																	className: "w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover/cert:scale-[1.02]",
																	loading: "lazy"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100 backdrop-blur-[2px] rounded-xl",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/80 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-3.5 w-3.5 text-primary" }), "Click to Inspect & Zoom"]
																	})
																})]
															})
														})
													]
												})
											]
										})
									})]
								}, event.id || index);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificateModal, {
				isOpen: Boolean(selectedCert),
				onClose: () => setSelectedCert(null),
				cert: selectedCert ? {
					title: selectedCert.title,
					subtitle: selectedCert.subtitle,
					scope: selectedCert.scope,
					year: selectedCert.year,
					certificateUrl: selectedCert.certificateUrl
				} : null
			})
		]
	});
};
var CV_URL = "https://drive.google.com/file/d/1lxk3Cmf6FSVnzJxalyI5UBrMTdNbM2Lb/view?usp=sharing";
var SOCIALS = {
	instagram: "https://www.instagram.com/dwhyu.s_/",
	linkedin: "https://www.linkedin.com/in/dimaswsaputra/",
	email: "dimswahyus@gmail.com",
	github: "https://github.com/DimsWhyu",
	phone: "+6281311211367"
};
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var ICONS = {
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
	"Statistical Analysis": "r/276DC3"
};
var CUSTOM_ICONS = {
	Tableau: "https://freepnglogo.com/images/all_img/tableau-software-logo-b762.png",
	"Power BI": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png",
	"Excel / VBA": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png",
	Matplotlib: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1280px-Matplotlib_icon.svg.png"
};
function iconUrl(name) {
	if (CUSTOM_ICONS[name]) return CUSTOM_ICONS[name];
	const slug = ICONS[name];
	return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}
function Logo({ name, size = 14 }) {
	const url = iconUrl(name);
	if (!url) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: url,
		alt: "",
		width: size,
		height: size,
		loading: "lazy",
		className: "inline-block shrink-0",
		style: {
			height: size,
			width: size
		}
	});
}
var EXPERIENCE = [
	{
		id: 1,
		title: "Data Analyst Intern",
		brand: "Otoritas Jasa Keuangan (OJK) — East Java",
		period: "Feb 2026 – Mar 2026",
		logoUrl: ojk_logo_default,
		points: ["Built SPLOG, a web-based logistics system managing 315+ items and centralizing stock monitoring.", "Automated reporting pipelines that cut report preparation time by ~60%."],
		tags: [
			"Data Analytics",
			"Logistics System",
			"Automation",
			"Financial Services"
		],
		gradient: "bg-gradient-to-r from-blue-600/30 via-indigo-600/15 to-card"
	},
	{
		id: 2,
		title: "Data Scientist Intern",
		brand: "id/x partners × Rakamin Academy",
		period: "Aug 2025 – Sep 2025",
		logoUrl: idx_logo_default,
		points: ["Delivered an end-to-end ML capstone with measurable accuracy benchmarks using Python & Scikit-learn.", "Collaborated with Business Analysts, Data Engineers, and PMs to ship data-driven IT solutions."],
		tags: [
			"Machine Learning",
			"Python",
			"Scikit-Learn",
			"Cross-Functional"
		],
		gradient: "bg-gradient-to-r from-purple-600/30 via-pink-600/15 to-card"
	},
	{
		id: 3,
		title: "CEO Analyst",
		brand: "Produktifkuy",
		period: "Jan 2025 – Jul 2025",
		logoUrl: pkuy_logo_default,
		points: ["Selected as 1 of 53 from 1,500+ applicants; led analysis across 6 divisions resulting in 6 org-wide improvements.", "Authored 20+ strategic proposals and data-driven decks supporting executive decisions."],
		tags: [
			"Executive Strategy",
			"Org Analytics",
			"Decision Support",
			"Leadership"
		],
		gradient: "bg-gradient-to-r from-emerald-600/30 via-teal-600/15 to-card"
	},
	{
		id: 4,
		title: "Vice Project Officer",
		brand: "FSAD FAIR 2025 — Organizational",
		period: "May 2025 – Jul 2025",
		logoUrl: fsad_logo_default,
		points: ["Coordinated 70+ committee members; engaged 160+ high school students nationwide."],
		tags: [
			"Project Management",
			"Team Leadership",
			"Event Coordination",
			"FSAD ITS"
		],
		gradient: "bg-gradient-to-r from-amber-600/30 via-orange-600/15 to-card"
	}
];
var PROJECTS = [
	{
		name: "ParkVision AI",
		tag: "Computer Vision",
		image: parkvision_default,
		desc: "Real-time parking slot detection web app using YOLOv8 with full-stack inference pipeline & interactive dashboard, deployed on Vercel.",
		tech: [
			"YOLOv8",
			"Python",
			"Vercel",
			"Streamlit"
		],
		url: "http://parkvisionai.vercel.app/",
		detailsTitle: "ParkVision AI",
		details: [
			"Real-time parking slot detection web application powered by YOLOv8 deep learning.",
			"Full-stack computer vision inference pipeline with live occupancy analytics & telemetry.",
			"Deployed on Vercel with high-performance responsive stream processing."
		]
	},
	{
		name: "IndoStockAI",
		tag: "ML Forecasting",
		image: indostock_default,
		desc: "Realtime Stock Analytics & Forecasting System combining live market data with ML forecasting for the Indonesian capital market.",
		tech: [
			"Python",
			"Big Data",
			"Time Series",
			"Streamlit"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_bigdataanalytics-machinelearning-stockmarketanalytics-activity-7418655014862196736-iAVA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
		detailsTitle: "IndoStockAI: Realtime Stock Analytics",
		details: [
			"AI stock analytics platform for the Indonesian capital market (IDX).",
			"Combines Big Data analytics with Time Series ML models for market forecasting.",
			"Surfaces live price action, technical indicators, and predictive buy/sell signals."
		]
	},
	{
		name: "Order Management Dashboard",
		tag: "Business Intelligence",
		image: order_dashboard_default,
		desc: "Looker Studio dashboard analyzing 9,994 orders across 49 states & 3 customer segments (PCA HIMASTA-ITS 2026).",
		tech: [
			"Looker Studio",
			"SQL",
			"EDA"
		],
		url: "https://lnkd.in/gjYSBt_M",
		detailsTitle: "Order Management Dashboard (PCA)",
		details: [
			"Analyzed 9,994 orders from 793 customers across 49 states & 3 customer segments.",
			"Consumer segment contributed 51.9% of orders; Technology accounted for 60.3% of orders.",
			"NYC recorded highest order volume (915 transactions); total orders grew from 7.6K to 12.5K.",
			"Special thanks to Fa Rida & Fitria Nur Aida for sharing valuable insights during PCA HIMASTA-ITS 2026!"
		]
	},
	{
		name: "Clustering-Based Customer Insights",
		tag: "Unsupervised ML",
		image: customer_cluster_default,
		desc: "E-Commerce Customer Behavior & Sales Data Analysis using K-Means Clustering at Institut Teknologi Sepuluh Nopember (ITS).",
		tech: [
			"Scikit-learn",
			"Python",
			"Tableau"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_unsupervisedmachinelearning-kmeansclustering-activity-7412402721502339073-TRvi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
		detailsTitle: "Clustering-Based Customer Insights (ITS)",
		details: [
			"Determined optimal K=4 clusters using Elbow Method & Silhouette Score evaluation.",
			"Clustered on Monetary Value, Avg Session Duration, Customer Ratings & Return Rate.",
			"Uncovered personas: High-Potential Newcomers, One-Time Big Spenders, At-Risk Lapsed & Loyal Returners.",
			"Enables targeted business strategies like loyalty programs & recovery campaigns."
		]
	},
	{
		name: "TSP Optimizer Application",
		tag: "Metaheuristic Optimization",
		image: tsp_optimizer_default,
		desc: "Interactive simulation & optimization application solving Traveling Salesman Problem (TSP) for PCB drilling at ITS.",
		tech: ["Python", "Machine Learning"],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_metaheuristicoptimization-travelingsalesmanproblem-activity-7411438890093338624-y9tr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
		detailsTitle: "TSP Optimizer Application (ITS)",
		details: [
			"Modeled PCB drilling process as TSP to minimize total travel distance & operational cost.",
			"Implemented Nearest Neighbor, Nearest/Cheapest/Farthest/Arbitrary Insertion + 2-Opt local search.",
			"Farthest Insertion produced shortest route; 2-Opt achieved up to 15% distance reduction.",
			"Provides interactive simulation & route visualization for manufacturing decision support."
		]
	},
	{
		name: "Design Analysis and Simulation",
		tag: "Simulation & Optimization",
		image: simulation_das_default,
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
		]
	},
	{
		name: "Data Warehouse Course Project",
		tag: "Data Engineering & BI",
		image: data_warehouse_default,
		desc: "End-to-end Data Warehouse & Power BI monitoring dashboard for ITS Course Registration Form (FRS) academic planning.",
		tech: [
			"MySQL",
			"Pentaho Kettle",
			"Power BI"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_datawarehouse-businessintelligence-powerbi-activity-7347203885381361664-3MIg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUi-q0BYLb19X6Wpd1NGkUSgUjMCB4cboY",
		detailsTitle: "Data Warehouse Course Project (ITS)",
		details: [
			"Designed end-to-end data process for ITS Course Registration Form (FRS) system.",
			"Built MySQL OLTP/OLAP databases & executed ETL pipelines using Pentaho Kettle.",
			"Developed Power BI dashboards tracking SKS credit distribution, GPA trends & class capacities.",
			"Created Figma UI mockups before Power BI deployment to guide academic planning."
		]
	}
];
var SECTION_ACCENTS = {
	top: "var(--primary)",
	about: "var(--secondary-3)",
	experience: "var(--secondary-2)",
	projects: "var(--accent)",
	achievements: "var(--secondary-4)",
	contact: "var(--secondary-1)"
};
var ACHIEVEMENTS = [
	{
		year: "2026",
		scope: "International",
		title: "1st Place — International Business Strategy Competition (UNJ)",
		subtitle: "Universitas Negeri Jakarta",
		certificateUrl: _01_ibsc_unj_2026_default
	},
	{
		year: "2026",
		scope: "International",
		title: "1st Place — Dokter Data Infographic Competition",
		subtitle: "Statistics Department Universitas Diponegoro",
		certificateUrl: _02_dokter_data_2026_default
	},
	{
		year: "2025",
		scope: "National",
		title: "Gold Medal — SATRIA DATA 2025",
		subtitle: "Kemendiktisaintek RI",
		certificateUrl: _03_satria_data_2025_default
	},
	{
		year: "2025",
		scope: "National",
		title: "1st Place — Brawijaya National Youth Competition (UB)",
		subtitle: "Universitas Brawijaya",
		certificateUrl: _04_bnyc_ub_2025_default
	},
	{
		year: "2025",
		scope: "National",
		title: "1st Place — Data Competition, ISFEST UMN",
		subtitle: "Universitas Multimedia Nusantara",
		certificateUrl: _05_isfest_umn_2025_default
	},
	{
		year: "2024",
		scope: "International",
		title: "1st Runner Up — International Youthpreneur Competition",
		subtitle: "SBM ITB",
		certificateUrl: _06_iyt_itb_2024_default
	},
	{
		year: "2024",
		scope: "National",
		title: "1st Place — Infographic Competition 4C FILKOM UB",
		subtitle: "Universitas Brawijaya",
		certificateUrl: _07_4c_filkom_ub_2024_default
	},
	{
		year: "2023",
		scope: "International",
		title: "Silver Medal — Greater Bay Area International Math Olympiad",
		subtitle: "GBA Olympiad Committee",
		certificateUrl: _08_gba_olympiad_2023_default
	}
];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function useActiveSection(ids) {
	const [active, setActive] = (0, import_react.useState)(ids[0] ?? "top");
	(0, import_react.useEffect)(() => {
		const targets = ids.map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (!targets.length) return;
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) setActive(visible[0].target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.25,
				.5,
				.75,
				1
			]
		});
		targets.forEach((t) => io.observe(t));
		return () => io.disconnect();
	}, [ids]);
	return active;
}
function CustomCursor() {
	(0, import_react.useEffect)(() => {
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
		let currentTarget = null;
		let raf = 0;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			dot.style.left = mx + "px";
			dot.style.top = my + "px";
		};
		const onOver = (e) => {
			const clickable = e.target?.closest("a, button, [role=\"button\"], input, textarea, select, label, .cursor-pointer, .cursor-grab, .cursor-grabbing");
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
				rx += (targetX - rx) * .2;
				ry += (targetY - ry) * .2;
				ring.style.width = `${targetW}px`;
				ring.style.height = `${targetH}px`;
			} else {
				if (currentTarget) {
					currentTarget = null;
					ring.classList.remove("hover");
					dot.classList.remove("hover");
				}
				rx += (mx - rx) * .2;
				ry += (my - ry) * .2;
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
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "back-to-top-enter fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-white shadow-lg shadow-[#0066cc]/30 transition hover:scale-110 active:scale-95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 19V5M5 12l7-7 7 7" })
		})
	});
}
function SocialDock() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.div, {
		initial: {
			opacity: 0,
			x: 50,
			y: "-50%",
			scale: .8
		},
		animate: {
			opacity: 1,
			x: 0,
			y: "-50%",
			scale: 1
		},
		exit: {
			opacity: 0,
			x: 50,
			y: "-50%",
			scale: .8
		},
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 25
		},
		className: "fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dock, {
			orientation: "vertical",
			className: "bg-surface/80 border-border shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockIcon, {
					className: "hover:bg-primary/20 hover:text-primary transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${SOCIALS.email}`,
						"aria-label": "Email",
						className: "flex items-center justify-center w-full h-full text-foreground hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockIcon, {
					className: "hover:bg-primary/20 hover:text-primary transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.linkedin,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "LinkedIn",
						className: "flex items-center justify-center w-full h-full text-foreground hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-5 h-5" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockIcon, {
					className: "hover:bg-primary/20 hover:text-primary transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.instagram,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						className: "flex items-center justify-center w-full h-full text-foreground hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-5 h-5" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockIcon, {
					className: "hover:bg-primary/20 hover:text-primary transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.github,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "GitHub",
						className: "flex items-center justify-center w-full h-full text-foreground hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-5 h-5" })
					})
				})
			]
		})
	}) });
}
function TextRevealSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background relative border-y border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextReveal, {
			className: "max-w-4xl mx-auto px-6",
			children: "Building high-performance data pipelines, training machine learning models, and delivering interactive dashboards that drive growth."
		})
	});
}
function useTypewriter(words, { typeMs = 90, holdMs = 1400, eraseMs = 45 } = {}) {
	const [text, setText] = (0, import_react.useState)("");
	const [i, setI] = (0, import_react.useState)(0);
	const [phase, setPhase] = (0, import_react.useState)("typing");
	(0, import_react.useEffect)(() => {
		const word = words[i % words.length];
		let t;
		if (phase === "typing") if (text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
		else t = setTimeout(() => setPhase("erasing"), holdMs);
		else if (phase === "erasing") if (text.length > 0) t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
		else {
			setI((n) => n + 1);
			setPhase("typing");
			return;
		}
		return () => clearTimeout(t);
	}, [
		text,
		phase,
		i,
		words,
		typeMs,
		holdMs,
		eraseMs
	]);
	return text;
}
function ThemeToggle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedThemeToggler, { className: "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:scale-105 hover:border-primary [&_svg]:w-4 [&_svg]:h-4" });
}
function SocialIcons({ size = 16, className = "" }) {
	const cls = "grid place-items-center rounded-full border border-border bg-surface text-foreground transition hover:scale-110 hover:border-primary hover:text-primary";
	const style = {
		width: size + 18,
		height: size + 18
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: SOCIALS.linkedin,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "LinkedIn",
				className: cls,
				style,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: size,
					height: size,
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4z" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: SOCIALS.instagram,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Instagram",
				className: cls,
				style,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: size,
					height: size,
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3",
							y: "3",
							width: "18",
							height: "18",
							rx: "5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "12",
							r: "4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "17.5",
							cy: "6.5",
							r: "1",
							fill: "currentColor",
							stroke: "none"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${SOCIALS.email}`,
				"aria-label": "Email",
				className: cls,
				style,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: size,
					height: size,
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "5",
						width: "18",
						height: "14",
						rx: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m3 7 9 6 9-6" })]
				})
			})
		]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const active = useActiveSection((0, import_react.useMemo)(() => ["top", ...NAV.map((n) => n.id)], []));
	const accent = SECTION_ACCENTS[active] ?? "var(--primary)";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const navMenuItems = [{
		id: "top",
		label: "Home"
	}, ...NAV];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 z-50 mx-auto transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-[width,max-width,top,padding,border-radius] ${scrolled ? "top-0 w-full max-w-[100vw] rounded-none border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-xs py-3.5 px-6 sm:px-10 md:px-14" : "top-4 w-[calc(100%-2rem)] max-w-[64rem] rounded-full border border-border/80 bg-card/95 backdrop-blur-xl shadow-lg py-2.5 px-5 sm:px-6 md:px-8"}`,
		style: { ["--accent-c"]: accent },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3 transition-transform hover:scale-102",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_nav_default,
							alt: "Dimas Wahyu Logo",
							className: "h-8 sm:h-9 md:h-10 w-auto object-contain dark:hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_nav_white_default,
							alt: "Dimas Wahyu Logo",
							className: "h-8 sm:h-9 md:h-10 w-auto object-contain hidden dark:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold text-base md:text-lg tracking-tight",
							children: "Dimas Wahyu"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:gap-8 md:flex",
					children: NAV.map((n) => {
						const isActive = active === n.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${n.id}`,
							className: `text-sm font-medium transition-colors ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
							children: n.label
						}, n.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CV_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0066cc] hover:bg-[#0071e3] px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-2xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "13",
								height: "13",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
							}), "Download CV"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface/90 text-foreground shadow-xs hover:border-primary/80 active:scale-95 transition-all cursor-pointer",
							"aria-label": "Toggle Navigation Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18M6 6l12 12" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" })
							})
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
		initial: {
			opacity: 0,
			y: "-100%"
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: "-100%"
		},
		transition: {
			duration: .38,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed inset-0 z-[100] flex flex-col justify-between bg-background/98 backdrop-blur-2xl p-6 sm:p-8 md:hidden overflow-y-auto select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex items-center justify-between border-b border-border/70 pb-4 font-mono text-xs text-muted-foreground uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/logo-nav-B4PF436_.png",
							alt: "Logo",
							className: "h-7 w-auto object-contain dark:hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/logo-nav-white-BOVcUqNG.png",
							alt: "Logo",
							className: "h-7 w-auto object-contain hidden dark:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-foreground",
							children: "DIMAS WAHYU / 2026"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "flex h-9 w-9 items-center justify-center rounded-full border border-border/90 bg-card text-foreground shadow-xs active:scale-95 transition-all",
					"aria-label": "Close menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary font-bold text-base",
						children: "✕"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "my-auto py-8 flex flex-col gap-5 sm:gap-6",
				children: navMenuItems.map((n, idx) => {
					const isActive = active === n.id;
					const numStr = `0${idx + 1}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${n.id}`,
						onClick: () => setOpen(false),
						className: "group flex items-baseline gap-4 text-left transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors",
							children: numStr
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-display text-4xl sm:text-5xl font-extrabold tracking-tight transition-all duration-200 group-hover:translate-x-2 ${isActive ? "gradient-text" : "text-foreground group-hover:text-primary"}`,
							children: n.label
						})]
					}, n.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full pt-4 border-t border-border/70 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CV_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "w-full py-3 rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-98 transition-all",
					children: "Download CV ✦"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.github,
						target: "_blank",
						rel: "noreferrer",
						className: "flex-1 py-2.5 rounded-xl border-1.5 border-border bg-card text-center font-semibold text-foreground hover:border-primary transition-colors",
						children: "GitHub ↗"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.linkedin,
						target: "_blank",
						rel: "noreferrer",
						className: "flex-1 py-2.5 rounded-xl border-1.5 border-border bg-card text-center font-semibold text-foreground hover:border-primary transition-colors",
						children: "LinkedIn ↗"
					})]
				})]
			})
		]
	}) })] });
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const typed = useTypewriter((0, import_react.useMemo)(() => [
		"decisions",
		"dashboards",
		"predictions",
		"products",
		"growth",
		"stories"
	], []));
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left - r.width / 2) / r.width;
			const y = (e.clientY - r.top - r.height / 2) / r.height;
			el.style.setProperty("--mx", String(x));
			el.style.setProperty("--my", String(y));
		};
		el.addEventListener("mousemove", onMove);
		return () => el.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-36 md:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGridPattern, {
				className: "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
				width: 40,
				height: 40,
				squares: [24, 24],
				squaresClassName: "hover:fill-primary/10 stroke-border/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/4 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-1/4 top-1/2 -z-10 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-secondary-1/25 blur-3xl animate-blob",
				style: { animationDelay: "-5s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 bottom-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-blob",
				style: { animationDelay: "-9s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex flex-col md:grid md:grid-cols-[1.2fr_1fr] max-w-6xl gap-8 sm:gap-12 px-4 sm:px-6 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal relative mx-auto w-full max-w-[260px] xs:max-w-[280px] sm:max-w-sm order-1 md:order-2 mt-2 sm:mt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square rounded-[2rem] border-2 border-border/90 bg-gradient-to-br from-primary/25 via-secondary-1/15 to-accent/25 p-3 sm:p-4 glow-ring shadow-lg",
						style: { transform: "perspective(900px) rotateX(calc(var(--my,0)*-6deg)) rotateY(calc(var(--mx,0)*8deg))" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-2 sm:-right-4 -top-3 sm:-top-4 rounded-full border border-border/90 glass px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs font-semibold animate-float-slow shadow-xs",
								children: "data-driven ✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dimas_formal_default,
								alt: "Dimas Wahyu Saputra",
								className: "h-full w-full rounded-[1.5rem] object-cover object-top",
								loading: "eager"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 rounded-2xl border border-border/90 glass p-2.5 sm:p-3 font-mono text-[10px] sm:text-xs shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground font-semibold",
									children: "status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-foreground font-medium",
									children: "Final-year @ ITS · Open 2026"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -left-3 sm:-left-6 top-1/3 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-2xl border-1.5 border-border bg-card shadow-md animate-float-slow",
								style: { animationDelay: "-2s" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://cdn.simpleicons.org/python/3776AB",
									alt: "",
									width: 22,
									height: 22
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-3 sm:-right-6 top-2/3 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-2xl border-1.5 border-border bg-card shadow-md animate-float-slow",
								style: { animationDelay: "-4s" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/3840px-New_Power_BI_Logo.svg.png",
									alt: "Power BI",
									width: 22,
									height: 22,
									className: "h-5 w-5 sm:h-6 sm:w-6 object-contain"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 sm:mt-4 font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] tracking-tight text-center md:text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Turning complex"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "data into"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rainbow-text",
										children: typed
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "caret",
										"aria-hidden": true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-foreground/90",
									children: "that ship."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 sm:mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-center md:text-left",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "Dimas Wahyu Saputra"
								}),
								" — a final-year Data Science student at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "ITS"
								}),
								", building dashboards, ML models, and analytics products that move metrics in the real world."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 active:scale-95",
									children: ["View my work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										className: "transition group-hover:translate-x-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CV_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-[#0071e3] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-md transition hover:scale-[1.03] active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "14",
										height: "14",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
									}), "Download CV"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-surface active:scale-95",
									children: "Get in touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 sm:mt-12 mx-auto md:mx-0 grid max-w-md grid-cols-3 gap-2 sm:gap-6 text-center md:text-left",
							children: [
								{
									k: "20+",
									v: "Awards won"
								},
								{
									k: "3",
									v: "Internships"
								},
								{
									k: "9k+",
									v: "Rows analyzed"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl sm:text-3xl font-extrabold gradient-text",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-medium",
								children: s.v
							})] }, s.v))
						})
					]
				})]
			})
		]
	});
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
		"Git / GitHub"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-surface/50 py-5 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee gap-12 font-display text-xl text-muted-foreground md:text-2xl",
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						name: t,
						size: 22
					}),
					t,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
				]
			}, i))
		})
	});
}
function Section({ id, eyebrow, title, children, reveal = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16 md:py-20 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `reveal ${reveal} mb-6 sm:mb-8 md:mb-10 max-w-2xl`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold",
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2.5 sm:mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight",
				children: title
			})]
		}), children]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "01 — About",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Final-year data scientist with a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "builder's instinct"
			}),
			"."
		] }),
		reveal: "reveal-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:gap-10 lg:grid-cols-[1.35fr_1fr] xl:grid-cols-[1.4fr_1fr] items-start w-full max-w-full min-w-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground w-full max-w-full min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"I study",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: "Data Science at Institut Teknologi Sepuluh Nopember (ITS)"
						}),
						" ",
						"and was named",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: "3rd Most Outstanding Student of ITS 2026"
						}),
						". I'm an awardee of the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: "Beasiswa Indonesia Maju (BIM) DN"
						}),
						" ",
						"scholarship from Kemdiktisaintek RI."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My work spans the full analytics stack — from collecting and modeling messy data, to building interactive dashboards in Power BI and Looker Studio, to deploying ML pipelines that real users depend on." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Outside coursework, I lead student initiatives, compete in international analytics competitions, and consistently turn raw datasets into stories teams can actually act on." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubContributions, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal w-full max-w-full min-w-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsBeamShowcase, {})
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "02 — Experience",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Where I've made an ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rainbow-text",
				children: "impact"
			}),
			"."
		] }),
		reveal: "reveal-left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeDCarousel, {
			items: EXPERIENCE,
			autoRotate: true,
			rotateInterval: 4500,
			cardHeight: 480
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "03 — Projects",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Selected work across ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "ML, BI & optimization"
			}),
			"."
		] }),
		reveal: "reveal-zoom",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlippingCard, {
				height: 460,
				className: "reveal reveal-zoom group/card hover:scale-[1.01] transition-all duration-300",
				frontContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-card via-surface/90 to-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-44 w-full overflow-hidden rounded-2xl border border-border/70 shadow-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "h-full w-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-xs",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 font-mono text-xs font-semibold text-white/90 backdrop-blur-md",
								children: ["0", i + 1]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-1 flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-foreground line-clamp-1",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3",
								children: p.desc
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-md border border-border/80 bg-surface-2/80 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground shadow-2xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
										name: t,
										size: 11
									}), t]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between border-t border-border/50 pt-2.5 text-[11px] font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 opacity-90 group-hover/card:opacity-100",
									children: ["Hover / Tap to flip", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: "12",
										height: "12",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										className: "animate-pulse",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 3v5h-5" })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-muted-foreground",
									children: "Flip →"
								})]
							})
						]
					})]
				}),
				backContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-card via-surface-2/95 to-card p-5 text-card-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/60 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
									children: p.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs font-bold text-muted-foreground",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2.5 font-display text-base font-semibold text-foreground line-clamp-1",
								children: p.detailsTitle || p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2.5 space-y-1.5 text-[11.5px] leading-relaxed text-muted-foreground overflow-y-auto max-h-[200px] pr-1",
								children: p.details.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, idx))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 border-t border-border/60 pt-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2.5 flex flex-wrap gap-1",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded bg-surface-2/90 px-1.5 py-0.5 font-mono text-[9.5px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
										name: t,
										size: 10
									}), t]
								}, t))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.url,
								target: "_blank",
								rel: "noreferrer",
								onClick: (e) => e.stopPropagation(),
								className: "group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-95",
								children: ["Explore More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "13",
									height: "13",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									className: "transition-transform group-hover/btn:translate-x-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" })
								})]
							})]
						})
					]
				})
			}, i))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "achievements",
		className: "relative overflow-hidden py-14 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveGridPattern, {
				className: "[mask-image:radial-gradient(ellipse_70%_65%_at_center,black_15%,transparent_85%)]",
				width: 40,
				height: 40,
				squares: [50, 100],
				squaresClassName: "hover:fill-primary/10 stroke-border/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/4 top-10 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-1/4 top-1/3 -z-10 h-[380px] w-[380px] translate-x-1/2 rounded-full bg-secondary-1/25 blur-3xl animate-blob",
				style: { animationDelay: "-4s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/3 top-2/3 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-blob",
				style: { animationDelay: "-8s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-1/3 bottom-10 -z-10 h-[340px] w-[340px] translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-blob",
				style: { animationDelay: "-12s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-6 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal reveal-rotate mb-8 md:mb-10 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs uppercase tracking-[0.2em] text-primary",
						children: "04 — Recognition"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold md:text-5xl",
						children: "Awards & achievements."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTimeline, {
					events: ACHIEVEMENTS,
					progressIndicator: true,
					cardAlignment: "alternating",
					cardVariant: "elevated",
					revealAnimation: "slide"
				})]
			})
		]
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const handleCopy = async (text, label) => {
		try {
			if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
		} catch (e) {
			console.error(e);
		}
		setCopied(label);
		setTimeout(() => setCopied(null), 2500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		eyebrow: "05 — Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Let's build something ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "measurable"
			}),
			"."
		] }),
		reveal: "reveal-flip",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: copied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
			initial: {
				opacity: 0,
				y: -20,
				scale: .9
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -20,
				scale: .9
			},
			className: "fixed bottom-6 right-6 z-[100000] flex items-center gap-2.5 rounded-2xl border border-primary/40 bg-card/95 px-4 py-3 font-mono text-xs font-semibold text-foreground shadow-2xl backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Copied ",
				copied,
				" to clipboard"
			] })]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal reveal-flip grid gap-8 rounded-3xl border-2 border-border/90 bg-card/90 p-6 sm:p-8 md:p-10 lg:grid-cols-12 shadow-2xl backdrop-blur-xl relative overflow-hidden items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 flex flex-col justify-between space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
						children: "Dimas Wahyu Saputra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-5 flex items-center justify-center lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
							className: "relative flex items-center justify-center",
							initial: {
								scale: .9,
								opacity: 0
							},
							whileInView: {
								scale: 1,
								opacity: 1
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								ease: "easeOut"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-primary/25 via-accent/25 to-secondary-1/25 blur-3xl scale-125 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.img, {
								src: memoji_default,
								alt: "Dimas Waving Memoji",
								className: "w-52 xs:w-64 h-auto object-contain relative z-10 drop-shadow-2xl pointer-events-none",
								animate: { y: [
									0,
									-8,
									0
								] },
								transition: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								}
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: [
							"Data Science Student at ITS • Analytics, BI Dashboards & Predictive Modeling. Based in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Surabaya, East Java"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-2.5 font-mono text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-background/60 p-3 transition hover:border-primary/50 hover:bg-background/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground font-semibold uppercase",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${SOCIALS.email}`,
											className: "text-foreground hover:text-primary transition font-medium truncate block",
											children: SOCIALS.email
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleCopy(SOCIALS.email, "Email"),
									className: "rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition active:scale-95 shrink-0 cursor-pointer",
									title: "Copy email",
									children: "Copy"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-background/60 p-3 transition hover:border-primary/50 hover:bg-background/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#0a66c2]/15 text-[#0a66c2] dark:text-[#388bfd] border border-[#0a66c2]/30 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground font-semibold uppercase",
											children: "LinkedIn"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SOCIALS.linkedin,
											target: "_blank",
											rel: "noreferrer",
											className: "text-foreground hover:text-primary transition font-medium truncate block",
											children: "/in/dimaswsaputra"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SOCIALS.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition active:scale-95 shrink-0",
									children: ["Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-background/60 p-3 transition hover:border-primary/50 hover:bg-background/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground font-semibold uppercase",
											children: "Phone / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://wa.me/6281311211367",
											target: "_blank",
											rel: "noreferrer",
											className: "text-foreground hover:text-primary transition font-medium truncate block",
											children: "+62 813 1121 1367"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/6281311211367?text=Hi%20Dimas,%20I%20saw%20your%20portfolio!",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition active:scale-95 shrink-0",
									children: "Chat WA"
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CV_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:scale-[1.02] active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Resume (CV)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SOCIALS.github,
							target: "_blank",
							rel: "noreferrer",
							className: "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary active:scale-95",
							title: "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SOCIALS.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-primary hover:text-primary active:scale-95",
							title: "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:flex lg:col-span-5 items-center justify-center relative p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion$1.div, {
					className: "relative flex items-center justify-center",
					initial: {
						scale: .9,
						opacity: 0
					},
					whileInView: {
						scale: 1,
						opacity: 1
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-primary/15 via-accent/15 to-secondary-1/15 blur-3xl scale-110 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion$1.img, {
						src: memoji_default,
						alt: "Dimas Waving Memoji",
						className: "w-full max-w-[280px] md:max-w-[320px] h-auto object-contain relative z-10 drop-shadow-2xl pointer-events-none",
						animate: { y: [
							0,
							-8,
							0
						] },
						transition: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						}
					})]
				})
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Dimas Wahyu Saputra"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono",
					children: "Crafted with care · Surabaya, ID"
				})
			]
		})
	});
}
function Portfolio() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextRevealSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialDock, {})
		]
	});
}
//#endregion
export { Portfolio as component };
