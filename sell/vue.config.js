const appData = require("./data.json")
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  chainWebpack: () => { },
  configureWebpack: () => { },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false,                                 //配置自动启动浏览器
    host: '0.0.0.0',
    port: 8080,                                 // 端口号
    https: false,
    hotOnly: false,                             // https:{type:Boolean}
    before(app) {
      app.get("/api/seller", (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get("/api/goods", (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get("/api/ratings", (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}