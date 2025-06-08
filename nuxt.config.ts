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

  modules: ["@nuxt/icon"],

  plugins: ["~/plugins/aos.client.ts", "~/plugins/pinia.js"],

  server: {
    port: 3001,
    host: "0.0.0.0", // important pour accès externe
  },

  // 👇 C’est cette partie qui résout ton erreur
  nitro: {
    externals: {
      inline: ['mysql2']
    }
  }
});
