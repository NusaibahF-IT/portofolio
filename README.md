# Nusaibah Fathul Jannah — Data Analyst Portfolio

Website portofolio profesional untuk **Nusaibah Fathul Jannah**, seorang Data Analyst dengan gelar Sarjana Sistem Telekomunikasi dari Universitas Pendidikan Indonesia (IPK 3.79/4.00), pengalaman magang di Badan Pusat Statistik (BPS) Kabupaten Kepulauan Seribu, dan sertifikasi resmi BNSP serta AI Data Analyst Bootcamp.

Proyek ini dibangun menggunakan **Nuxt 3** dan **Tailwind CSS** dengan filosofi desain **Playful Modern Data Professionalism** (Bento Grid, Micro Data Widgets, Neo-Brutalist Badges, dan Interaktivitas Responsif).

---

## 🚀 Fitur & Integrasi Proyek Portofolio

1. **Hero Section dengan Interactive Data Widgets:**
   - Visualisasi mikro metrik data (*Q1 GMV IDR 41.57M+*, *Progress Ring Meter 100%*, *Mini Bar Chart*, *Formats Merged 5*).
   - Animasi vektor maskot interaktif dan SVG organic background blob (*breathe animation*).
2. **KPI Strip Bar:**
   - 4 kartu metrik kuantitatif: `IDR 41.57M+ GMV`, `100% Grain Integrity`, `5 Formats Consolidated`, dan `BPS + BNSP Certified`.
3. **Projects Bento Grid (Tiga Proyek dengan Referensi Langsung):**
   - **SwiftBite Capstone Project:**
     - *Live Dashboard ↗*: Membuka langsung dashboard interaktif standalone Plotly/HTML (`SwiftBite_Dashboard_Final.html`).
     - *Case Study Summary ↗*: Membuka **Modal Pop-Up Interaktif** berisi ringkasan eksekutif, integritas pipeline join, 3 temuan kunci bisnis (Loyal segment 27.55%, Fast Food delay 39.58%, ulasan negatif 30%), serta target rekomendasi Q2 2026.
     - *GitHub ↗*: Repositori proyek.
   - **NusaMart Multi-Source ETL Pipeline:**
     - *Pipeline Architecture ↗*: Menavigasi ke visualisasi alur integrasi 5 format data.
     - *Audit Trail ↗*: Membuka langsung **Laporan Audit Reproducibility & Uji Stres 5 Skenario** (`NusaMart_Reusability_Audit_Report.html`).
   - **NusaMart BI Dashboard with Automated Python Testing:**
     - *View BI Dashboard ↗*: Membuka langsung **Dashboard Interaktif Retail E-Commerce NusaMart** (`NusaMart_Dashboard_Final.html`).
4. **Data Pipeline Showcase Section:**
   - Visualisasi interaktif alur 5 format data mentah (`orders.csv`, `events.json`, `budget.xlsx`, `stores.sqlite`, `sales.parquet`) menuju checklist kelulusan audit (*Grain check, PK/FK, PII Masked, Rerun pass*).
5. **Experience Section (100% Sesuai CV):**
   - **Computer Operator Assistant Intern** di **Badan Pusat Statistik (BPS) Kabupaten Kepulauan Seribu** (Dec 2025 – Jun 2026):
     - Pengelolaan data statistik untuk publikasi resmi (berita resmi statistik & laporan statistik daerah).
     - Pengembangan sistem pemantauan honorarium & anggaran berbasis web **SIMPONI** menggunakan MySQL.
     - Perancangan fitur monitoring data untuk pelacakan anggaran dan aksesibilitas informasi.
     - Pembuatan infografis data untuk rilis publikasi institusional.
     - Dukungan operasional IT, sistem komputer, dan troubleshooting teknis.
6. **Skills Matrix (Lengkap Sesuai CV):**
   - Programming & Query: Python, SQL
   - Databases: MySQL, SQLite, DuckDB
   - Python Libraries & Analytics: pandas, NumPy, Data Profiling, Wrangling, Multi-source Integration
   - Data Quality: Grain Check, PK/FK Integrity, PII Anonymization, Cleaning Rulebook
   - Data Visualization & Web: Plotly/HTML Dashboards, Data Storytelling, Infographics, HTML/CSS, JavaScript, Basic React, PHP, Figma
   - Tools & Formats: Jupyter Notebook, Git, Excel, Linux (Ubuntu), VS Code, CSV, JSON, XLSX, Parquet
