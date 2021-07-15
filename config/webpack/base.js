const { webpackConfig, merge } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = merge({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.css', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm'
    }
  }
}, webpackConfig)
