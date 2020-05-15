const { override, fixBabelImports, addLessLoader } = require('customize-cra')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#5c7168' }
    }
  })
)


