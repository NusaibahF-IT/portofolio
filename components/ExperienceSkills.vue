<template>
  <section id="experience" class="pt-8">
    <div class="wrap two grid gap-12 grid-cols-1 md:grid-cols-12 items-start">
      <!-- Experience Card (5 cols) -->
      <div class="card exp md:col-span-5 bg-card text-tx border border-line shadow-soft relative p-6 md:p-7 rounded-bento">
        <div class="flex items-center justify-between gap-3">
          <span class="sticker tiny">Experience</span>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-sun/20 text-tx border border-sun/40">
            Dec 2025 – Jun 2026
          </span>
        </div>

        <h3 class="mt-4 font-extrabold text-lg md:text-xl text-tx leading-snug">
          Computer Operator Assistant Intern
        </h3>
        <p class="mt-1 font-bold text-sm text-tx/90">
          Badan Pusat Statistik (BPS) Kabupaten Kepulauan Seribu
        </p>

        <ul class="pl-4 mt-4 grid gap-2.5 text-xs list-disc text-tx/85 leading-relaxed">
          <li>Prepared, organized, and managed statistical data to support institutional publications and reporting, including statistical news releases and regional statistical reports.</li>
          <li>Developed <strong>SIMPONI</strong>, a web-based budget and honorarium monitoring system, integrating structured data management using MySQL.</li>
          <li>Designed data monitoring features to support budget tracking, reporting, and information accessibility.</li>
          <li>Created data-driven infographics to communicate statistical findings through institutional publications.</li>
          <li>Supported IT operations, computer systems, and technical troubleshooting to maintain institutional workflows.</li>
        </ul>

        <!-- Mascot 2 SVG -->
        <svg class="m2 absolute right-[-10px] bottom-[-34px] w-[84px] rotate-6 pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="55" r="36" fill="#3FDF9F"/>
          <circle cx="38" cy="50" r="4" fill="#21281B"/>
          <circle cx="62" cy="50" r="4" fill="#21281B"/>
          <path d="M40 66Q50 72 60 66" stroke="#21281B" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M36 22Q42 6 50 20Q58 6 64 22" stroke="#21281B" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Skills Matrix (7 cols) -->
      <div id="skills" class="sk md:col-span-7 grid gap-5">
        <h2 class="text-tx">
          <span class="inline-block w-2 h-2 rounded-full bg-act mr-2.5 align-middle"></span>
          Skills
        </h2>

        <div>
          <h3 class="text-sm font-extrabold text-tx mb-2">Programming &amp; Query</h3>
          <div class="flex flex-wrap">
            <span class="chip">Python</span>
            <span class="chip">SQL</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-extrabold text-tx mb-2">Databases</h3>
          <div class="flex flex-wrap">
            <span class="chip">MySQL</span>
            <span class="chip">SQLite</span>
            <span class="chip">DuckDB</span>
          </div>
        </div>

        <div class="y">
          <h3 class="text-sm font-extrabold text-tx mb-2">Python Libraries &amp; Data Analysis</h3>
          <div class="flex flex-wrap">
            <span class="chip bg-sun/20 text-tx border-sun/50 font-bold">pandas</span>
            <span class="chip bg-sun/20 text-tx border-sun/50 font-bold">NumPy</span>
            <span class="chip bg-sun/20 text-tx border-sun/50 font-bold">Data Profiling</span>
            <span class="chip bg-sun/20 text-tx border-sun/50 font-bold">Data Cleaning &amp; Wrangling</span>
            <span class="chip bg-sun/20 text-tx border-sun/50 font-bold">Multi-source Data Integration</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-extrabold text-tx mb-2">Data Quality &amp; Governance</h3>
          <div class="flex flex-wrap">
            <span class="chip">Grain Check</span>
            <span class="chip">Primary Key &amp; Foreign Key Integrity</span>
            <span class="chip">PII Anonymization</span>
            <span class="chip">Cleaning Rulebook</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-extrabold text-tx mb-2">Data Visualization &amp; Web</h3>
          <div class="flex flex-wrap">
            <span class="chip">Power BI (DAX)</span>
            <span class="chip">Interactive Dashboards (Plotly/HTML)</span>
            <span class="chip">Data Storytelling</span>
            <span class="chip">Infographics</span>
            <span class="chip">HTML/CSS</span>
            <span class="chip">JavaScript</span>
            <span class="chip">Basic React</span>
            <span class="chip">PHP</span>
            <span class="chip">Figma</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-extrabold text-tx mb-2">Tools &amp; Formats</h3>
          <div class="flex flex-wrap">
            <span class="chip">Jupyter Notebook</span>
            <span class="chip">Git</span>
            <span class="chip">Microsoft Office (Excel)</span>
            <span class="chip">Linux (Ubuntu)</span>
            <span class="chip">VS Code</span>
            <span class="chip">CSV</span>
            <span class="chip">JSON</span>
            <span class="chip">XLSX</span>
            <span class="chip">Parquet</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
