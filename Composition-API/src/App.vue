<template>
  <h1>我是父组件</h1>
  <h2>{{money}}</h2>

  <hr>

  <Son :money="money"></Son>
</template>

<script lang='ts'>
import {ref} from 'vue'

import Son from './components/Son.vue'

export default {
  name: "App",
  components:{
    Son
  },
  setup() {
    const money = ref(100)
    return { money};
  },
};
</script>
<style lang='less' scoped>
</style>
