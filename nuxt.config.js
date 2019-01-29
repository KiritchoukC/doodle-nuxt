const authConfig = require('./auth.config')
const axiosConfig = require('./axios.config')
const headConfig = require('./head.config')
const buildConfig = require('./build.config')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: headConfig,

  /*
  ** Customize the progress-bar color
  */
  loading: {
    name: 'chasing-dots',
    color: '#009790',
    height: '3px'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  /*
  ** Axios module configuration
  */
  axios: axiosConfig,

  /*
  ** Build configuration
  */
  build: buildConfig,
  /*
  ** Authentication configuration
  */
  auth: authConfig
}
