/**
 * 主要职责 
 * 创建一个vue应用（理解为之前的跟实例）
 * 
 * 步骤：
 * 1. 导入我们的createApp函数从vue中
 * 2. 创建一个跟组件 App.vue 导入至main
 * 3. 使用createApp 创建应用实例
 * 4. 应用实例挂载到 #app 容器中
 */

import { createApp } from "vue";
import App from "./App.vue"
const app = createApp(App)
app.mount('#app')

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
