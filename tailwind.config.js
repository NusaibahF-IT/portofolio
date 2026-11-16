/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg)',
        card: 'var(--card)',
        tx: 'var(--tx)',
        field: 'var(--field)', // #3FDF9F
        act: 'var(--act)',     // #00D26A
        sun: 'var(--sun)',     // #F8C33A
        mag: 'var(--mag)',     // #F108B0
        ink: 'var(--ink)',     // #21281B
        line: 'var(--line)'
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        soft: 'var(--sh)',
        sticker: '2px 2px 0 var(--ink)',
        header: '0 4px 18px rgba(33,40,27,.1)'
      },
      borderRadius: {
        bento: '16px',
        pipe: '60px 100px 60px 100px',
        capsule: '999px'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
  },
  plugins: []
}
