<template>
  <div>
    <div>今年:{{ age }}岁</div>
    <div>后年:{{ newAge }}岁</div>

    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge" />
  </div>
</template>

<script lang='ts'>
//computed函数，是用来定义计算属性的，计算属性不能修改。
//computed对象，get获取计算属性的值，set监听计算属性改变
import { computed, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1.计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据
    const age = ref<number>(16);
    // 得到后年的年龄
    // 计算属性用法 ---函数形式
    // const newAge = computed<number>(() => {
    //   // 该函数的返回值就是计算属性的返回值
    //   return age.value + 2;
    // });

    // 计算属性高级用法 ---对象形式
    const newAge = computed({
      // get函数，获取计算属性的值
      get() {
        return age.value + 2;
      },
      // set函数，当你给计算属性设置值的时候触发
      set: (val) => {
        age.value = val - 2;
      },
    });

    return { age, newAge };
  },
};
</script>
<style lang='less' scoped>
</style>