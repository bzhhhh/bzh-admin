const { override, fixBabelImports, addLessLoader, addWebpackPlugin, addWebpackAlias } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true
  }),
  // 配置自定义主题
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#0bbcd6' }
    }
  }),
  // 减少包的体积
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src')
  })
)
