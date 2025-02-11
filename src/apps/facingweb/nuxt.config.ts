// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  extends: ['fin-ready', 'mdul-category', 'mdul-products', 'mdul-camp', 'mdul-membership' , 'mdul-hostapp', 'mdul-register', 'mdul-officerapp'],

  nitro: {
    prerender: {
      routes: ['/', '/docs', '/docs/getting-started', '/camp', '/membership'],
      crawlLinks: false,
    },
  },

  runtimeConfig: {
    // apiServer: {
    //   baseURL: 'http://localhost:3086',
    // },
    liveSync: {
      ablyKey: 'NUXT_LIVE_SYNC_ABLY_KEY',
    },
  },

  routeRules: {
    '/api/fin-app/**': {
      proxy: 'http://20.247.175.13:3086/api/fin-app/**',
    },
  },

});
