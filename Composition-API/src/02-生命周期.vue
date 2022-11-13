<template>
  <div class="container">
    根组件
  </div>
</template>

<script lang="ts">
import { onBeforeMount, onMounted } from 'vue';

// 组合API的生命周期钩子有7个，可以多次使用同一个钩子，执行顺序和书写顺序相同。
export default {
  name: "App",
 setup(){
  // 1.DOM渲染前钩子
  onBeforeMount(() => {
    console.log('DOM渲染前钩子',document.querySelector('.container'),this);
  })
  // 2.DOM渲染后钩子
  onMounted(() => {
    console.log('DOM渲染后钩子1',document.querySelector('.container'),this);
  })


  // 我们可以自定义多个相同的构造函数，去实现不同的逻辑
  onMounted(() => {
    console.log('DOM渲染后钩子2',document.querySelector('.container'),this);
  })
 }
};
</script>
<style lang='less' scoped>
</style>

