// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    [
      'nuxt-headlessui',
      {
        prefix: 'HL',
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          download: true,
          inject: true,
        },
      },
    ],
    [
      '@nuxt/image',
      {
        quality: 80,
        provider: 'netlify',
      },
    ],
  ],
})
