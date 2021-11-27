const webpackConfig = {};

if (process.env.NODE_ENV === 'analyze') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins = [new BundleAnalyzerPlugin()];
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = -1;
        return options;
      });
  },
  configureWebpack: webpackConfig,
};
