// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Nusaibah Fathul Jannah — Data Analyst',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: 'Portfolio of Nusaibah Fathul Jannah — Data Analyst specializing in Python, SQL, multi-source data integration, rigorous data quality auditing, and interactive dashboard development.'
        },
        { name: 'theme-color', content: '#3FDF9F' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  }
})
