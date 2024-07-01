const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2023-11-22',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/hakkimizda',
    lastmod: '2023-11-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/contact',
    lastmod: '2023-11-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '//hizmetlerimiz',
    lastmod: '2023-11-22',
    priority: 0.9,
    changefreq: 'yearly'
  }
]

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'http://ankatedarik.com.tr/', paths })
    ]
  },
  // Other exports here
}