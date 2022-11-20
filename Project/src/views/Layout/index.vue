<template>
  <div>Layout</div>
  <main class="app-body">
    <!-- 预留路由出口，添加添加 :key 解决路由缓存的问题 -->
    <RouterView :key="$route.fullPath" />
    <!-- fulllPath   /category/1029487?username=zs&age=18 -->
    <!-- path        /category/1029487 -->
  </main>
</template>

<script lang='ts'>
import { RouterView } from "vue-router";
export default {
  name:'index',
  components: {},
  mixins:[],

  props: {},
  setup(props,context){

  },
}

</script>
<style lang='less' scoped>
</style>