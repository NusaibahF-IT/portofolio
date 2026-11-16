<template>
  <section id="education" class="pt-8">
    <div class="wrap">
      <h2 class="text-center text-tx">
        <span class="inline-block w-2 h-2 rounded-full bg-act mr-2.5 align-middle"></span>
        Education &amp; Certifications
      </h2>

      <div class="edu grid gap-6 grid-cols-1 md:grid-cols-12 mt-10">
        <!-- Big GPA Card (6 cols) -->
        <div class="card big md:col-span-6 bg-sun text-ink shadow-none p-6 rounded-bento flex flex-col justify-center">
          <span class="tiny text-ink/70 block uppercase tracking-wider font-extrabold mb-1">Bachelor Degree</span>
          <b class="text-[44px] font-black tracking-tight block leading-none">GPA 3.79 / 4.00</b>
          <p class="mt-3 font-extrabold text-base text-ink">Bachelor of Telecommunication Systems</p>
          <p class="text-sm font-semibold text-ink/90 mt-0.5">Universitas Pendidikan Indonesia</p>
          <span class="text-xs text-ink/75 block mt-0.5">Aug 2021 – Jan 2025</span>
          
          <div class="mt-4 pt-3 border-t border-ink/15 text-xs text-ink/85 leading-relaxed">
            <strong>Thesis:</strong> IoT Based Smart Door Selector for Double Security: Integration of RFID and Blynk App for an Economical Solution 
            <span class="block mt-1">
              (published in <em>Eduvest Journal, 2025</em>, 
              <a 
                href="https://doi.org/10.59188/eduvest.v4i10.39011" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="underline font-bold hover:opacity-80"
              >
                https://doi.org/10.59188/eduvest.v4i10.39011 ↗
              </a>)
            </span>
          </div>
        </div>

        <!-- Certifications Card (6 cols) -->
        <div class="card cert md:col-span-6 p-6 rounded-bento grid gap-3.5">
          <span class="tiny opacity-70 block uppercase tracking-wider font-extrabold mb-1 text-tx">Certifications</span>
          
          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx">Bootcamp Data Analyst With AI</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">Ioda Academy X Plan Indonesia (2026)</span>
          </div>

          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx">Asisten Pengembangan Web</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">BNSP Sertifikat Kompetensi (2026-2029)</span>
          </div>

          <div class="pb-3 border-b border-line">
            <b class="text-sm font-bold text-tx">Maganghub Certificate Computer Operator Assistant</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">BPS Kabupaten Kepulauan Seribu (2026)</span>
          </div>

          <div>
            <b class="text-sm font-bold text-tx">Meta Front-End Developer</b>
            <span class="text-xs opacity-75 block mt-0.5 text-tx">Meta, Coursera (2024)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
