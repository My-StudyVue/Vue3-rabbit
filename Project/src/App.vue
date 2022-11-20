<script setup lang="ts">
// 在TS项目中，建议作为局部组件主动导入，组件有更好的 TS 类型检查
import { RouterView } from "vue-router";
</script>

<template>
  <!-- 鼠标悬停到组件中有TS类型提示，更安全 -->
  <RouterView />
</template>

<style lang="less">
// 必须导入 variables.less
// @import url("@/assets/styles/variables.less");
// @import url("@/assets/styles/mixins.less");
</style>
