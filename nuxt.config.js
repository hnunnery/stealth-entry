const pkg = require("./package");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Stealth Entry",
    titleTemplate: "%s Cyber Security Solutions",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Stealth Entry Cyber Security Solutions takes a FULL HOLISTIC view of your organization’s security threat-scape using the latest techniques. Stealth Entry, LLC. is certified U.S. Small Business Administration 8(a), Serviced Disabled Veteran Owned (SDVOSB) and State of Ohio Minority Business Enterprise and Veterans Business Enterprise (MBE/VBE/EDGE)."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Stealth Entry, Stealth Entry Cyber Security Solutions, Cyber Security, MSSP, Managed Security Service Provider, Cyber Security as a Service, CSaaS, Threat IQ, THREAT-IQ, Columbus OH, Cyber Security, Cyber Security Training, IT Schedule 70, Schedule 70, , GSA, SBA8A, SDVOSB, VOSB, Veteran, Service Disabled Veteran Owned Business, Service Disabled Veteran Owned, Certified U.S. Small Business Administration 8(a), SBA, 8(a), Cyber Security Assessments, Secure, Secure Cloud Services, Cloud Provider, Cloud Security, EC Council, Stealth Research Labs, Cyber Security Jobs"
      },
      { name: "robots", content: "index" },
      { name: "apple-mobile-app-title", content: "StealthEntry" },
      { name: "application-name", content: "StealthEntry" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-config", content: "/icons/browserconfig.xml" },
      { name: "theme-color", content: "#ffffff" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Stealth Entry Cyber Security Solutions"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Our goal is to support our customers cyber security initiatives by providing above and beyond the status quo Threat Hunting, Digital Forensics and Incident Response monitoring you might receive from other organizations!"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/missionwebdev/image/upload/f_auto/v1551139322/StealthEntry/main.jpg"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.stealthentry.com"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      },
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
