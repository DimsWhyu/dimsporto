# 📐 DESIGN SYSTEM & ARCHITECTURE SPECIFICATION
> **Project:** Dimas Wahyu Saputra — Personal Portfolio Website  
> **Tech Stack:** TanStack Start (React 19) + Vite + Tailwind CSS v4 (OKLCH) + Motion + Three.js  
> **Location:** `DESIGN.md`  
> **Author:** Dimas Wahyu Saputra  

---

## 📑 Daftar Isi (Table of Contents)

1. [Filosofi & Visi Desain (Design Philosophy)](#1-filosofi--visi-desain-design-philosophy)
2. [Sistem Warna OKLCH & Dark/Light Mode (Color System)](#2-sistem-warna-oklch--darklight-mode-color-system)
3. [Sistem Tipografi & Hierarki Teks (Typography Scale)](#3-sistem-tipografi--hierarki-teks-typography-scale)
4. [Sistem Spasi, Elevation, & Radiance (Spacing & Elevation Tokens)](#4-sistem-spasi-elevation--radiance-spacing--elevation-tokens)
5. [Mikro-Interaksi & Komponen Spasial 3D (Spatial UI & Motion)](#5-mikro-interaksi--komponen-spasial-3d-spatial-ui--motion)
6. [Katalog & Spesifikasi Komponen UI (Component Specs)](#6-katalog--spesifikasi-komponen-ui-component-specs)
7. [Arsitektur Halaman & Alur Pengguna (Page Architecture)](#7-arsitektur-halaman--alur-pengguna-page-architecture)
8. [Adaptasi Mobile, Aksesibilitas & Performa (Responsive & Accessibility)](#8-adaptasi-mobile-aksesibilitas--performa-responsive--accessibility)

---

## 1. 💡 Filosofi & Visi Desain (Design Philosophy)

Website portofolio ini mengombinasikan dua filosofi estetika visual kelas dunia: **Apple-inspired Photography & Typography Minimalism** dipadukan dengan **Cybernetic & High-Performance Data Tech Aesthetics**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          DESIGN PHILOSOPHY                             │
├───────────────────────────────┬────────────────────────────────────────┤
│ 🍏 Apple Minimalism           │ ⚡ Modern Data-Tech Aesthetics          │
├───────────────────────────────┼────────────────────────────────────────┤
│ • Clean, edge-to-edge layout  │ • OKLCH Vibrant Color Accents          │
│ • Negative letter-spacing     │ • 3D Physics WebGL Interactive Lanyard │
│ • Receded UI chrome           │ • 3D Perspective Carousel Stack        │
│ • Product-first exhibition    │ • Interactive Node Beam Skill Network  │
│ • Single signature drop-shadow│ • Custom Viewfinder Bracket Cursor     │
└───────────────────────────────┴────────────────────────────────────────┘
```

### Prinsip Utama (Core Design Principles):
1. **Clarity Over Clutter (Kejelasan di Atas Kepadatan):** Elemen antarmuka pendukung (chrome/border) dibuat halus (*glassmorphism* & *oklch opacity*) agar fokus utama pengunjung berada pada data, pencapaian, dan karya proyek.
2. **Tactile & Spatial Feedback (Pengalaman Fisikal & Spasial):** Penggunaan simulasi fisika nyata Three.js (Verlet integration rope/card lanyard), karusel 3D dengan *depth of field*, dan *viewfinder bracket cursor* memberikan rasa interaksi yang hidup (*alive & interactive*).
3. **Data-First Storytelling (Penceritaan Berbasis Data):** Memanfaatkan visualisasi visual seperti GitHub contribution graph, interactive skill node beams, serta badge statistik untuk mencerminkan identitas pemilik sebagai mahasiswa Data Science ITS.
4. **Fluid Dark & Light Cohesion (Harmoni Mode Gelap & Terang):** Transisi tema yang mulus memanfaatkan *View Transitions API* dengan kliping lingkaran (*radial clip-path*) dan palette OKLCH presisi tinggi.

---

## 2. 🎨 Sistem Warna OKLCH & Dark/Light Mode (Color System)

Website ini menggunakan **OKLCH Color Space** yang dipetakan langsung melalui Tailwind CSS v4 CSS variables (`@theme inline` & `:root`/`.dark` selectors di [styles.css](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/styles.css#L40-L83)). OKLCH memberikan distribusi gradasi dan tingkat persepsi kecerahan (*lightness*) yang jauh lebih konsisten dibandingkan HSL/RGB biasa.

### 2.1 Color Token Matrix

| Token Name | Light Mode (OKLCH) | Dark Mode (OKLCH) | Peran & Penggunaan Visual |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.975 0.006 240)` | `oklch(0.11 0.025 265)` | Latar belakang kanvas utama |
| `--foreground` | `oklch(0.18 0.03 260)` | `oklch(0.98 0.005 250)` | Warna teks primer & judul utama |
| `--card` | `oklch(1 0 0)` | `oklch(0.18 0.035 265)` | Kartu kontainer, modal dialog, & permukaan |
| `--card-foreground` | `oklch(0.18 0.03 260)` | `oklch(0.98 0.005 250)` | Warna teks di atas kartu |
| `--muted` | `oklch(0.94 0.012 250)` | `oklch(0.23 0.035 265)` | Latar tombol netral & chip badge |
| `--muted-foreground` | `oklch(0.45 0.025 260)` | `oklch(0.72 0.02 250)` | Subtitle, tanggal, & teks sekunder |
| `--border` | `oklch(0.8 0.022 255)` | `oklch(0.38 0.05 265)` | Border halus divider & stroke kartu |
| `--primary` | `oklch(0.6 0.22 265)` | `oklch(0.72 0.18 270)` | Warna aksen utama (Electric Indigo) |
| `--primary-foreground` | `oklch(0.99 0 0)` | `oklch(0.11 0.025 265)` | Teks kontras di atas tombol primary |
| `--accent` | `oklch(0.75 0.18 195)` | `oklch(0.82 0.17 195)` | Aksen Cyan / Electric Teal untuk sorotan |
| `--secondary-1` | `oklch(0.68 0.21 340)` | `oklch(0.78 0.18 340)` | Rose / Vibrant Pink gradien |
| `--secondary-2` | `oklch(0.76 0.18 80)` | `oklch(0.82 0.16 80)` | Warm Gold / Amber gradien |
| `--secondary-3` | `oklch(0.7 0.2 150)` | `oklch(0.78 0.17 150)` | Emerald / Tech Green gradien |
| `--secondary-4` | `oklch(0.68 0.21 30)` | `oklch(0.75 0.2 30)` | Orange / Coral accent gradien |
| `--surface` | `oklch(0.955 0.012 250)` | `oklch(0.21 0.04 265)` | Permukaan sekunder (hover state) |
| `--surface-2` | `oklch(0.915 0.02 250)` | `oklch(0.26 0.045 265)` | Elevated surface layer |
| `--grid-color` | `oklch(0.82 ... / 0.55)` | `oklch(0.32 ... / 0.45)` | Garis pola grid latar belakang |
| `--glow` | `0 0 80px oklch(0.62...)` | `0 0 100px oklch(0.72...)` | Radiance radial aura pada elemen hero |

### 2.2 Gradien Aksen Signature (Signature Gradients)
1. **`.gradient-text`:** Gradien linear 120 derajat memadukan `--primary`, `--secondary-1` (Rose), dan `--accent` (Cyan) dengan animasi pergeseran latar belakang (`animation: gradient-shift 8s ease-in-out infinite`).
2. **`.rainbow-text`:** Gradien multi-spektrum 90 derajat memadukan 5 warna sekunder untuk menciptakan efek teks bersinar pada tajuk utama.

---

## 3. ✍️ Sistem Tipografi & Hierarki Teks (Typography Scale)

Sistem tipografi dirancang presisi menggunakan kombinasi font sans-serif modern yang dimuat langsung dari Google Fonts & System Font Stacks di [__root.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/routes/__root.tsx#L97-L102):

- **Display & Headlines:** `SF Pro Display`, `-apple-system`, `Space Grotesk`, `sans-serif`
- **Body & Content:** `SF Pro Text`, `-apple-system`, `Inter`, `sans-serif`
- **Monospace & Tech Data:** `JetBrains Mono`, `ui-monospace`, `monospace`

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHY HIERARCHY                            │
├───────────────────┬──────────────┬──────────────┬──────────────────────┤
│ Level / Role      │ Font Family  │ Size Range   │ Letter Spacing       │
├───────────────────┼──────────────┼──────────────┼──────────────────────┤
│ Hero Display H1   │ Display      │ 48px – 72px  │ -0.025em (Apple tight)│
│ Section Title H2  │ Display      │ 32px – 44px  │ -0.020em             │
│ Sub-heading H3    │ Display      │ 20px – 24px  │ -0.015em             │
│ Body Text Large   │ Sans         │ 17px – 18px  │ -0.010em             │
│ Body Text Normal  │ Sans         │ 15px – 16px  │ 0.000em              │
│ Meta / Tag / Badge│ Mono / Sans  │ 12px – 14px  │ +0.020em (Airy)      │
└───────────────────┴──────────────┴──────────────┴──────────────────────┘
```

---

## 4. 📐 Sistem Spasi, Elevation, & Radiance (Spacing & Elevation Tokens)

### 4.1 Border Radius Scale
Diatur melalui CSS variable `--radius: 0.875rem` (14px) di [styles.css](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/styles.css#L8-L13):
- `--radius-sm`: `10px` (`calc(var(--radius) - 4px)`) — Chip badge kecil & tooltip.
- `--radius-md`: `12px` (`calc(var(--radius) - 2px)`) — Tombol & elemen input.
- `--radius-lg`: `14px` (`var(--radius)`) — Kartu proyek & modal dialog.
- `--radius-xl`: `18px` (`calc(var(--radius) + 4px)`) — Kartu timeline & carousel item.
- `--radius-2xl`: `22px` (`calc(var(--radius) + 8px)`) — Container utama & hero card.
- `--radius-3xl`: `26px` (`calc(var(--radius) + 12px)`) — Outer spatial frames.
- `Pill / Full`: `9999px` — Navigation dock, status pill, CTA primary.

### 4.2 Elevation, Glassmorphism, & Glow Effects
- **`.shadow-apple-product`:** Signature drop shadow Apple (`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22)`), memberikan ilusi barang pameran yang bertumpu secara fisikal di atas kanvas.
- **`.glass`:** Efek frosted glass premium (`backdrop-filter: blur(14px) saturate(180%)`) digunakan pada Floating Navigation Dock & Modal Header.
- **`.glow-ring`:** Garis tepi memancar dengan perpaduan `color-mix` OKLCH.
- **`.bg-grid`:** Pola kotak teknis 56px x 56px dengan topeng linier *radial gradient mask* agar memudar di tepi layar.

---

## 5. 🔮 Mikro-Interaksi & Komponen Spasial 3D (Spatial UI & Motion)

Website ini dipenuhi oleh mikro-interaksi canggih berbasis GPU yang memberikan kesan interaktif tanpa mengorbankan kecepatan rendering.

```
┌────────────────────────────────────────────────────────────────────────┐
│                    SPATIAL UI & MOTION ARCHITECTURE                    │
├────────────────────────────────────────────────────────────────────────┤
│  [1] WebGL 3D Lanyard Card    ──► Verlet Physics Rope + Three.js       │
│  [2] 3D Perspective Carousel ──► CSS rotateY + translateZ Depth Stack │
│  [3] Scroll Spring Timeline   ──► Framer Motion useScroll + useSpring  │
│  [4] Interactive Node Beams   ──► Dynamic SVG Path Bezier Connectors   │
│  [5] Custom Viewfinder Cursor ──► Dual-Ring Spin + Mix-Blend Difference│
│  [6] View Transition Toggle   ──► Circular Clip-Path Theme Switcher    │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.1 WebGL 3D Lanyard Card (`lanyard-card.tsx`)
Terletak pada komponen [lanyard-card.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/components/lanyard-card.tsx), ID Card ini tidak sekadar 2D gambar melainkan **WebGL Three.js Canvas 3D** yang disimulasikan menggunakan logika fisika nyata:
- **Simulasi Tali (Verlet Integration Rope Physics):** Tali lanyard terdiri dari node-node yang merespons gravitasi, *damping*, dan gerakan *drag* pengguna.
- **Tekstur Kartu 2D Prosedural:** Kanvas internal 600x950 piksel merender foto formal Dimas, logo ITS, spesialisasi Data Science, dan QR code autentikasi secara *real-time*.
- **Pencahayaan 3D (Dynamic Lighting):** Terdiri dari Ambient Light (`1.2`), Directional Light (`1.8`), dan Point Light (`0.8`) untuk menghasilkan kilauan bahan *matte-metallic*.

### 5.2 3D Perspective Carousel (`ThreeDCarousel.tsx`)
Dipakai pada bagian pengalaman kerja [ThreeDCarousel.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/components/ThreeDCarousel.tsx):
- Kartu ditata secara spasial sumbu Z (`transform: rotateY(...) translateZ(...) scale(...)`).
- Kartu aktif berada di depan (`scale: 1, opacity: 1, z-index: 30`), sementara kartu sebelumnya/sesudahnya berotasi -25°/25° dan menyusut.
- Dilengkapi gesture *swipe touch* untuk perangkat seluler, *keyboard navigation* (panah kiri/kanan), dan *auto-rotation intersection observer*.

### 5.3 Custom Viewfinder Bracket Cursor (`styles.css`)
Interaksi kursor kustom bertema pembidik kamera / *data viewfinder* diatur di [styles.css](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/styles.css#L311-L432):
- **Dot Primer (`.cursor-dot`):** Titik tengah 6px yang mengikuti posisi kursor.
- **Ring Outer (`.cursor-ring`):** Frame pembidik berukuran 32px.
- **Sudut Pembidik (`.cursor-corners`):** Empat siku pembidik yang berputar konstan (`cursor-spin 9s linear infinite`).
- **Mix-Blend Mode:** Menggunakan `mix-blend-mode: difference` sehingga warna kursor otomatis membalik kontras di atas latar belakang terang maupun gelap.
- **Hover Scale State:** Saat melayang di atas elemen interaktif (tombol, kartu, tautan), sudut siku pembidik membesar menjadi 14px dan mengunci rotasinya.

### 5.4 Scroll Spring Timeline (`ScrollTimeline.tsx`)
Komponen [ScrollTimeline.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/components/ScrollTimeline.tsx) merender garis progres pencapaian dengan pegas fisika `useSpring` (`stiffness: 120, damping: 20`), di mana simpul pencapaian menyala secara otomatis saat pengunjung melakukan *scroll* melewati section.

### 5.5 Interactive Skills Beam Showcase (`skills-beam-showcase.tsx`)
Merender jar jaring-jaring *node beam* menghubungkan *data input sources* (Python, SQL, Big Data) menuju *core processing & ML engines* hingga ke *output visualization* (Power BI, Tableau, Streamlit) menggunakan garis SVG teranimasi [animated-beam.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/components/ui/animated-beam.tsx).

### 5.6 Circular View Transition Theme Toggler (`animated-theme-toggler.tsx`)
Penukaran mode terang/gelap pada [animated-theme-toggler.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/components/ui/animated-theme-toggler.tsx) memanfaatkan `document.startViewTransition`. Animasi membuka lingkaran radial dari titik klik pengguna untuk pengalaman transisi tema yang magis.

---

## 6. 📦 Katalog & Spesifikasi Komponen UI (Component Specs)

### 6.1 Floating Glass Navigation Dock (`dock.tsx`)
- **Lokasi:** Terpaku di bagian bawah tengah viewport (`fixed bottom-6 z-50`).
- **Desain:** Bilah kapsul *frosted glass* dengan ikon-ikon yang membesar saat kursor melayang di dekatnya (*magnification dock effect*).
- **Fitur:** Dilengkapi tombol penukar tema, indikator seksi aktif, serta tautan media sosial.

### 6.2 Preloader Screen (`initial-loader.tsx`)
- **Fungsi:** Menampilkan sambutan multilanguage (*"Halo" -> "Hello" -> "你好" -> "Hola" -> "مرحبًا" -> "Bonjour" -> "こんにちは"*).
- **Animasi:** Dilengkapi penghitung persentase 0-100%, pola grid bercahaya, dan animasi penutup *slide-up* dengan kurva bezier `cubic-bezier(0.76, 0, 0.24, 1)`.

### 6.3 Kartu Proyek & Modal Detail (`index.tsx` & `flipping-card.tsx`)
- **Grid Layout:** Responsive 1/2/3 kolom dengan gambar preview resolusi tinggi.
- **Hover Effect:** Zoom halus pada gambar (`scale-105 transition-transform duration-500`) dan kemunculan tombol aksi.
- **Modal Dialog Detail:** Menggunakan Radix UI Dialog untuk menampilkan rincian arsitektur proyek, pustaka teknologi yang digunakan, serta tombol tautan *Live App / Vercel* dan *GitHub Repository*.

### 6.4 GitHub Contribution Heatmap (`github-contributions.tsx`)
- **Desain:** Grid aktivitas tahunan bergaya GitHub dengan tooltip jumlah komit harian dan filter statistik total kontribusi.

---

## 7. 🗺️ Arsitektur Halaman & Alur Pengguna (Page Architecture)

Struktur antarmuka pada [index.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/routes/index.tsx) disusun berdasarkan urutan narasi profesional yang kohesif:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PAGE SECTION ARCHITECTURE                       │
├────────────────────────────────────────────────────────────────────────┤
│ [1] HERO SECTION                                                       │
│     • Floating Status Badge: "Available for Data Science & BI Roles"   │
│     • Typography Title & Gradient Subtitle                             │
│     • Interactive 3D WebGL Lanyard Card (Right Column)                 │
│     • Quick Call-To-Action: "Download CV" & "Contact Me"               │
├────────────────────────────────────────────────────────────────────────┤
│ [2] ABOUT & BIOGRAPHY SECTION                                          │
│     • Profile Overview & Data Science Philosophy at ITS                │
│     • GitHub Activity Heatmap & Contribution Metrics                   │
│     • Core Skill Icons Grid                                            │
├────────────────────────────────────────────────────────────────────────┤
│ [3] EXPERIENCE SECTION (3D Perspective Stack)                          │
│     • OJK East Java — Data Analyst Intern                              │
│     • id/x partners × Rakamin — Data Scientist Intern                  │
│     • Produktifkuy — CEO Analyst                                       │
│     • FSAD FAIR 2025 — Vice Project Officer                            │
├────────────────────────────────────────────────────────────────────────┤
│ [4] FEATURED PROJECTS SHOWCASE                                         │
│     • ParkVision AI (Computer Vision YOLOv8)                           │
│     • IndoStockAI (Time Series Financial Forecasting)                  │
│     • Order & Logistics Analytics Dashboard                            │
│     • Customer Segmentation Clustering Model                           │
│     • TSP Route Optimizer & Logistics Simulation                       │
│     • Data Warehouse ETL Pentaho Pipeline                              │
├────────────────────────────────────────────────────────────────────────┤
│ [5] ACHIEVEMENTS & COMPETITION TIMELINE                                │
│     • 1st Place — Int. Business Strategy Competition (UNJ 2026)        │
│     • 1st Place — Dokter Data Infographic Competition (2026)           │
│     • Gold Medal — SATRIA DATA 2025 Kemendiktisaintek RI              │
├────────────────────────────────────────────────────────────────────────┤
│ [6] SKILLS BEAM NETWORK SHOWCASE                                       │
│     • Interactive SVG Node Network Connecting Tools & Frameworks       │
├────────────────────────────────────────────────────────────────────────┤
│ [7] CONTACT & FOOTER SECTION                                           │
│     • Social Media Dock, Email Direct CTA, & Copyright Footer          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. 📱 Adaptasi Mobile, Aksesibilitas & Performa (Responsive & Accessibility)

### 8.1 Strategi Responsif (Mobile-First Adaptations)
- **Kursor Kustom:** Otomatis dimatikan pada perangkat layar sentuh (`@media (hover: none), (pointer: coarse)`) untuk menjaga kenyamanan navigasi bawaan ponsel.
- **Kartu Lanyard 3D:** Berubah dari posisi samping pada desktop menjadi posisi terpusat di atas pada tampilan seluler.
- **Karasul 3D:** Beralih otomatis mendukung usapan jari (*mobile touch swipe*) dengan threshold jarak usap 40px.

### 8.2 Aksesibilitas (a11y) & Performa
- **Kontras Warna:** Seluruh kombinasi warna teks dan latar belakang memenuhi standar WCAG AAA berkat kalibrasi OKLCH lightness.
- **Semantic HTML:** Penggunaan elemen `<main>`, `<section>`, `<header>`, `<footer>`, `<h1-h3>` sesuai pedoman SEO & screen reader.
- **Resource Preloading:** Font Google dan logo di-preload pada `<head>` di [__root.tsx](file:///Users/dimaswahyusaputra/Documents/02.%20CV/dims_porto/src/routes/__root.tsx#L97-L102) untuk mencegah *Flash of Unstyled Text* (FOUT).

> **Note:** Dokumen ini merupakan acuan resmi (*single source of truth*) untuk desain, tata letak, warna, tipografi, dan komponen interaktif pada website portofolio Dimas Wahyu Saputra.
