<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm overflow-y-auto"
      @click.self="close"
    >
      <div
        class="bg-card text-tx rounded-bento shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-line p-6 md:p-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-5 right-5 text-tx/60 hover:text-tx hover:bg-canvas p-2 rounded-full transition-colors w-9 h-9 flex items-center justify-center border border-line text-lg"
          aria-label="Close modal"
        >
          ✕
        </button>

        <!-- Eyebrow & Title -->
        <span class="sticker tiny mb-2">Executive Case Study</span>
        <h2 id="modal-title" class="text-2xl md:text-3xl font-black mt-2 text-tx">
          SwiftBite: Q1 2026 Performance &amp; Delivery SLA Audit
        </h2>
        <p class="text-sm opacity-75 mt-1 text-tx">
          End-to-End Analytics on Financial Health, Logistics SLA, and Customer Sentiment
        </p>

        <!-- Divider -->
        <hr class="my-5 border-line" />

        <!-- 1. Executive Context -->
        <div class="space-y-3">
          <h3 class="text-base font-extrabold text-tx flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-act"></span>
            1. Business Context &amp; Objective
          </h3>
          <p class="text-sm text-tx/85 leading-relaxed">
            SwiftBite operates as an on-demand food delivery platform connecting 30 merchants across 5 city zones. In Q1 2026, the platform registered <strong>320 unique transactions</strong> representing <strong>IDR 41.57 Million GMV</strong> (Net Payment: IDR 38.03M). The analytical objective was to evaluate financial viability, identify courier delivery bottlenecks, and assess customer sentiment to derive actionable Q2 2026 recommendations.
          </p>
        </div>

        <!-- 2. Data Pipeline & Integrity -->
        <div class="mt-6 space-y-3">
          <h3 class="text-base font-extrabold text-tx flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-sun"></span>
            2. Pipeline Architecture &amp; Data Integrity
          </h3>
          <div class="bg-canvas p-4 rounded-xl border border-line text-xs font-mono space-y-1.5">
            <div>• Primary Source: <span class="text-act font-bold">swiftbite_pm2_integrated_order_level.csv</span> (320 rows)</div>
            <div>• Review Source: <span class="text-act font-bold">swiftbite_reviews.csv</span> (190 reviews, 59.38% coverage)</div>
            <div>• Relational Grain: <span class="font-bold">100% matched on order_id</span> (0 row duplication, zero PII leakage)</div>
          </div>
        </div>

        <!-- 3. Key Findings -->
        <div class="mt-6 space-y-4">
          <h3 class="text-base font-extrabold text-tx flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-mag"></span>
            3. Three Critical Business Findings
          </h3>

          <div class="grid gap-3">
            <!-- Finding 1 -->
            <div class="p-3.5 bg-canvas rounded-xl border border-line">
              <div class="font-bold text-xs uppercase tracking-wider text-act">BQ-01 · Financial Performance</div>
              <div class="font-extrabold text-sm mt-1 text-tx">Loyal Customers are the Profit Backbone</div>
              <p class="text-xs text-tx/80 mt-1 leading-relaxed">
                The Loyal segment generated <strong>IDR 10.48M (27.55%)</strong> of platform net payment across 83 orders with the highest Average Order Value of <strong>IDR 126,229</strong>. Protecting this group is crucial: a 10% drop in loyalty retention risks over IDR 1M/month in lost revenue.
              </p>
            </div>

            <!-- Finding 2 -->
            <div class="p-3.5 bg-canvas rounded-xl border border-line">
              <div class="font-bold text-xs uppercase tracking-wider text-coral">BQ-02 · Logistics Operations</div>
              <div class="font-extrabold text-sm mt-1 text-tx">Fast Food is the Platform Bottleneck (39.58% Delay)</div>
              <p class="text-xs text-tx/80 mt-1 leading-relaxed">
                Platform-wide late delivery stood at <strong>28.47%</strong> (82/288 valid delivered orders) with an average delay of 15.2 minutes. The Fast Food category suffered the worst breakdown: <strong>39.58% late delivery</strong> and extreme delays up to <strong>55 minutes</strong> (Order O00176).
              </p>
            </div>

            <!-- Finding 3 -->
            <div class="p-3.5 bg-canvas rounded-xl border border-line">
              <div class="font-bold text-xs uppercase tracking-wider text-sun">BQ-03 · Customer Experience</div>
              <div class="font-extrabold text-sm mt-1 text-tx">Delivery Delays Directly Fuel Negative Reviews</div>
              <p class="text-xs text-tx/80 mt-1 leading-relaxed">
                30% of reviews for Fast Food were negative (9/30). Text mining revealed that delayed orders directly led to severe physical complaints: <em>cold food</em> and <em>spilled packaging</em>.
              </p>
            </div>
          </div>
        </div>

        <!-- 4. Recommendations & KPI Targets -->
        <div class="mt-6 space-y-3">
          <h3 class="text-base font-extrabold text-tx flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-field"></span>
            4. Strategic Recommendations &amp; Q2 2026 Targets
          </h3>
          <ol class="list-decimal pl-5 text-xs text-tx/85 space-y-2 leading-relaxed">
            <li>
              <strong>VIP Auto-Dispatch:</strong> Prioritize top-rated couriers (≥4.8) for Loyal customers and issue proactive vouchers if delay exceeds 15 mins. <em>(Target: Loyal retention ≥95%, Net Revenue ≥ IDR 12M)</em>.
            </li>
            <li>
              <strong>Fast Food Order Radius Limit:</strong> Restrict Fast Food delivery radius to maximum 5 km and stage couriers at busy restaurant clusters. <em>(Target: Cut delay rate from 39.6% to &lt;20%)</em>.
            </li>
            <li>
              <strong>Mandatory Insulated Thermal Bags:</strong> Require couriers to carry insulated bags and merchants to apply tamper-evident seals. <em>(Target: Reduce negative reviews to &lt;12%)</em>.
            </li>
          </ol>
        </div>

        <!-- Footer Actions -->
        <div class="mt-8 pt-4 border-t border-line flex flex-wrap gap-3 justify-end items-center">
          <a
            class="btn p text-xs"
            href="/SwiftBite_Dashboard_Final.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Live Interactive Dashboard ↗
          </a>
          <button class="btn o text-xs" @click="close">
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
