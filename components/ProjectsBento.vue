<template>
  <section id="projects">
    <div class="wrap">
      <!-- Section Intro -->
      <div class="intro text-center">
        <h2 class="text-tx">
          <span class="inline-block w-2 h-2 rounded-full bg-act mr-2.5 align-middle"></span>
          Three projects, each reconciled to the raw data
        </h2>
        <p class="max-w-[380px] mx-auto mt-4 opacity-80 text-tx text-sm">
          Every dashboard and pipeline below ships with checks that prove its totals.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="bento grid gap-6 mt-12 grid-cols-1 md:grid-cols-12">
        <!-- Flagship Project: SwiftBite (7 cols, spans 2 rows) -->
        <article class="card flag md:col-span-7 md:row-span-2 relative">
          <span class="sticker tiny absolute right-4 top-[-14px]">Flagship capstone</span>
          <h3 class="text-[22px] font-extrabold text-ink">SwiftBite — Business Performance &amp; Operational Delivery Analytics</h3>
          <p class="mini text-ink/90 mt-2.5 text-[13px]">
            Audit of an on-demand food delivery platform: 320 unique transactions and 190 customer reviews across 5 city zones (Q1 2026).
          </p>

          <ul class="pl-4 my-4 grid gap-2.5 text-[13px] text-ink list-disc">
            <li>
              <strong>Loyal Segment Dominance:</strong> Top revenue pillar contributing 27.55% of Net Payment (IDR 10.47M) with the highest average spend of IDR 126,229 per order.
            </li>
            <li>
              <strong>Operational Bottleneck:</strong> Fast Food category suffered a 39.58% late delivery rate (overall: 28.47%) with extreme delivery delays reaching up to 55 minutes.
            </li>
            <li>
              <strong>Customer Sentiment Impact:</strong> 30% of Fast Food reviews are negative, with recurring customer complaints citing cold food and spilled packaging.
            </li>
          </ul>

          <p class="mini text-ink/85 text-[13px] mt-2">
            <strong>Deliverable:</strong> Standalone 4.9 MB interactive Plotly/HTML dashboard with 5 validated scenario filters and 0% discrepancy against raw data.
          </p>

          <!-- Tech Chips -->
          <div class="mt-4 flex flex-wrap">
            <span class="chip">Python</span>
            <span class="chip">pandas</span>
            <span class="chip">DuckDB</span>
            <span class="chip">Plotly</span>
            <span class="chip">HTML</span>
            <span class="chip">Data Pipeline</span>
          </div>

          <!-- Action Buttons -->
          <div class="acts flex gap-2.5 flex-wrap mt-5">
            <a class="btn p" href="/SwiftBite_Dashboard_Final.html" target="_blank" rel="noopener noreferrer">
              Live Dashboard ↗
            </a>
            <button class="btn o" @click="$emit('open-case-study')">
              Case Study Summary ↗
            </button>
            <a class="btn o" href="https://github.com/NusaibahF-IT/portofolio.git" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </article>

        <!-- Project 2: NusaMart Multi-Source ETL Pipeline (5 cols) -->
        <article class="card md:col-span-5 relative">
          <h3 class="text-lg font-extrabold text-tx">NusaMart — Safe &amp; Reproducible Multi-Source ETL Pipeline</h3>
          <p class="mini text-tx/85 text-[13px] mt-2.5">
            Automated pipeline integrating CSV, JSON, Excel, SQLite and Parquet into a unified analytical dataset. Enforces primary/foreign key reconciliation, masks PII (names, emails, phones), and reruns across historical periods without code changes.
          </p>
          <div class="mt-4 flex flex-wrap">
            <span class="chip">Python</span>
            <span class="chip">pandas</span>
            <span class="chip">SQL/DuckDB</span>
            <span class="chip">SQLite</span>
            <span class="chip">Parquet</span>
            <span class="chip">Data Quality</span>
          </div>
          <div class="acts flex gap-2.5 flex-wrap mt-4">
            <a class="btn p" href="#pipe">
              Pipeline Architecture ↗
            </a>
            <a class="btn o" href="/NusaMart_Reusability_Audit_Report.html" target="_blank" rel="noopener noreferrer">
              Audit Trail ↗
            </a>
          </div>
        </article>

        <!-- Project 3: NusaMart BI Dashboard with Automated Python Testing (5 cols) -->
        <article class="card md:col-span-5 relative">
          <h3 class="text-lg font-extrabold text-tx">NusaMart — BI Dashboard with Automated Python Testing</h3>
          <p class="mini text-tx/85 text-[13px] mt-2.5">
            Interactive multi-metric e-commerce retail dashboard whose KPI aggregations are mathematically checked by assertion-based Python tests, eliminating manual reconciliation. Tested across 5+ filter scenarios.
          </p>
          <div class="mt-4 flex flex-wrap">
            <span class="chip">Python</span>
            <span class="chip">Plotly</span>
            <span class="chip">Automated Assertions</span>
            <span class="chip">HTML</span>
          </div>
          <div class="acts flex gap-2.5 flex-wrap mt-4">
            <a class="btn p" href="/NusaMart_Dashboard_Final.html" target="_blank" rel="noopener noreferrer">
              View BI Dashboard ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-case-study'])
</script>
