// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "nuxt-vuefire",
  ],
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: "",
    /**
     * Directory that the components live in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Source+Serif+4:opsz@8..60&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,800&family=Inter:wght@400;500;600;700&family=Noto+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700;900&family=Raleway:wght@400;800&family=Rubik:wght@400;500;700;800&display=swap",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
    },
  },
  css: ["@/assets/css/main.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import './assets/css/theme.less';`,
        },
      },
    },
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyClEeSJnjwx_nfsaGiA1pTs4XsMLnbmr7c",
      authDomain: "ezer-dev.firebaseapp.com",
      projectId: "ezer-dev",
      storageBucket: "ezer-dev.firebasestorage.app",
      messagingSenderId: "269482856850",
      appId: "1:269482856850:web:efca1678e7cf4d212d714b",
      measurementId: "G-0NMVD71REG",
    },
    auth: {
      enabled: true,
    },
  },
});
