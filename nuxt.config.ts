// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@unocss/nuxt", "nuxt-font-loader"],
  fontLoader: {
    local: [
      {
        src: "fonts/HuaKangTiFan.otf",
        family: "HuaKangTi",
        class: "font-huakangti",
      },
    ],
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Sigmar&display=swap",
        family: "Sigmar",
        class: "font-sigmar",
      },
    ],
  },
  css: ["~/assets/style/main.scss"],
});
