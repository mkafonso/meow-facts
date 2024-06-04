// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/test-utils/module",
  ],

  googleFonts: {
    display: "swap",
    families: {
      Jost: true,
    },
  },
});
