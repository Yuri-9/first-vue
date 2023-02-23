const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  assetsDir: 'assets',
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule.use('file-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        const ret = options || {};
        ret.mozjpeg = {
          progressive: true,
        };
        ret.pngquant = {
          quality: [0.65, 0.90],
          speed: 4,
        };
        return ret;
      });

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule.use('vye-svg-loader').loader('vye-svg-loader');
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: '@import "@/variables.scss";',
        sassOptions: {
          indentWidth: 4,
        },
      },
    },
  },
});
