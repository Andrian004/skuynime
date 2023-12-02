// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Skuynime",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "anime website" },
      ],
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.BASE_URL,
    },
  },

  devtools: { enabled: true },

  devServer: {
    port: 3001,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
});
