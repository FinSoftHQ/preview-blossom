// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  extends: ['fin-ready', 'mdul-category', 'mdul-products'],

  nitro: {
    prerender: {
      routes: ['/', '/docs', '/docs/getting-started'],
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
});
