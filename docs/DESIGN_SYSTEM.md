# Design System Specification — Nusaibah Fathul Jannah Portfolio

Dokumen ini merupakan panduan spesifikasi **Design System** resmi yang diekstraksi dan distandarisasi dari implementasi HTML/CSS portofolio Nusaibah Fathul Jannah. Desain ini mengusung perpaduan gaya **Playful Modern Data Professionalism** dengan elemen **Soft Neo-Brutalism & Bento Grid**.

---

## 1. Design Philosophy & Character

1. **Precision Meets Playfulness:** Memadukan angka statistik dan data akurat dengan micro-interactions, floating widgets, maskot vektor, dan tilt sticker yang ramah.
2. **Data-First Storytelling:** Setiap komponen visual (bar chart kecil, ring meter, flow pipeline data) dirancang untuk memvalidasi klaim keahlian data (*data verification*).
3. **High Contrast & Accessible:** Kontras warna teks tinggi (*deep olive-charcoal* di atas *off-white/mint*), dukungan *dark mode* bawaan, serta *focus ring* aksesibilitas kontras tinggi (*neon magenta*).

---

## 2. Color Palette & Design Tokens

### 2.1. Semantic Color Tokens

| Token Name | Light Mode (Hex) | Dark Mode (Hex) | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--bg` | `#FBFCFC` | `#161B12` | Warna latar belakang kanvas utama (*canvas background*) |
| `--card` | `#FBFCFC` | `#1F261A` | Warna permukaan kartu bento dan kontainer komponen |
| `--tx` | `#21281B` | `#F1F5EC` | Warna teks utama (*body text* & judul standar) |
| `--ink` | `#21281B` | `#21281B` (statis) | Warna hitam zaitun pekat untuk tombol solid, border aksen, dan teks kontras tinggi |
| `--field` | `#3FDF9F` | `#3FDF9F` | Hijau mint/meadow cerah untuk hero blob, flow pipeline, dan background footer |
| `--act` | `#00D26A` | `#00D26A` | Hijau emerald aktif untuk status validasi pass, indikator KPI, dan progress bar |
| `--sun` | `#F8C33A` | `#F8C33A` | Kuning keemasan cerah untuk kartu pengalaman, highlight IPK, dan sticker aksen |
| `--mag` | `#F108B0` | `#F108B0` | Neon magenta vivid untuk kartu Capstone Flagship dan *focus-visible ring* |
| `--line` | `rgba(33,40,27,0.1)` | `rgba(241,245,236,0.12)` | Garis batas tipis untuk pemisah, kartu, dan chip |
| `--sh` | `0 8px 24px rgba(33,40,27,0.07)` | `0 8px 24px rgba(0,0,0,0.3)` | Elevasi bayangan halus pada kartu floating dan bento |

### 2.2. CSS Variables Definition
```css
:root {
  --bg: #FBFCFC;
  --card: #FBFCFC;
  --tx: #21281B;
  --field: #3FDF9F;
  --act: #00D26A;
  --sun: #F8C33A;
  --mag: #F108B0;
  --ink: #21281B;
  --line: rgba(33, 40, 27, 0.1);
  --sh: 0 8px 24px rgba(33, 40, 27, 0.07);
  --back: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy Spring Easing */
}

/* Dark Mode (Class & Media Query Support) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #161B12;
    --card: #1F261A;
    --tx: #F1F5EC;
    --line: rgba(241, 245, 236, 0.12);
    --sh: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
}

:root[data-theme="dark"] {
  --bg: #161B12;
  --card: #1F261A;
  --tx: #F1F5EC;
  --line: rgba(241, 245, 236, 0.12);
  --sh: 0 8px 24px rgba(0, 0, 0, 0.3);
}
```

---

## 3. Typography System

### 3.1. Font Families
- **Primary Body & Headings:** `'Outfit', system-ui, sans-serif`
  - Karakter: Geometris, ramah, modern, keterbacaan tinggi pada layar digital.
- **Monospace (Data / Files / Pipeline):** `'JetBrains Mono', monospace`
  - Digunakan khusus pada nama file data (`orders.csv`, `stores.sqlite`), format file, dan tahapan verifikasi data pipeline.

### 3.2. Type Hierarchy & Scales

