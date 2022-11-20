<template>
  <!-- 问题解答1：在模板中可以自动导入 .vue 后缀名的源文件 -->
  <Button type="primary" size="large">按钮</Button>

  <!-- 直接导入的组件支持 TS 类型检查，鼠标悬停测试 -->
  <Skeleton :height="30" :width="100" bg="pink" />
</template>

<script lang='ts'>
import Button from '@/components/XtxUI/Button/index.vue'
import Skeleton from '@/components/XtxUI/Skeleton/index.vue'

export default {
  name: 'index',
  components: {
    Button,
    Skeleton,
  },
  mixins: [],

  props: {},
  setup(props, context) {

  },
}

</script>
<style lang='less' scoped>

</style>