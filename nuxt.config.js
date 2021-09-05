import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "愛知工業大学 システム工学研究会",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "ALL" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@set_official" },
      { name: "twitter:creator", content: "@set_official" },
      {
        name: "twitter:title",
        content: "愛知工業大学 システム工学研究会についての情報など",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "愛知工業大学 システム工学研究会",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://set1.ie.aitech.ac.jp/",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://set1.ie.aitech.ac.jp/img/set_icon.jpg",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "愛知工業大学 システム工学研究会",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "愛知工業大学 システム工学研究会 / 愛知工業大学 システム工学研究会についての情報など",
      },
      {
        hid: "description",
        name: "description",
        content:
          "愛知工業大学 システム工学研究会 / 愛知工業大学 システム工学研究会についての情報など このサークルの部室には、プログラミングや電子工作、インフラなどといった様々な分野の勉強ができる環境が整っています。勉強会を開いたり、作品を作ってコンテストに出したりすることもできます。",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/defult.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/pwa",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/google-gtag", //google analyticsのモジュール追加
  ],
  "google-gtag": {
    id: "UA-hogehoge", //本番環境はここを書き換える
    debug: true, // デベロッパーモード
  },

  pwa: {
    manifest: {
      name: "愛知工業大学 システム工学研究会",
      lang: "ja",
      short_name: "システム工学研究会",
      title: "愛知工業大学 システム工学研究会",
      "og:title": "愛知工業大学 システム工学研究会",
      description:
        "愛知工業大学 システム工学研究会 / 愛知工業大学 システム工学研究会についての情報など このサークルの部室には、プログラミングや電子工作、インフラなどといった様々な分野の勉強ができる環境が整っています。勉強会を開いたり、作品を作ってコンテストに出したりすることもできます。",
      "og:description":
        "愛知工業大学 システム工学研究会 / 愛知工業大学 システム工学研究会についての情報など",
      theme_color: "#212121",
      background_color: "#212121",
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3
      //   }
      // }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
