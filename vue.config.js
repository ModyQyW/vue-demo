/* eslint-disable no-param-reassign */
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const arrGZipExtension = [
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
  configureWebpack: (config) => {
    config.plugins.push(
      new StylelintPlugin({
        files: ['src/**/*.{css,less,sass,scss,vue}'],
        fix: true,
      }),
    );
    config.resolve.alias = {
      '@': path.resolve('src'),
      '@a': path.resolve('src', 'assets'),
      '@c': path.resolve('src', 'components'),
      '@h': path.resolve('src', 'hooks'),
      '@u': path.resolve('src', 'utils'),
    };
    if (process.env.NODE_ENV !== 'development') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.plugins.push(
        new CompressionPlugin({
          test: new RegExp(`\\.(${arrGZipExtension.join('|')})$`),
        }),
      );
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            chunks: 'initial',
            name: 'chunk-vendors',
            priority: 10,
            test: /[/\\]node_modules[/\\]/,
          },
          vuetify: {
            name: 'chunk-vuetify',
            priority: 20,
            test: /[/\\]node_modules[/\\]_?vuetify(.*)/,
          },
          components: {
            minChunks: 2,
            name: 'chunk-components',
            priority: 5,
            reuseExistingChunk: true,
            test: path.resolve('src', 'components'),
          },
        },
      };
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";',
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'zh-Hans',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-Hans',
      localeDir: 'i18n/locales',
      enableInSFC: false,
    },
  },
  publicPath: '/',
  transpileDependencies: ['vuetify'],
};
