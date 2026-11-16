<template>
  <header
    id="hd"
    class="fixed top-0 left-0 right-0 z-50 transition-shadow duration-200"
    :class="{ 'shadow-header bg-canvas/95 backdrop-blur-sm': isScrolled, 'bg-canvas': !isScrolled }"
  >
    <div class="wrap flex items-center gap-5 h-[56px]">
      <a class="logo font-black text-base tracking-wider uppercase mr-auto text-tx hover:opacity-80 transition-opacity" href="#top">
        NJ
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-6 text-tx">
        <a class="nav-link text-[13px] font-medium opacity-80 hover:opacity-100 transition-opacity" href="#projects">Projects</a>
        <a class="nav-link text-[13px] font-medium opacity-80 hover:opacity-100 transition-opacity" href="#experience">Experience</a>
        <a class="nav-link text-[13px] font-medium opacity-80 hover:opacity-100 transition-opacity" href="#skills">Skills</a>
        <a class="nav-link text-[13px] font-medium opacity-80 hover:opacity-100 transition-opacity" href="#education">Education</a>
        <a class="nav-link text-[13px] font-medium opacity-80 hover:opacity-100 transition-opacity" href="#contact">Contact</a>
      </nav>

      <!-- Dark Mode Toggle -->
      <button
        @click="toggleTheme"
        class="p-2 rounded-full border border-line text-tx hover:bg-card transition-colors flex items-center justify-center w-8 h-8 text-xs"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        aria-label="Toggle theme"
      >
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>

      <!-- Download Resume Button -->
      <a
        class="btn p text-xs md:text-[13px]"
        href="/cv_nusaibah.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="CV_Nusaibah_Fathul_Jannah.pdf"
      >
        Download Resume
      </a>

      <!-- Contact Button -->
      <a class="btn o hidden sm:inline-flex" href="#contact">
        Contact
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isDark = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // Initialize theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  position: relative;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--act);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.15s ease-out;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
