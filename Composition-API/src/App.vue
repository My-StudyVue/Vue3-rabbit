<template>
  <h1>
    {{ msg }}
  </h1>
  <button @click="say">你好</button>
</template>

<script lang="ts">
export default {
  name: "App",
  /**
   *  1. 组合api的起点，将来的组合api的代码，基本上在这里
   *  2. setup函数只会在组件初始化的时候执行一次
   *  3. 可以理解为：在beforeCreate钩子执行前执行，组件实例创建前
   *  4. 函数中不能使用this ==> undefined
   *  5. 组件中需要使用的数据和函数，需要在setup中返回
   */
  setup() {
    console.log(this, "====setup");
    // 数据
    const msg = "h1 Vue3";
    // 函数
    const say = () => {
      console.log("function Vue3");
    };
    return { msg, say };
  },
  beforeCreate() {
    console.log(this, "====beforeCreate");
  },
};
</script>
<style lang='less' scoped>
</style>
