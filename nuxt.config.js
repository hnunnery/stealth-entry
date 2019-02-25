const pkg = require("./package");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Stealth Entry",
    titleTemplate: "%s - Cyber Security",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The Stealth Entry Cyber Threat Operations Center (CTOC) takes a FULL HOLISTIC view of your organization’s security threat-scape using the latest Threat Hunting, Vulnerability Analysis, Reverse Engineering, Insider Threat, Forensic chain of custody, patch management, and incident response techniques. Our goal is to support our customers cyber security initiatives by providing above and beyond the status quo Threat Hunting, Digital Forensics and Incident Response monitoring you might receive from other organizations! We offer a tiered subscription plan that works for your individual organization’s security and compliance needs."
      },
      {
        name: "keywords",
        content:
          "Stealth Entry, Stealth Entry Cyber Security Solutions, Cyber Security, MSSP, Managed Security Service Provider, Cyber Security as a Service, CSaaS, Threat IQ, THREAT-IQ, Columbus OH, Cyber Security, Cyber Security Training, IT Scheule 70, GSA, SBA8A, SDVOSB, Veteran, Veteran Owned, Cyber Security Assessments, Secure, Secure Cloud Services, Cloud Provider, Cloud Security, EC Council, Stealth Research Labs, Cyber Security Jobs"
      },
      { name: "robots", content: "index" },
      { name: "apple-mobile-app-title", content: "StealthEntry" },
      { name: "application-name", content: "StealthEntry" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-config", content: "/icons/browserconfig.xml" },
      { name: "theme-color", content: "#ffffff" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
      },
      // Font Awesome Web Font Backup
      // {
      //   rel: "stylesheet",
      //   href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      // },
      // Icon Meta Tags
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/icons/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#ff7f00"
      },
      {
        rel: "shortcut icon",
        href: "/icons/favicon.ico"
      }
    ],
    script: [
      {
        src: "https://use.fontawesome.com/releases/v5.7.2/js/all.js"
      }
    ]
  },

  /*
   ** loads new pages at top of page
   */
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff9800" },

  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl", "aos/dist/aos.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify", { src: "~/plugins/aos", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor: ["aos"]
  }
};
