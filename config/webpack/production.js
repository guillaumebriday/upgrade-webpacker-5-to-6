process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.config.merge({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min'
    }
  }
})

module.exports = environment.toWebpackConfig()
