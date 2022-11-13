# 小兔鲜儿PC前台
> 讲义地址 : https://zhoushugang.gitee.io/erabbit-client-pc-document/

# vue3前置
## 创建vue应用
目标：掌握如何创建vue3应用实例

基本步骤：

在main.js中导入createApp函数
定义App.vue组件，导入main.js
使用createApp函数基于App.vue组件创建应用实例
挂载至index.html的#app容器
落地代码：

App.vue

<template>
  <div class="container">
    我是根组件
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

main.js

// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器

import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
总结： 如何创建vue应用实例？

通过createApp创建应用实例--->扩展功能将来都是在app上进行。