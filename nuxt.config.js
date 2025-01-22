export default defineNuxtConfig({
  target: 'static',
  
  gtag: {
    initMode: 'manual',
    id: 'G-J7B0YMGL2Y', //process.env.GOOGLE_ANALYTICS_ID,
  },

  app:{
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxt/image', // '@abbo/nuxt-google-analytics',
    '@nuxtjs/tailwindcss', // 'nuxt-compress',
    'nuxt-swiper',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    'nuxt-vitalizer'
  ],

  image: {
    domains: ['api.proshinedetailing.pl','https://api.proshinedetailing.pl/'],
    alias: {
      proshine: 'https://api.proshinedetailing.pl',
    },
    provider: 'ipx',
    ipx: {
      modifiers: {
        format: 'webp',
        quality: 80,
      }
    },
    format: ["webp"],
    quality: 80,
  },

  googleFonts: {
    download: true,
    inject: true,
    families: {
      Mulish: [200, 400, 600, 700],
      Newsreader: [300],
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },

  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  experimental: {
    payloadExtraction: true,
    sharedPrerenderData: true,
    // defaults: {
    //   nuxtLink: {
    //     prefetchOn: {
    //       visibility: false,
    //       interaction: true,
    //     },
    //   },
    // },
  },

  vitalizer: {
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
    disableStylesheets: 'entry',
  },

  vite: {
    build: {
      modulePreload: false,
    },
  },

  compatibilityDate: '2024-12-21',
})
