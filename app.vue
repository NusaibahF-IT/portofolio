<template>
  <div class="min-h-screen bg-canvas text-tx transition-colors duration-200">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main id="top">
      <HeroSection />
      <KpiStrip />
      <ProjectsBento @open-case-study="isCaseStudyOpen = true" />
      <PipelineShowcase />
      <ExperienceSkills />
      <EducationCertifications />
      <ContactSection />
    </main>

    <!-- Footer Component -->
    <FooterSection />

    <!-- Interactive Case Study Modal Pop-up -->
    <CaseStudyModal
      :is-open="isCaseStudyOpen"
      @close="isCaseStudyOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isCaseStudyOpen = ref(false)
</script>
