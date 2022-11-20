<template>
  <!-- 问题解答1：在模板中可以自动导入 .vue 后缀名的源文件 -->
  <!-- <Button type="primary" size="large">按钮</Button> -->

  <!-- 直接导入的组件支持 TS 类型检查，鼠标悬停测试 -->
  <!-- <Skeleton :height="30" :width="100" bg="pink" /> -->

  <!-- 鼠标悬停检查 TS 类型 -->
  <XtxButton type="primary" size="large">按钮</XtxButton>
  <XtxSkeleton :height="30" :width="100" bg="pink" />
</template>

<script lang='ts'>
// // 直接导入组件源文件，导入多个组件需要写多个 import
// import Button from '@/components/XtxUI/Button/index.vue'
// import Skeleton from '@/components/XtxUI/Skeleton/index.vue'

// 同一个 import 可以同时导入多个组件
import { XtxButton, XtxSkeleton } from "@/components/XtxUI";
export default {
  name: 'index',
  components: {
    // Button,
    // Skeleton,

    XtxButton,
    XtxSkeleton,
  },
  mixins: [],

  props: {},
  setup(props, context) {

  },
}

</script>
<style lang='less' scoped>

</style>