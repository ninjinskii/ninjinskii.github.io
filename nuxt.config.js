import { version } from "./package.json";

module.exports = {
  target: "static",
  ssr: false,
  components: true,
  dev: process.env.NODE_ENV !== "production",
  publicRuntimeConfig: {
    VERSION: version,
  },
  head: {
    title: "Bailly Louis | Portfolio",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Bailly Louis's portfolio",
      },
    ],
    link: [{ rel: "favicon", type: "image/x-icon", href: "favicon.ico" }],
  },
  loading: { color: "#ffffff" },
  css: [{ src: "@/assets/css/main.css" }],
  // plugins
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios"],
  buildModules: ["@nuxtjs/vuetify"],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.js" },
      { code: "fr", iso: "fr-FR", file: "fr-FR.js" },
    ],
    strategy: "no_prefix",
    defaultLocale: "fr",
    lazy: true,
    langDir: "lang/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    seo: false,
  },
  vuetify: {
    defaultAssets: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          error: "#FB8C00",
        },
      },
    },
  },
};
