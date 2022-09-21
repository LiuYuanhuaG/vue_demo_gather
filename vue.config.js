const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
// const { BASEPATH } = require('./config/config.ts');
const {
  ElementPlusResolver,
  AntDesignVueResolver,
} = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint 报错不影响编译 可选
  devServer: {
    open: true,
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'vue_demo_gather' : '/',
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      }),
    ],
  },
});
