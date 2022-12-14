import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
// import * as ElIcons from "@element-plus/icons-vue"
// import * as AntIcons from "@ant-design/icons-vue"
// import Ant from "@/plugins/ant-design"
import "ant-design-vue/dist/antd.css" // or 'ant-design-vue/dist/antd.less'
import "ant-design-vue/lib/menu/style/css" // or 'ant-design-vue/dist/antd.less'
const el = createApp(App)

el.use(store)
el.use(router)
el.use(ElementPlus, {
  locale: zhCn,
})
// 若不在vue.config 中配置自动导入 则需在此手动导入
// for (const [key, component] of Object.entries(ElIcons)) {
//   el.component(key, component)
// }
// for (const [key, component] of Object.entries(AntIcons)) {
//   el.component(key, component)
// }
// for (const [key, component] of Object.entries(Ant)) {
//   el.component(`A${key}`, component) // 因为ant 都是以a开头所以拼接上a
// }

el.mount("#app")
