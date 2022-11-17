import { createApp } from 'vue'
import App from './App.vue'

// 统一不同浏览器标签默认样式
import "normalize.css";
// 按照项目需求，提供自己的公用样式
import "@/assets/styles/common.less";
import router from "./router";

const app = createApp(App)
// 使用 vueRouter
app.use(router);
app.mount('#app')
