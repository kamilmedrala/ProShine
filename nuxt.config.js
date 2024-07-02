export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  googleAnalytics: {
    id: 'G-J7B0YMGL2Y', //process.env.GOOGLE_ANALYTICS_ID,
    useGtag: true,
    enabled: false,
    debug: {
      sendHitTask: true
    },
    autoTracking: {
      screenview: true
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'PRO SHINE - Detailing Skrzyszów. Przywróć swój samochód do stanu salonowego! Auto-detailing, regeneracja reflektorów, powłoki ceramiczne, pranie wnętrz, ozonowanie, przygotowania przed sprzedarzą i wiele innych! ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-composition-api', mode: 'server' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@abbo/nuxt-google-analytics',
    'nuxt-compress'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  image: {
    domains: ['https://api.proshinedetailing.pl/'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
    },
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
}
