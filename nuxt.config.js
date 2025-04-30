export default {
  target: 'static',
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
  loading: { color: '#fff' },
  css: [
    './assets/main.scss',
  ],
  plugins: [],
  buildModules: [],
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
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },
  build: {
    generate: {
      dir: 'dist', 
    },
    extend (config, ctx) {}
  }
}
