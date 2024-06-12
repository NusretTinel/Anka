const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2021-11-22',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/about/',
    lastmod: '2021-11-22',
    priority: 0.9,
    changefreq: 'yearly'
  }
]

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://example.com', paths })
    ]
  },
  // Other exports here
}