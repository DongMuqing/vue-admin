var path = require('path')
module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true
  },
  //生产环境
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
