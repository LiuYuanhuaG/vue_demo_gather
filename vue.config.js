const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
// const { BASEPATH } = require('./config/config.ts');
const {
  ElementPlusResolver,
  AntDesignVueResolver,
} = require("unplugin-vue-components/resolvers")
const port = 8861
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint 报错不影响编译 可选
  devServer: {
    https: false,
    open: {
      target: [`http://localhost:${port}`],
    },
    port: port,
    // host: "localhost",
    proxy: {},
  },
  publicPath: process.env.NODE_ENV === "production" ? "vue_demo_gather" : "/",
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
})
