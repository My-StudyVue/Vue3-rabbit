<template>
  <div>
    <!-- vue2.0 获取单个元素 -->
    <!-- 1. 通过ref属性绑定该元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 获取所有遍历元素  -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

    <!-- vue3.0 获取单个元素 -->
    <!--  1.2 setup中返回改数据，你想获取那个dom元素，就在改元素上使用ref属性绑定该值即可。 -->
    <div ref="box">我是box</div>
    <!-- vue3.0 被遍历的元素 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">{{i}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
/**
 * 单个元素：先申明ref响应式数据，返回给模版使用，通过ref绑定数据
 * 
 * 遍历的元素：先定义一个空数组，定一个函数获取元素，返回给模版使用，通过ref绑定这个函数
 * 有一个边界问题：组件更新的时候会重复的设置dom元素给数组
 */
import {onMounted, ref} from 'vue'

export default {
  name: "App",
  setup() {
    // 1.  获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    const box  = ref(null)
    onMounted(() => {
      console.log(box,box.value,'=====dom创建完毕');
    })

    // 2.  获取v-for遍历的元素
    // 2.1 定义一个空数组，接受所有的li
    const domList:any = []
    // 2.2 定义一个函数，往空数组push DOM
    const setDom = (el:any) => {
      domList.push(el)
    }
    onMounted(()=>{
      console.log(domList)
    })

    return { box,setDom};
  },
};
</script>
<style lang='less' scoped>
</style>
