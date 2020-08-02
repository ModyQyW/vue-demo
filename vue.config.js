const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const StylelintFormatter = require('stylelint-formatter-pretty');

const isProduction = process.env.NODE_ENV === 'production';

const arrGzipExtension = [
  'html',
  'js',
  'css',
  'ttf',
  'eot',
  'otf',
  'woff',
  'woff2',
  'svg',
  'png',
];

module.exports = {
  chainWebpack: (config) => {
    // set alias
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('@a', path.resolve('src', 'assets'))
      .set('@c', path.resolve('src', 'components'))
      .set('@m', path.resolve('src', 'mixins'))
      .set('@p', path.resolve('src', 'plugins'))
      .set('@u', path.resolve('src', 'utils'))
      .set('@v', path.resolve('src', 'views'));
    // split chunks
    // eslint-disable-next-line no-shadow
    config.when(isProduction, (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vuetify: {
            name: 'chunk-vuetify',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?vuetify(.*)/,
          },
          vendors: {
            chunks: 'initial',
            name: 'chunk-vendors',
            priority: 10,
            test: /[\\/]node_modules[\\/]/,
          },
          components: {
            minChunks: 2,
            name: 'chunk-components',
            priority: 5,
            reuseExistingChunk: true,
            test: path.resolve('src', 'components'),
          },
        },
      });
    });
  },
  configureWebpack: (config) => {
    config.plugins.push(
      // stylelint
      new StylelintPlugin({
        files: ['src/**/*.{vue,scss}'],
        fix: true,
        formatter: StylelintFormatter,
      }),
    );
    if (isProduction) {
      // add plugins
      config.plugins.push(
        // gzip
        new CompressionPlugin({
          test: new RegExp(`\\.(${arrGzipExtension.join('|')})$`),
          threshold: 0,
        }),
      );
    }
  },
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: isProduction
    ? '/vue2-todo-list-demo/dist/' // production
    : '/', // development
};
