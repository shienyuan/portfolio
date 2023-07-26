// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/tailwindcss',
      {
        config: {
          theme: {
            fontFamily: {
              sans: ['Poppins', 'sans-serif'],
              serif: ['Lora', 'serif'],
            },
          },
        },
      },
    ],
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
          Poppins: true,
          Lora: true,
          download: true,
          inject: true,
        },
      },
    ],
    [
      '@nuxt/image',
      {
        quality: 80,
      },
    ],
    [
      'nuxt-gtag',
      {
        id: 'G-6K7PHF2ZL0',
      },
    ],
  ],
})
