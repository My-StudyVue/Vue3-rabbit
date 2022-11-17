<script setup lang="ts">
import request  from './utils/request'
import {onMounted} from 'vue'

onMounted(async() =>{
  const res = await request.get("/home/index")
  console.log(res);
  
})
</script>

<template>
  <h1>Vue3+TS+VueRouter4+Pinia-新版小兔鲜儿</h1>
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
