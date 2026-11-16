<template>
  <div class="wrap" id="pipe-section">
    <div
      ref="pipeEl"
      id="pipe"
      class="pipe mt-24"
      :class="{ 'go': isIntersecting }"
    >
      <h2 class="max-w-[20ch] text-ink">Five formats in. One table that passes every check.</h2>
      <p class="lead text-ink mt-3">How the NusaMart pipeline treats each source before a single chart is drawn.</p>

      <div class="lane grid gap-6 mt-10 grid-cols-1 md:grid-cols-12 items-center">
        <!-- 5 Sources -->
        <div class="srcs md:col-span-5 flex flex-wrap gap-2.5">
          <span class="src" style="--i:0">orders.csv</span>
          <span class="src" style="--i:1">events.json</span>
          <span class="src" style="--i:2">budget.xlsx</span>
          <span class="src" style="--i:3">stores.sqlite</span>
          <span class="src" style="--i:4">sales.parquet</span>
        </div>

        <!-- Animated Arrow -->
        <div class="arrow md:col-span-2 hidden md:block"></div>

        <!-- Output Validation Box -->
        <div class="out md:col-span-5">
          <div>Grain check <i>pass</i></div>
          <div>PK/FK integrity <i>pass</i></div>
          <div>PII masked <i>pass</i></div>
          <div>Rerun, no code edits <i>pass</i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const pipeEl = ref(null)
const isIntersecting = ref(false)
let observer = null

onMounted(() => {
  if (pipeEl.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersecting.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(pipeEl.value)
  } else {
    isIntersecting.value = true
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

