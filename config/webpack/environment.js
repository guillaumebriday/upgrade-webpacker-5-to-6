const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.append('vue', {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader'
  }]
})

environment.config.merge({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm'
    }
  }
})

environment.splitChunks()

module.exports = environment
