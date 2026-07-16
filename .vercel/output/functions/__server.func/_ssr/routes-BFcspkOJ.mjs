import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Instagram, i as Linkedin, n as Moon, o as Github, r as Mail, t as Sun } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as useScroll, i as useMotionValue, n as useTransform, r as useMotionTemplate, s as AnimatePresence, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFcspkOJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var Foto_Formal_Dimas_Putih_default = "/assets/Foto%20Formal_Dimas_Putih-D5kYmjN1.png";
var ojk_logo_default = "/assets/ojk_logo-Cs-uygCR.jpg";
var id_x_logo_default = "/assets/id_x_logo-BVitZ7Pg.png";
var pkuy_logo_default = "/assets/pkuy_logo-Dw50WDZ8.jpg";
var fsad_logo_default = "/assets/fsad_logo-DYZrpq_Y.png";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			x: 0,
			y: 0,
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
function AnimatedListItem({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			height: 0,
			opacity: 0,
			scale: .95
		},
		animate: {
			height: "auto",
			opacity: 1,
			scale: 1
		},
		exit: {
			height: 0,
			opacity: 0,
			scale: .95
		},
		transition: {
			type: "spring",
			stiffness: 220,
			damping: 26
		},
		layout: true,
		className: "mx-auto w-full overflow-hidden",
		children
	});
}
var AnimatedList = import_react.memo(({ children, className, delay = 2e3, ...props }) => {
	const childrenArray = (0, import_react.useMemo)(() => import_react.Children.toArray(children), [children]);
	const [items, setItems] = (0, import_react.useState)([]);
	const currentIndexRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (childrenArray.length === 0) return;
		setItems([{
			id: `init-0`,
			element: childrenArray[0]
		}]);
		currentIndexRef.current = 1;
		const interval = setInterval(() => {
			setItems((prev) => {
				const nextIndex = currentIndexRef.current % childrenArray.length;
				currentIndexRef.current++;
				const updated = [{
					id: `${currentIndexRef.current}-${nextIndex}`,
					element: childrenArray[nextIndex]
				}, ...prev];
				if (updated.length > childrenArray.length) return updated.slice(0, childrenArray.length);
				return updated;
			});
		}, delay);
		return () => clearInterval(interval);
	}, [childrenArray, delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(`flex flex-col items-center gap-4`, className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedListItem, { children: item.element }, item.id)) })
	});
});
AnimatedList.displayName = "AnimatedList";
var TextReveal = ({ children, className }) => {
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({ target: sectionRef });
	if (typeof children !== "string") throw new Error("TextReveal: children must be a string");
	const words = children.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: sectionRef,
		className: cn("relative z-0 h-[200vh]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex flex-wrap p-5 text-3xl font-extrabold text-black/20 md:p-8 md:text-5xl lg:p-10 lg:text-6xl xl:text-7xl tracking-tight dark:text-white/20",
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
		className: "xl:lg-3 relative mx-1 lg:mx-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute opacity-30",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			style: { opacity },
			className: "text-black dark:text-white",
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
		width: width * horizontal,
		height: height * vertical,
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
function Tilt({ children, className, style, rotationFactor = 15, isReverse = false, springOptions }) {
	const ref = import_react.useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const xSpring = useSpring(x, springOptions);
	const transform = useMotionTemplate`perspective(1000px) rotateX(${useTransform(useSpring(y, springOptions), [-.5, .5], isReverse ? [rotationFactor, -rotationFactor] : [-rotationFactor, rotationFactor])}deg) rotateY(${useTransform(xSpring, [-.5, .5], isReverse ? [-rotationFactor, rotationFactor] : [rotationFactor, -rotationFactor])}deg)`;
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width - .5);
		y.set((e.clientY - rect.top) / rect.height - .5);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		className,
		style: {
			transformStyle: "preserve-3d",
			...style,
			transform
		},
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		children
	});
}
function ClippedCircle({ className, circleClassName = "bg-white/20", circleSize = 400 }) {
	const containerRef = import_react.useRef(null);
	const [isHovered, setIsHovered] = import_react.useState(false);
	const [position, setPosition] = import_react.useState({
		x: "50%",
		y: "50%"
	});
	import_react.useEffect(() => {
		const container = containerRef.current;
		if (!container || !container.parentElement) return;
		const parent = container.parentElement;
		const handleMouseEnter = (e) => {
			const rect = parent.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width * 100;
			const y = (e.clientY - rect.top) / rect.height * 100;
			setPosition({
				x: `${x}%`,
				y: `${y}%`
			});
			setIsHovered(true);
		};
		const handleMouseMove = (e) => {
			const rect = parent.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width * 100;
			const y = (e.clientY - rect.top) / rect.height * 100;
			setPosition({
				x: `${x}%`,
				y: `${y}%`
			});
		};
		const handleMouseLeave = () => {
			setIsHovered(false);
		};
		parent.addEventListener("mouseenter", handleMouseEnter);
		parent.addEventListener("mousemove", handleMouseMove);
		parent.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			parent.removeEventListener("mouseenter", handleMouseEnter);
			parent.removeEventListener("mousemove", handleMouseMove);
			parent.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: cn("absolute inset-0 overflow-hidden pointer-events-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: cn("pointer-events-none absolute rounded-full", circleClassName),
			style: {
				left: position.x,
				top: position.y,
				width: circleSize,
				height: circleSize,
				mixBlendMode: "difference"
			},
			initial: {
				scale: 0,
				x: "-50%",
				y: "-50%"
			},
			animate: {
				scale: isHovered ? 1 : 0,
				x: "-50%",
				y: "-50%"
			},
			transition: {
				duration: .5,
				ease: [
					.19,
					1,
					.22,
					1
				]
			}
		})
	});
}
var CV_URL = "https://drive.google.com/file/d/1mzAsEG_2YFVSqtDOvY_E7tsW3vvR-Dw4/view?usp=sharing";
var SOCIALS = {
	instagram: "https://www.instagram.com/dwhyu.s_/",
	linkedin: "https://www.linkedin.com/in/dimaswahyusaputra111/",
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
function iconUrl(name) {
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
var SKILLS = {
	Programming: [
		"Python",
		"SQL",
		"Pandas",
		"NumPy",
		"Scikit-learn",
		"Matplotlib",
		"Seaborn"
	],
	Visualization: [
		"Power BI",
		"Looker Studio",
		"Tableau",
		"Excel / VBA"
	],
	"Data & Analytics": [
		"EDA",
		"Statistical Analysis",
		"Machine Learning",
		"Big Data",
		"Data Warehousing"
	],
	Tools: [
		"Git / GitHub",
		"Jupyter",
		"Google Colab",
		"Streamlit",
		"MySQL",
		"Pentaho Kettle"
	]
};
var EXPERIENCE = [
	{
		role: "Data Analyst Intern",
		org: "Otoritas Jasa Keuangan (OJK) — East Java",
		period: "Feb 2026 – Mar 2026",
		logo: ojk_logo_default,
		points: ["Built SPLOG, a web-based logistics system managing 315+ items and centralizing stock monitoring.", "Automated reporting pipelines that cut report preparation time by ~60%."]
	},
	{
		role: "Data Scientist Intern",
		org: "id/x partners × Rakamin Academy",
		period: "Aug 2025 – Sep 2025",
		logo: id_x_logo_default,
		points: ["Delivered an end-to-end ML capstone with measurable accuracy benchmarks using Python & Scikit-learn.", "Collaborated with Business Analysts, Data Engineers, and PMs to ship data-driven IT solutions."]
	},
	{
		role: "CEO Analyst",
		org: "Produktifkuy",
		period: "Jan 2025 – Jul 2025",
		logo: pkuy_logo_default,
		points: ["Selected as 1 of 53 from 1,500+ applicants; led analysis across 6 divisions resulting in 6 org-wide improvements.", "Authored 20+ strategic proposals and data-driven decks supporting executive decisions."]
	},
	{
		role: "Vice Project Officer — FSAD FAIR 2025",
		org: "Organizational",
		period: "May 2025 – Jul 2025",
		logo: fsad_logo_default,
		points: ["Coordinated 70+ committee members; engaged 160+ high school students nationwide."]
	}
];
var PROJECTS = [
	{
		name: "ParkVision AI",
		tag: "Computer Vision",
		desc: "Real-time parking slot detection web app using YOLOv8 with full-stack inference pipeline and interactive dashboard, deployed on Vercel.",
		tech: [
			"YOLOv8",
			"Python",
			"Vercel",
			"Streamlit"
		],
		url: "http://parkvisionai.vercel.app/"
	},
	{
		name: "IndoStockAI",
		tag: "ML Forecasting",
		desc: "AI stock analytics platform combining real-time market data with ML forecasting for the Indonesian capital market.",
		tech: [
			"Python",
			"Big Data",
			"Time Series",
			"Streamlit"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_bigdataanalytics-machinelearning-stockmarketanalytics-activity-7418655014862196736-iAVA"
	},
	{
		name: "Order Management Dashboard",
		tag: "Business Intelligence",
		desc: "Looker Studio dashboard analyzing 9,994 orders across 49 states — surfaced Consumer segment as 51.9% of orders and Technology as 60.3% of revenue.",
		tech: [
			"Looker Studio",
			"SQL",
			"EDA"
		],
		url: "https://lnkd.in/gjYSBt_M"
	},
	{
		name: "Customer Segmentation",
		tag: "Unsupervised ML",
		desc: "K-Means clustering (K=4, Elbow + Silhouette validated) on e-commerce data to define personas like High-Potential Newcomers and At-Risk Lapsed.",
		tech: [
			"Scikit-learn",
			"Python",
			"Tableau"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_unsupervisedmachinelearning-kmeansclustering-activity-7412402721502339073-TRvi"
	},
	{
		name: "FRS Monitoring Data Warehouse",
		tag: "Data Engineering",
		desc: "End-to-end OLTP/OLAP warehouse for ITS course registration with ETL in Pentaho Kettle and Power BI dashboards on GPA & capacity trends.",
		tech: [
			"MySQL",
			"Pentaho",
			"Power BI"
		],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_datawarehouse-businessintelligence-powerbi-activity-7347203885381361664-3MIg"
	},
	{
		name: "TSP Optimizer",
		tag: "Optimization",
		desc: "PCB drilling TSP optimizer using 5 constructive heuristics and 2-Opt, achieving up to 15% distance reduction vs. greedy.",
		tech: ["Python", "Machine Learning"],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_metaheuristicoptimization-travelingsalesmanproblem-activity-7411438890093338624-y9tr"
	},
	{
		name: "Design Analysis & Simulation",
		tag: "Engineering",
		desc: "Final project for the Design Analysis and Simulation course — modeling, simulation, and engineering analysis presented end-to-end.",
		tech: ["Python", "Statistical Analysis"],
		url: "https://www.linkedin.com/posts/dimaswahyusaputra111_final-project-for-the-design-analysis-and-activity-7377047766457384960-ijPT"
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
		title: "1st Place — International Business Strategy Competition (UNJ)"
	},
	{
		year: "2026",
		scope: "International",
		title: "1st Place — Dokter Data Infographic Competition"
	},
	{
		year: "2025",
		scope: "National",
		title: "Gold Medal — SATRIA DATA 2025, Kemendiktisaintek RI"
	},
	{
		year: "2025",
		scope: "National",
		title: "1st Place — Brawijaya National Youth Competition (UB)"
	},
	{
		year: "2025",
		scope: "National",
		title: "1st Place — Data Competition, ISFEST UMN"
	},
	{
		year: "2024",
		scope: "International",
		title: "1st Runner Up — International Youthpreneur Competition (SBM ITB)"
	},
	{
		year: "2024",
		scope: "National",
		title: "1st Place — Infographic Competition 4C FILKOM UB"
	},
	{
		year: "2023",
		scope: "International",
		title: "Silver — Greater Bay Area International Math Olympiad"
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
		document.body.appendChild(dot);
		document.body.appendChild(ring);
		let mx = window.innerWidth / 2, my = window.innerHeight / 2;
		let rx = mx, ry = my;
		let raf = 0;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			dot.style.left = mx + "px";
			dot.style.top = my + "px";
		};
		const tick = () => {
			rx += (mx - rx) * .18;
			ry += (my - ry) * .18;
			ring.style.left = rx + "px";
			ring.style.top = ry + "px";
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		const onOver = (e) => {
			const hov = !!e.target?.closest("a, button, [role=\"button\"], input, textarea, select, label");
			ring.classList.toggle("hover", hov);
			dot.classList.toggle("hover", hov);
		};
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
		className: "back-to-top-enter fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary via-secondary-1 to-accent text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition hover:scale-110",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		style: { ["--accent-c"]: accent },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all md:px-6 ${scrolled ? "glass border-border nav-shell-accent" : "border-transparent"}`,
			style: { width: "calc(100% - 2rem)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 font-display text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-7 w-7 place-items-center rounded-full text-primary-foreground text-xs transition-colors",
						style: { background: `linear-gradient(135deg, ${accent}, var(--secondary-1))` },
						children: "DW"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Dimas Wahyu"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: NAV.map((n) => {
						const isActive = active === n.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${n.id}`,
							className: `rounded-full px-3 py-1.5 text-sm transition ${isActive ? "nav-pill-active" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
							children: n.label
						}, n.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CV_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "hidden md:inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition hover:scale-105",
							style: { background: `linear-gradient(90deg, ${accent}, var(--secondary-1))` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "12",
								height: "12",
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
							className: "grid h-9 w-9 place-items-center rounded-full border border-border md:hidden",
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18" })
							})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-4 mt-2 rounded-2xl border border-border glass p-3 md:hidden",
			children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${n.id}`,
				onClick: () => setOpen(false),
				className: `block rounded-lg px-3 py-2 text-sm hover:bg-surface ${active === n.id ? "nav-pill-active" : "text-foreground"}`,
				children: n.label
			}, n.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: CV_URL,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-2 block rounded-lg px-3 py-2 text-center text-sm font-medium text-primary-foreground",
				style: { background: `linear-gradient(90deg, ${accent}, var(--secondary-1))` },
				children: "Download CV"
			})]
		})]
	});
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
		className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
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
				className: "mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Open to Internship & Full-time roles"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-5xl font-semibold leading-[1.1] md:text-7xl",
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
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Dimas Wahyu Saputra"
								}),
								" — a final-year Data Science student at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "ITS"
								}),
								", building dashboards, ML models, and analytics products that move metrics in the real world."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90",
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
									className: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary-1 to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:scale-[1.03]",
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
									className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-surface",
									children: "Get in touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid max-w-md grid-cols-3 gap-6",
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
								className: "font-display text-3xl font-semibold gradient-text",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
								children: s.v
							})] }, s.v))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal relative mx-auto w-full max-w-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square rounded-[2rem] border border-border bg-gradient-to-br from-primary/25 via-secondary-1/15 to-accent/25 p-4 glow-ring",
						style: { transform: "perspective(900px) rotateX(calc(var(--my,0)*-6deg)) rotateY(calc(var(--mx,0)*8deg))" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-4 -top-4 rounded-full border border-border glass px-3 py-1.5 font-mono text-xs animate-float-slow",
								children: "data-driven ✦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: Foto_Formal_Dimas_Putih_default,
								alt: "Dimas Wahyu Saputra",
								className: "h-full w-full rounded-[1.5rem] object-cover object-top",
								loading: "eager"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-4 -left-4 rounded-2xl border border-border glass p-3 font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: "status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-foreground",
									children: "Final-year @ ITS · Open 2026"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -left-6 top-1/3 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-lg animate-float-slow",
								style: { animationDelay: "-2s" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://cdn.simpleicons.org/python/3776AB",
									alt: "",
									width: 24,
									height: 24
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-6 top-2/3 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-lg animate-float-slow",
								style: { animationDelay: "-4s" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://cdn.simpleicons.org/powerbi/F2C811",
									alt: "",
									width: 24,
									height: 24
								})
							})
						]
					})
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
		className: "mx-auto max-w-6xl px-6 py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `reveal ${reveal} mb-12 max-w-2xl`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold md:text-5xl",
				children: title
			})]
		}), children]
	});
}
var SKILL_ACCENTS = [
	"from-primary/15 to-secondary-1/15",
	"from-secondary-2/15 to-accent/15",
	"from-secondary-3/15 to-primary/15",
	"from-secondary-4/15 to-secondary-1/15"
];
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
			className: "grid gap-10 md:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal reveal-left space-y-4 text-base leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"I study",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Data Science at Institut Teknologi Sepuluh Nopember (ITS)"
						}),
						" ",
						"and was named",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "3rd Most Outstanding Student of ITS 2026"
						}),
						". I'm an awardee of the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Beasiswa Indonesia Maju (BIM) DN"
						}),
						" scholarship from Kemdiktisaintek RI."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My work spans the full analytics stack — from collecting and modeling messy data, to building interactive dashboards in Power BI and Looker Studio, to deploying ML pipelines that real users depend on." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Outside coursework, I lead student initiatives, compete in international analytics competitions, and consistently turn raw datasets into stories teams can actually act on." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal reveal-right min-h-[480px] md:min-h-[510px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedList, {
					delay: 2500,
					className: "w-full gap-3 items-stretch",
					children: Object.entries(SKILLS).map(([cat, items], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border border-border bg-gradient-to-br ${SKILL_ACCENTS[idx % SKILL_ACCENTS.length]} bg-card p-5 tilt-on-hover w-full`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
							children: cat
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
									name: s,
									size: 12
								}), s]
							}, s))
						})]
					}, cat))
				})
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-6 border-l border-border pl-6 md:pl-10",
			children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} relative`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[33px] top-5 z-20 grid h-4 w-4 place-items-center rounded-full bg-background md:-left-[45px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary via-secondary-1 to-accent animate-pulse-glow" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tilt, {
					rotationFactor: 6,
					className: "relative group overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px] hover:shadow-primary/40 w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold",
										children: e.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: e.period
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-primary font-medium",
									children: e.org
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground",
									children: e.points.map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }), p]
									}, j))
								})
							]
						}), e.logo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative shrink-0 w-12 h-12 rounded-xl border border-border bg-surface flex items-center justify-center overflow-hidden p-1.5 group-hover:scale-110 transition-transform duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: e.logo,
								alt: e.org,
								className: "w-full h-full object-contain"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClippedCircle, {
						circleClassName: "bg-primary/5",
						circleSize: 400
					})]
				})]
			}, i))
		})
	});
}
var PROJECT_ACCENTS = [
	"from-primary/10 via-transparent to-secondary-1/10",
	"from-secondary-2/10 via-transparent to-accent/10",
	"from-secondary-3/10 via-transparent to-primary/10",
	"from-secondary-4/10 via-transparent to-secondary-1/10",
	"from-accent/10 via-transparent to-secondary-3/10",
	"from-secondary-1/10 via-transparent to-secondary-2/10"
];
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
			className: "grid gap-5 md:grid-cols-2",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `reveal reveal-zoom group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]} bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
							children: p.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: ["0", i + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-xl font-semibold",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: p.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								name: t,
								size: 12
							}), t]
						}, t))
					}),
					p.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.url,
							target: "_blank",
							rel: "noreferrer",
							className: "group/btn inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground",
							children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "12",
								height: "12",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.4",
								className: "transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17 17 7M9 7h8v8" })
							})]
						})
					})
				]
			}, i))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "04 — Recognition",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Awards & achievements." }),
		reveal: "reveal-rotate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `reveal ${i % 2 === 0 ? "reveal-left" : "reveal-right"} group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary-1/5`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-semibold text-muted-foreground group-hover:text-foreground",
						children: a.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${a.scope === "International" ? "bg-primary/15 text-primary" : "bg-accent/20 text-accent-foreground"}`,
						children: a.scope
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm md:text-base",
						children: a.title
					})
				]
			}, i))
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reveal reveal-flip grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1.2fr_1fr] md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "I'm currently open to internships and entry-level roles in data analytics, data science, and business intelligence. Reach out — I usually reply within a day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${SOCIALS.email}`,
							className: "flex items-center gap-3 text-foreground hover:text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "email"
								}),
								"→ ",
								SOCIALS.email
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SOCIALS.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 text-foreground hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "linkedin"
							}), "→ /in/dimaswahyusaputra111"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SOCIALS.instagram,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 text-foreground hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "instagram"
							}), "→ @dwhyu.s_"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${SOCIALS.phone}`,
							className: "flex items-center gap-3 text-foreground hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "phone"
							}), "→ +62 813 1121 1367"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "based"
							}), "→ Surabaya, East Java"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CV_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary-1 to-accent px-4 py-2 text-sm font-medium text-primary-foreground transition hover:scale-[1.03]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "14",
							height: "14",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
						}), "Download CV"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, { size: 18 })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `mailto:${SOCIALS.email}?subject=Opportunity for Dimas`,
				className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary-1 to-accent p-8 text-primary-foreground transition hover:scale-[1.02]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs uppercase tracking-widest opacity-80",
						children: "Start a conversation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-display text-3xl font-semibold leading-tight",
						children: "Say hi →"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-sm opacity-90",
						children: "For collaborations, internships, freelance dashboards, or just to talk about data."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl transition group-hover:bg-white/40" })
				]
			})]
		})
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
