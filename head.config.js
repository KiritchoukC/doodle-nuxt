const pkg = require('./package.')
module.exports = {
  title: pkg.name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: pkg.description },
    { name: 'msapplication-TileColor', content: '#009790' },
    { name: 'theme-color', content: '#009790' },
    // Schema.org meta for Google+
    { itemprop: 'name', content: pkg.name },
    { itemprop: 'description', content: pkg.description },
    { itemprop: 'image', content: '/socialcardimg.png' },
    // Twitter Card meta
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@DoodleHelha' },
    { name: 'twitter:title', content: pkg.name },
    { name: 'twitter:description', content: pkg.description },
    { name: 'twitter:creator', content: pkg.author },
    { name: 'twitter:url', content: '/' },
    { name: 'twitter:domain', content: '/' },
    { name: 'twitter:image:src', content: '/socialcardimg.png' },
    // Open Graph Meta
    { property: 'og:title', content: pkg.name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '/' },
    { property: 'og:image', content: '/socialcardimg.png' },
    { property: 'og:description', content: pkg.description },
    { property: 'og:site_name', content: pkg.name },
    { property: 'fb:admins', content: '' },
    { property: 'fb:app_id', content: '' },
    { property: 'author', content: pkg.author }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-16x16.png'
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#009790' },
    // Schema.org meta for Google+
    { rel: 'author', href: 'plus.google.com' },
    { rel: 'publisher', href: 'plus.google.com' }
  ]
}
