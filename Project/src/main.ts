import { createApp } from 'vue'
import App from './App.vue'

// 统一不同浏览器标签默认样式
import "normalize.css";
// 按照项目需求，提供自己的公用样式
import "@/assets/styles/common.less";
// 引入路由
import router from "./router";

// 引入pinia
import { createPinia } from 'pinia'
// 创建 pinia 实例
const pinia = createPinia()

const app = createApp(App)
// 使用 vueRouter
app.use(router);
// 使用 pinia
app.use(pinia)


//测试全局注册
import XtxUI from "@/components/XtxUI";
app.use(XtxUI)

app.mount('#app')
