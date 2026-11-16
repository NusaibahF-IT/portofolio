<template>
  <section class="hero relative overflow-visible pt-28 pb-36 md:pt-32 md:pb-40">
    <!-- Background SVG Blob -->
    <div class="blob absolute left-[-4vw] right-[-4vw] top-0 h-full z-0 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 760" preserveAspectRatio="none" class="w-full h-full block origin-top" style="animation: breathe 10s ease-in-out infinite;">
        <path fill="#3FDF9F" d="M0 0H1440V560C1440 640 1400 700 1352 700C1304 700 1290 610 1240 610C1190 610 1180 740 1110 740C1040 740 1040 630 980 630C920 630 900 700 840 700C780 700 770 600 700 600C630 600 620 720 550 720C480 720 470 620 400 620C330 620 320 690 260 690C200 690 190 600 130 600C70 600 50 650 0 640Z"/>
      </svg>
    </div>

    <div class="wrap relative z-10 grid gap-10 grid-cols-1 md:grid-cols-12 items-center">
      <!-- Left Column: Intro -->
      <div class="md:col-span-6">
        <span class="tiny text-ink block">Data Analyst · Statistical Insights &amp; End-to-End Analytics Pipelines</span>
        <h1 class="text-ink mt-3.5">
          Nusaibah Fathul Jannah turns messy files into numbers you can sign off on.
        </h1>
        <p class="lead text-ink/85 mt-4 max-w-[44ch]">
          Telecommunication Systems graduate (GPA 3.79/4.00) with hands-on experience at Statistics Indonesia (BPS) and an intensive Data Analyst with AI Bootcamp. Specialized in Python, SQL, multi-source data integration, rigorous data quality auditing, and interactive dashboard development.
        </p>
        <div class="cta flex gap-3 mt-6 flex-wrap">
          <a class="btn p" href="#projects">Explore Case Studies</a>
          <a class="btn w" href="#contact">Contact Me</a>
        </div>
      </div>

      <!-- Right Column: Interactive Data Widgets Cluster -->
      <div class="md:col-span-6 cluster" aria-hidden="true">
        <!-- Widget 1: GMV -->
        <div class="wd w1">
          <span class="tiny opacity-70">Q1 GMV analyzed</span>
          <b>IDR 41.57M+</b>
        </div>

        <!-- Widget 2: Ring Meter -->
        <div class="wd w2">
          <div class="ring">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" fill="#21281B"/>
              <circle class="v" cx="32" cy="32" r="25" fill="none" stroke="#00D26A" stroke-width="6" stroke-linecap="round"/>
            </svg>
            <span>100%</span>
          </div>
        </div>

        <!-- Widget 3: Mini Bar Chart -->
        <div class="wd w3">
          <span class="tiny opacity-70">Late delivery by category</span>
          <div class="bars">
            <i style="height:50%"></i>
            <i style="height:100%"></i>
            <i style="height:38%"></i>
            <i style="height:62%"></i>
            <i style="height:28%"></i>
          </div>
        </div>

        <!-- Widget 4: Formats Merged -->
        <div class="wd w4">
          <span class="tiny opacity-70">Formats merged</span>
          <b>5</b>
        </div>

        <!-- Mascot 1 -->
        <svg class="mascot m1" viewBox="0 0 100 100">
          <ellipse cx="50" cy="58" rx="38" ry="34" fill="#F8C33A"/>
          <path d="M22 34L30 12L44 30Z M78 34L70 12L56 30Z" fill="#F8C33A"/>
          <circle cx="38" cy="54" r="4" fill="#21281B"/>
          <circle cx="62" cy="54" r="4" fill="#21281B"/>
          <path d="M42 68Q50 76 58 68" stroke="#21281B" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  </section>
</template>

