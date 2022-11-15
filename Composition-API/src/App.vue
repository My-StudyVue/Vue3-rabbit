<template>
  <div class="container">
    <A></A>
  </div>
</template>

<script lang='ts'>
import A from "./components/A.vue";
export default {
  name: "App",
  components: {
    A,
  },
  setup() {
    return {};
  },
};
</script>
<style lang='less' scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
