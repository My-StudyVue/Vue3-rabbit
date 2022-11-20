<template>
  <!-- 头部导航 -->
  <AppTopNav />
  <!-- 头部布局 -->
  <AppHeader />

  <!-- 头部吸顶组件 -->
  <AppHeaderSticky />

  <main class="app-body">
    <!-- 预留路由出口，添加添加 :key 解决路由缓存的问题 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <!-- fulllPath   /category/1029487?username=zs&age=18 -->
    <!-- path        /category/1029487 -->
  </main>

  <!-- 底部布局 -->
  <AppFooter />
</template>

<script lang='ts'>
import { RouterView } from "vue-router";

import AppTopNav from "./components/app-top-nav.vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppHeaderSticky from "./components/app-header-sticky.vue";

import useHomeStore from "@/store"
export default {
  name: 'index',
  components: {
    AppTopNav,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  mixins: [],

  props: {},
  setup(props, context) {
    const { home } = useHomeStore()
    home.getAllCategories()
  },
}

</script>
<style lang='less' scoped>
.app-body {
  min-height: 600px;
}
</style>