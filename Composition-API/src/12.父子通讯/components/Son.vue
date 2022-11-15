<template>
  <h1>我是子组件</h1>
  <h2>{{ money }}</h2>

  <!-- 子穿父 -->
  <h1>更改父组件数据</h1>
  <button @click="changeMoney">花50元</button>
</template>

<script lang='ts'>
export default {
  name: "Son",
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    // 获取父组件数据money
    console.log(props.money);

    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      // emit('changeMoney',50)

      emit("update:money", 50);
    };

    return { changeMoney };
  },
};
</script>
<style lang='less' scoped>
</style>