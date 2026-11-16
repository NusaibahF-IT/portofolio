# Nusaibah Fathul Jannah — Data Analyst Portfolio

Website portofolio profesional untuk **Nusaibah Fathul Jannah**, seorang Data Analyst dengan latar belakang Sistem Telekomunikasi (IPK 3.79/4.00), pengalaman di Badan Pusat Statistik (BPS), dan lulusan *Data Analyst with AI Bootcamp*.

Proyek ini dibangun menggunakan **Nuxt 3** dan **Tailwind CSS** mengusung filosofi desain **Playful Modern Data Professionalism** (Bento Grid, Micro Data Widgets, Neo-Brutalist Badges, dan Interaktivitas Responsif).

---

## 🚀 Fitur Utama Website Portofolio

1. **Hero Section dengan Interactive Data Widgets:**
   - Visualisasi mikro metrik data (*Q1 GMV IDR 41.57M+*, *Progress Ring Meter 100%*, *Mini Bar Chart*, *Formats Merged 5*).
   - Animasi vektor maskot interaktif dan SVG organic background blob.
2. **KPI Strip Bar:**
   - 4 kartu metrik utama yang merefleksikan pencapaian kuantitatif di bidang data dan sertifikasi resmi (BPS & BNSP).
3. **Projects Bento Grid:**
   - **SwiftBite Capstone Project:** Flagship card beraksen magenta dengan rincian 3 temuan kunci bisnis (Loyal segment, Fast Food bottleneck, ulasan negatif).
   - **Tombol Live Dashboard ↗:** Membuka dashboard interaktif mandiri (`SwiftBite_Dashboard_Final.html`).
   - **Tombol Case Study Summary ↗:** Membuka **Modal Pop-Up Interaktif** yang merinci ringkasan eksekutif, validasi pipeline data, 3 temuan BQ, serta rekomendasi strategis & target KPI Q2 2026.
   - **NusaMart Multi-Source ETL Pipeline:** Pembangunan pipeline 5 format data dengan proteksi PII dan audit kelulusan.
   - **NusaMart BI Dashboard:** Dashboard dengan assertion testing otomatis berbasis Python.
4. **Data Pipeline Showcase Section:**
   - Visualisasi alur data 5 format mentah (`CSV`, `JSON`, `XLSX`, `SQLite`, `Parquet`) menuju checklist kelulusan audit (*Grain check, PK/FK, PII Masked*).
5. **Experience & Skills Matrix:**
   - Pengalaman magang BPS Kabupaten Kepulauan Seribu (pengelolaan data statistik publikasi & sistem SIMPONI MySQL).
   - Matriks keahlian terstruktur (Python, SQL, DuckDB, pandas, Data Quality, Plotly, dll.).
6. **Education & Certifications:**
   - B.Eng. Sistem Telekomunikasi UPI (IPK 3.79) dan 4 sertifikasi profesional resmi.
7. **Contact & Social Actions:**
   - Tautan langsung ke Email (`nusaibahfath@gmail.com`), LinkedIn (`linkedin.com/in/nusaibahfathulj`), dan WhatsApp (`+62 878-1624-5491`).
   - Tombol *Download Resume* yang terhubung langsung ke file [cv_nusaibah.pdf](public/cv_nusaibah.pdf).
8. **Dark Mode & Aksesibilitas:**
   - Tombol toggle tema (Light / Dark mode) tersimpan otomatis di `localStorage`.
   - Dukungan `@media (prefers-reduced-motion: reduce)` bagi pengguna yang sensitif terhadap animasi.

---

## 📁 Struktur Repositori

```text
portfolio_data_analyst/
├── app.vue                        # Root layout aplikasi Nuxt 3
├── nuxt.config.ts                 # Konfigurasi Nuxt 3 & font loader
├── tailwind.config.js             # Konfigurasi Tailwind dengan token design system
├── package.json                   # Script & dependensi proyek
├── .gitignore                     # Aturan git ignore
├── index.html                     # Standalone HTML/CSS/JS (bisa dibuka langsung tanpa server)
├── assets/
│   ├── css/
│   │   └── main.css               # Tailwind directives, CSS variables, dan keyframe animasi
│   └── cv_nusaibah.pdf            # Berkas CV asli
├── components/
│   ├── Navbar.vue                 # Header bar, logo, link navigasi, dark mode toggle, resume CTA
│   ├── HeroSection.vue            # Hero banner, copywriter teks, cluster widget metrik & maskot
│   ├── KpiStrip.vue               # 4 kartu highlight KPI
│   ├── ProjectsBento.vue          # Bento grid proyek utama dengan pemanggil modal studi kasus
│   ├── CaseStudyModal.vue         # Modal pop-up interaktif studi kasus SwiftBite
│   ├── PipelineShowcase.vue       # Showcase visual alur 5 format data NusaMart
│   ├── ExperienceSkills.vue       # Pengalaman kerja BPS dan skills matrix
│   ├── EducationCertifications.vue# Pendidikan UPI dan sertifikasi BNSP/AI
│   ├── ContactSection.vue         # Bagian kontak terpadu (Email, LinkedIn, WhatsApp)
│   └── FooterSection.vue          # Footer hak cipta & tautan repo GitHub
├── public/
│   ├── cv_nusaibah.pdf            # Berkas CV untuk akses langsung publik
│   └── SwiftBite_Dashboard_Final.html # Dashboard interaktif mandiri SwiftBite (4.9 MB)
└── docs/
    └── DESIGN_SYSTEM.md           # Dokumentasi spesifikasi lengkap design system
```

---

## 🛠️ Cara Menjalankan Proyek (Local Development)

Pastikan **Node.js** (v18 ke atas) telah terpasang di komputer Anda.

### 1. Install Dependensi
```bash
npm install
```

### 2. Jalankan Local Development Server
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`.

### 3. Generate Static Site (Siap Deploy ke GitHub Pages / Vercel / Netlify)
```bash
npm run generate
```
Output static build akan tersimpan di folder `.output/public` atau `dist/`.

---

## 🌐 Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi dengan remote repository:
`https://github.com/NusaibahF-IT/portofolio.git`

Langkah push ke GitHub:
```bash
git add .
git commit -m "feat: complete Nuxt 3 portfolio project for Nusaibah Fathul Jannah"
git branch -M main
git push -u origin main
```
