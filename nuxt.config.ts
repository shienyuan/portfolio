// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    [
      'nuxt-headlessui', {
        prefix: 'HL'
      }
    ],
    [
      '@nuxtjs/google-fonts', {
        families: {
          Nunito: true,
          download: true,
          inject: true
        }
      }]
  ]
})
