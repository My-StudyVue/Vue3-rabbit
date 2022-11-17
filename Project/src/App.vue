<script setup lang="ts">
import request  from './utils/request'
import {onMounted} from 'vue'

onMounted(async() =>{
  const res = await request.get("/home/index")
  console.log(res);
  
})
</script>

<template>
   <div>
    <p>哈哈哈</p>
    <ul>
      <li>123</li>
      <li>456</li>
    </ul>
    <h1>这是大标题</h1>
  </div>
</template>

<style lang="less">
// 必须导入 variables.less
// @import url("@/assets/styles/variables.less");
// @import url("@/assets/styles/mixins.less");

h1{
  color: @warnColor;
  .hoverShadow()
}

</style>