| Elemen | Ukuran Font (Size) | Line Height | Weight | Letter Spacing | Keterangan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Heading)** | `clamp(30px, 4.6vw, 44px)` | `1.1` | `900` (Black) | `-0.02em` | Headline utama pada hero section |
| **H2 (Section Heading)** | `26px` (Hero/Contact: `30px`) | `1.15` | `800` (ExtraBold) | `-0.02em` | Judul setiap section |
| **H3 (Card Title)** | `18px` (Flagship: `22px`) | `1.25` | `800` (ExtraBold) | Normal | Judul proyek / pengalaman |
| **H3 (Skill Subheading)** | `14px` | `1.3` | `800` (ExtraBold) | Normal | Kategori pada skills matrix |
| **Lead Paragraph** | `14px` | `1.55` | `400` (Regular) | Normal | Opacity `0.78` - `0.85`, max-width `38ch` - `44ch` |
| **Body Text** | `14px` | `1.55` | `400` (Regular) | Normal | Teks deskripsi standar |
| **Mini / Captions** | `13px` | `1.45` | `400` / `500` | Normal | Teks di dalam kartu proyek & list |
| **Tiny / Eyebrow Tag** | `11px` | `1.2` | `800` (ExtraBold) | `0.08em` | Uppercase, label kategori di atas heading |
| **Metric Stat (Big)** | `44px` | `1.0` | `900` (Black) | `-0.03em` | Highlight IPK (GPA 3.79) |
| **KPI Number** | `26px` | `1.1` | `900` (Black) | `-0.02em` | Angka pada strip KPI |

---

## 4. Spacing, Layout & Grid Architecture

### 4.1. Layout Containers
- **Max Width Container (`.wrap`):** `1100px`, margin `0 auto`, horizontal padding `24px`.
- **Section Vertical Padding:** `96px 0` (Section dengan keterkaitan rapat: `32px` - `48px 0`).
- **Safe Area Inset:** Dilengkapi `env(safe-area-inset-top)` dan `env(safe-area-inset-bottom)` untuk tampilan optimal pada perangkat iOS/mobile.

### 4.2. Grid Patterns

1. **Hero Grid (`.hg`):**
   - Desktop (≥ 900px): `grid-template-columns: 6fr 6fr; align-items: center; gap: 40px;`
   - Mobile: `grid-template-columns: 1fr;`

2. **KPI Strip Grid (`.kpi`):**
   - Desktop (≥ 860px): `grid-template-columns: repeat(4, 1fr); gap: 28px 24px;`
   - Mobile: `grid-template-columns: repeat(2, 1fr);`

3. **Projects Bento Grid (`.bento`):**
   - Desktop (≥ 900px): `grid-template-columns: 7fr 5fr; gap: 24px;`
   - **Flagship Card Span:** `grid-row: span 2;` (Kartu utama membentang penuh 2 baris di kolom kiri).
   - Mobile: `grid-template-columns: 1fr;`

4. **Pipeline Flow Grid (`.lane`):**
   - Desktop (≥ 800px): `grid-template-columns: 1fr 120px 1fr; align-items: center; gap: 24px;`
   - Mobile: `grid-template-columns: 1fr;`

5. **Split 2-Column Sections (`.two`, `.edu`):**
   - Desktop (≥ 900px): `5fr 7fr` (Experience + Skills) dan `6fr 6fr` (Education + Certifications).
   - Mobile: `1fr; gap: 48px;`

---

## 5. UI Component Specifications

### 5.1. Buttons (`.btn`)
Tombol berbentuk kapsul (*pill shape*) dengan animasi hover elastis.

- **Base Style:**
  ```css
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 8px 18px;
  font: 700 13px 'Outfit', sans-serif;
  cursor: pointer;
  transition: transform 0.18s var(--back), background 0.15s;
  ```
- **Varian:**
  - **Primary (`.btn.p`):** Background `var(--ink)`, teks `#FFFFFF`. Hover: background `#3A4531`, `transform: translateY(-1px)`.
  - **Outline (`.btn.o`):** Background transparan, border `1.5px solid var(--tx)`, teks `var(--tx)`.
  - **White (`.btn.w`):** Background `#FBFCFC`, border `#FBFCFC`, teks `var(--ink)`.
- **Active State:** `transform: scale(0.96, 0.96);`
- **Focus Ring Aksesibilitas:** `outline: 3px solid var(--mag); outline-offset: 3px;`

### 5.2. Cards & Bento Containers (`.card`)
- **Default Card:** Background `var(--card)`, `border-radius: 16px`, padding `24px`, box-shadow `var(--sh)`.
- **Flagship Card (`.flag`):**
  - Background `var(--mag)` (Vivid Magenta).
  - Teks `var(--ink)`.
  - Padding `28px`.
  - Dilengkapi sticker aksen di sudut kanan atas.
- **Experience Card (`.card.exp`):**
  - Background `var(--sun)` (Golden Yellow).
  - Teks `var(--ink)`.
  - Dilengkapi ilustrasi maskot vektor (`.m2`).
- **Big Stat Card (`.edu .big`):**
  - Background `var(--sun)`.
  - Menampilkan angka raksasa `44px` font weight 900.

