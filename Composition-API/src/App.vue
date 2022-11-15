<template>
  <h1>我是父组件</h1>
  <h2>{{ money }}</h2>

  <hr />

  <!-- 父穿子 -->
  <!-- <Son :money="money" @changeMoney="changeMoney"></Son> -->

  <hr />

  <h1>双向绑定</h1>
  <!-- <Son :money="money" @update:money="changeMoney" /> -->
  <!-- 简写 -->
  <Son v-model:money="money"></Son>
</template>

<script lang='ts'>
/**
 * 扩展：
 * 在vue2.x的时候 .sync 除去v-model实现双向数据绑定的另一种方式
 *
 * 在vue3.0的时候，使用 v-model:money="money" 即可
 */
import { ref } from "vue";

import Son from "./components/Son.vue";

export default {
  name: "App",
  components: {
    Son,
  },
  // 父组件的数据传递给子组件
  setup() {
    const money = ref(100);

    const changeMoney = (newMoney: number) => {
      money.value = newMoney;
    };
    return { money, changeMoney };
  },
};
</script>
<style lang='less' scoped>
</style>
