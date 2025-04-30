
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/ce82227861.js", crossorigin: "anonymous" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  axios: {
    baseURL: "https://fakestoreapi.com/products"
  },
  i18n: {
    locales: [
      {
        code: 'ua',
        name: 'Українська',
        iso: 'uk-UA',
        file: 'ua.json'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      }
    ],
    defaultLocale: 'ua',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'ua',
    },
    detectBrowserLanguage: {
      useCookie: true, // зберігати мову в cookie
      cookieKey: 'i18n_redirected', // ключ cookie
      alwaysRedirect: true, // перенаправляти на правильну мову при заході
      fallbackLocale: 'en' // запасна мова
    }
  },  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
