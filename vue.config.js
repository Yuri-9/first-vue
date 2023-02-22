const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  assetsDir: 'assets',
  chainWebpack: (config) => {
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
