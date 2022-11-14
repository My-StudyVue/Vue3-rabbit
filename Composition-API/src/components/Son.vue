<template>
  <h1>我是子组件</h1>
  <h2>{{money}}</h2>
</template>

<script lang='ts'>
export default {
  name:'Son',
  props:{
    money:{
      type:Number,
      default:0
    }
  },
  setup(){

  },
}

</script>
<style lang='less' scoped>
</style>