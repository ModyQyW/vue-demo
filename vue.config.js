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
  'png',
];

module.exports = {
  chainWebpack: (config) => {
    config.plugin('stylelint').use(StylelintPlugin, [
      {
        files: ['src/**/*.{css,less,sass,scss,vue}'],
        fix: true,
      },
    ]);
    config.resolve.alias
      .set('@@', path.resolve(''))
      .set('@', path.resolve('src'));
    config.when(process.env.NODE_ENV === 'production', (config_) => {
      config_
        .plugin('compression')
        .use(CompressionPlugin, [
          { test: new RegExp(`\\.(${arrGZipExtension.join('|')})$`) },
        ]);
      config_.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        return args;
      });
      config_.optimization.splitChunks({
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
      });
    });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";',
      },
    },
  },
  transpileDependencies: ['vuetify'],
};
