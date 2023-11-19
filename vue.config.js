const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule
      .use('file-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        const ret = options || {};
        ret.mozjpeg = {
          progressive: true,
        };
        ret.pngquant = {
          quality: [0.65, 0.9],
          speed: 4,
        };
        return ret;
      });

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule.delete('type');
    svgRule.delete('generator');
    svgRule.use('vue-loader').loader('vue-loader').end().use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/variables.scss";',
        sassOptions: {
          indentWidth: 4,
        },
      },
    },
  },
});
