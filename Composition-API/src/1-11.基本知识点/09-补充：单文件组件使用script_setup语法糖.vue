<template>
  <div>
    <h1>num:{{ number }}</h1>

    <!-- <button @click="number++">+</button> -->
    <button @click="changeNumber">+</button>
  </div>
</template>

<script setup lang="ts">
// script setup 优势：
// 1. 使用 `ts` 项目不需要再 `defineComponent` 包裹了。
// 2. 无需再 `return` 了， `template` 可直接使用，顶层的绑定会自动暴露给模板。
// 🚨 书写注意：script setup 在一个vue文件中最多书写一次
import { ref } from "vue";

const number = ref(0);

const changeNumber = () => {
  number.value++;
};
</script>

<!--
<script lang="ts">
// 较为麻烦的原始写法
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const number = ref(10);
    const changeNumber = () => {
      number.value++;
    };
    return { number, changeNumber };
  },
});
</script> 

<style lang='less' scoped>
</style>
-->