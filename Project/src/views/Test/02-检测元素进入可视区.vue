<template>
  <div style="height: 2000px"></div>
  <!-- 🎯目标元素需添加模板 ref  -->
  <div ref="target">
    <h1>🎯我是目标元素🎯</h1>
  </div>
  <div style="height: 2000px"></div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'


/**
 * 🔔核心单词解释：
 *  useIntersectionObserver   检查元素是否进入可视区函数
 *  target                    目标元素，🎯需配合模板 ref 使用
 *  isIntersecting            是否进入可视区(布尔值)
 *  stop                      用于停止检测的函数
 */

export default {
  name: 'index',
  components: {},
  mixins: [],

  props: {},
  setup(props, context) {
    // 准备目标元素(DOM节点或组件，需配合模板 ref 使用)
    const target = ref(null)

    const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
      console.log('检测元素可见性', isIntersecting);
      // 需求：如果目标元素进入可视区，就发送请求，并停止检测
      if (isIntersecting) {
        // 当目标元素进入可视区域时，才发送请求
        console.log('进入可视区，需要发送请求');
        // 请求已发送，主动停止检查
        stop();
      }
    })

    return { target }
  },
}

</script>
<style lang='less' scoped>

</style>