### 5.3. Chips & Tags (`.chip`)
Pill kecil untuk tech-stack dan metadata:
```css
display: inline-block;
font-size: 11px;
font-weight: 700;
border: 1px solid var(--line);
border-radius: 999px;
padding: 3px 10px;
margin: 0 6px 6px 0;
```
- **Varian Highlight (`.sk .y .chip`):** Background `var(--sun)`, teks & border `var(--ink)`.
- **Varian Di Atas Kartu Flagship:** Background `rgba(251, 252, 252, 0.9)`, teks `var(--ink)`.

### 5.4. Neo-Brutalist Sticker Badges (`.sticker`)
Label miring interaktif bernuansa *retro sticker*:
```css
display: inline-block;
background: var(--sun);
color: var(--ink);
border: 1px solid var(--ink);
box-shadow: 2px 2px 0 var(--ink);
border-radius: 6px;
padding: 4px 9px;
rotate: -7deg;
transition: rotate 0.2s var(--back);
```
- **Hover:** `rotate: -5deg;`
- **Varian Magenta (`.sticker.m`):** Background `var(--mag)`.

### 5.5. Floating Data Widgets (`.wd`)
Komponen visual mikro pada hero cluster yang mensimulasikan visualisasi data live:
- **`w1`:** KPI Card (GMV IDR 41.57M+, rotasi `-4deg`).
- **`w2`:** Progress Ring Meter SVG (Rotasi `3deg`, animasi pengisian lingkaran hijau emerald `100%`).
- **`w3`:** Mini Bar Chart (Rotasi `2deg`, 5 batang bar horizontal berwarna-warni animasi tumbuh dari bawah).
- **`w4`:** Data Format Counter (Rotasi `-3deg`, angka `5`).

### 5.6. Data Pipeline Showcase Component (`.pipe`)
Wadah visual yang mendemonstrasikan proses data engineering:
- **Container Asimetris:** `border-radius: 60px 100px 60px 100px; background: var(--field); padding: 56px 32px;`
- **Source Badges (`.src`):** Font JetBrains Mono dengan animasi bertingkat (*staggered drop*).
- **Animated Flow Arrow (`.arrow`):** Garis panah hitam yang meregang dari kiri ke kanan.
- **Audit Checklist Box (`.out`):** Kotak putih dengan daftar tes kelulusan (*Grain check pass, PK/FK pass, PII masked pass*).

---

## 6. Motion & Animation Tokens

### 6.1. Easing Functions
- **Bouncy Spring Easing:** `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Smooth Decelerate Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)`

### 6.2. Animation Keyframes

```css
/* 1. Breathing Organic Background Blob */
@keyframes breathe {
  50% { transform: scale(1.015, 1.04); }
}

/* 2. Floating Drift for Hero Widgets */
@keyframes drift {
  50% { transform: translateY(-9px); }
}

/* 3. Bar Chart Growing Animation */
@keyframes grow {
  from { transform: scaleY(0); }
}

/* 4. Circular Progress Meter Fill */
@keyframes fill {
  to { stroke-dashoffset: 0; }
}

/* 5. Mascot Bobbing Float */
@keyframes bob {
  50% { transform: translateY(-6px) rotate(3deg); }
}

/* 6. Landing Reveal for Pipeline Sources */
@keyframes land {
  to { opacity: 1; transform: none; }
}

/* 7. Arrow Line Drawing */
@keyframes draw {
  to { transform: scaleX(1); }
}
```

### 6.3. Scroll Reveal Engine
Menggunakan class `.rv` dan `IntersectionObserver`:
- **Initial State:** `opacity: 0; transform: translateY(16px);`
- **Active State (`.rv.in`):** `opacity: 1; transform: none;`
- **Staggered Delays:** Didukung oleh custom property `--d: 1`, `--d: 2`, `--d: 3` (`transition-delay: calc(var(--d, 0) * 60ms)`).

### 6.4. Accessibility Rule (`prefers-reduced-motion`)
Untuk pengguna yang mengaktifkan opsi pengurangan animasi pada sistem operasi, semua animasi durasional dinonaktifkan secara otomatis dan konten langsung tampil statis tanpa pergeseran transisi.

---

## 7. Pemetaan ke Tailwind CSS (Implementation Mapping)

Jika Anda ingin merekonstruksi design system ini menggunakan framework modern (seperti Nuxt/Vue, Next.js, atau Astro) dengan **Tailwind CSS**, gunakan konfigurasi `tailwind.config.js` berikut:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        textMain: 'var(--tx)',
        field: 'var(--field)', // #3FDF9F
        emeraldAct: 'var(--act)', // #00D26A
        sun: 'var(--sun)', // #F8C33A
        magentaNeon: 'var(--mag)', // #F108B0
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        softCard: '0 8px 24px rgba(33, 40, 27, 0.07)',
        sticker: '2px 2px 0 var(--ink)',
      },
      borderRadius: {
        bento: '16px',
        capsule: '999px',
        pipe: '60px 100px 60px 100px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
}
```