7. **Education & Certifications (100% Sesuai CV):**
   - **Universitas Pendidikan Indonesia (Aug 2021 – Jan 2025):**
     - Bachelor of Telecommunication Systems (IPK 3.79 / 4.00)
     - Skripsi: *IoT Based Smart Door Selector for Double Security: Integration of RFID and Blynk App for an Economical Solution* (Diterbitkan di Eduvest Journal 2025, DOI: [10.59188/eduvest.v4i10.39011](https://doi.org/10.59188/eduvest.v4i10.39011))
   - **Sertifikasi Resmi:**
     - Bootcamp Data Analyst With AI – Ioda Academy X Plan Indonesia (2026)
     - Asisten Pengembangan Web – BNSP Sertifikat Kompetensi (2026-2029)
     - Maganghub Certificate Computer Operator Assistant – BPS Kabupaten Kepulauan Seribu (2026)
     - Meta Front-End Developer – Meta, Coursera (2024)
8. **Contact & Social Actions:**
   - Email: `nusaibahfath@gmail.com`
   - LinkedIn: `https://www.linkedin.com/in/nusaibahfathulj`
   - WhatsApp: `+62 878-1624-5491`
   - Unduh CV: `cv_nusaibah.pdf`

---

## 📁 Struktur Repositori

```text
portfolio_data_analyst/
├── app.vue                                # Root layout aplikasi Nuxt 3
├── nuxt.config.ts                         # Konfigurasi Nuxt 3 & font loader
├── tailwind.config.js                     # Konfigurasi Tailwind dengan token design system
├── package.json                           # Script & dependensi proyek
├── .gitignore                             # Aturan git ignore
├── index.html                             # Standalone HTML/CSS/JS (dapat langsung dibuka di browser)
├── assets/
│   ├── css/
│   │   └── main.css                       # Tailwind directives, CSS variables, dan keyframe animasi
│   └── cv_nusaibah.pdf                    # Berkas CV asli
├── components/
│   ├── Navbar.vue                         # Header, nav links, dark mode toggle, resume download
│   ├── HeroSection.vue                    # Hero banner, cluster widget data & maskot vektor
│   ├── KpiStrip.vue                       # 4 kartu highlight KPI
│   ├── ProjectsBento.vue                  # Bento grid 3 proyek dengan referensi dashboard & audit masing-masing
│   ├── CaseStudyModal.vue                 # Modal pop-up interaktif studi kasus SwiftBite
│   ├── PipelineShowcase.vue               # Visualisasi alur 5 format data NusaMart
│   ├── ExperienceSkills.vue               # Pengalaman BPS & skills matrix lengkap
│   ├── EducationCertifications.vue        # Pendidikan UPI (Thesis DOI) & 4 sertifikasi resmi
│   ├── ContactSection.vue                 # Kontak terpadu (Email, LinkedIn, WhatsApp)
│   └── FooterSection.vue                  # Footer hak cipta & tautan repo GitHub
├── public/
│   ├── cv_nusaibah.pdf                    # Berkas CV untuk tombol Download Resume
│   ├── SwiftBite_Dashboard_Final.html     # Dashboard interaktif SwiftBite Capstone (5.6 MB)
│   ├── NusaMart_Dashboard_Final.html      # Dashboard interaktif NusaMart BI (4.7 MB)
│   └── NusaMart_Reusability_Audit_Report.html # Laporan Audit Trail Reusability NusaMart (6.4 KB)
└── docs/
    └── DESIGN_SYSTEM.md                   # Dokumentasi spesifikasi lengkap design system
```

---

## 🛠️ Cara Menjalankan Proyek (Local Development)

```bash
cd /Users/mac/Downloads/Bootcamp_Data_Analyst/portfolio_data_analyst
npm install
npm run dev
```
Aplikasi dapat diakses di `http://localhost:3000`.

Untuk generate build statis (siap deploy ke GitHub Pages / Vercel):
```bash
npm run generate
```
Output tersimpan di `.output/public` atau `dist/`.

---

## 🌐 Deploy ke GitHub

Remote repository: `https://github.com/NusaibahF-IT/portofolio.git`

```bash
git add .
git commit -m "fix: update project reference links, experience and education according to CV"
git push -u origin main
```
