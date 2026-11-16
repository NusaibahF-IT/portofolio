<template>
  <section id="education" class="pt-8">
    <div class="wrap">
      <h2 class="text-center text-tx">
        <span class="inline-block w-2 h-2 rounded-full bg-act mr-2.5 align-middle"></span>
        Education &amp; Certifications
      </h2>

      <div class="edu grid gap-6 grid-cols-1 md:grid-cols-12 mt-10">
        <!-- Big GPA Card (6 cols) -->
        <div class="card big md:col-span-6 bg-card text-tx border border-line shadow-soft p-6 md:p-7 rounded-bento flex flex-col justify-center">
          <div class="flex items-center justify-between gap-3">
            <span class="sticker tiny">Education</span>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-act/15 text-tx border border-act/40">
              Aug 2021 – Jan 2025
            </span>
          </div>

          <div class="mt-4">
            <span class="text-xs opacity-70 uppercase tracking-wider font-extrabold block text-tx">Academic Achievement</span>
            <b class="text-[38px] md:text-[44px] font-black tracking-tight block leading-tight text-tx mt-1">
              GPA 3.79 / 4.00
            </b>
          </div>

          <p class="mt-2.5 font-extrabold text-base md:text-lg text-tx">
            Bachelor of Telecommunication Systems
          </p>
          <p class="text-sm font-semibold text-tx/85 mt-0.5">
            Universitas Pendidikan Indonesia
          </p>
          
          <div class="mt-4 pt-3 border-t border-line text-xs text-tx/85 leading-relaxed bg-canvas p-3.5 rounded-xl border border-line/60">
            <strong class="text-tx font-bold">Thesis:</strong> IoT Based Smart Door Selector for Double Security: Integration of RFID and Blynk App for an Economical Solution 
            <span class="block mt-1">
              (published in <em>Eduvest Journal, 2025</em>, 
              <a 
                href="https://doi.org/10.59188/eduvest.v4i10.39011" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-act font-bold hover:underline"
              >
                https://doi.org/10.59188/eduvest.v4i10.39011 ↗
              </a>)
            </span>
          </div>
        </div>

        <!-- Certifications Card (6 cols) -->
        <div class="card cert md:col-span-6 bg-card text-tx border border-line shadow-soft p-6 md:p-7 rounded-bento grid gap-3.5">
          <div class="flex items-center justify-between pb-1">
            <span class="sticker tiny">Certifications</span>
            <span class="text-xs opacity-70 text-tx">4 Official Credentials</span>
          </div>
          
          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx block">Bootcamp Data Analyst With AI</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">Ioda Academy X Plan Indonesia (2026)</span>
          </div>

          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx block">Asisten Pengembangan Web</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">BNSP Sertifikat Kompetensi (2026-2029)</span>
          </div>

          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx block">Maganghub Certificate Computer Operator Assistant</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">BPS Kabupaten Kepulauan Seribu (2026)</span>
          </div>

          <div>
            <b class="text-sm font-bold text-tx block">Meta Front-End Developer</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">Meta, Coursera (2024)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
