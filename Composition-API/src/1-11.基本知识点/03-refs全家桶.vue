<template>
  <!-- 🔔 在模板中, ref 属性会自动解套, 不需要额外的 .value -->
  <table border="1">
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>shallow非响应式</th>
      <th>shallow响应式</th>
    </tr>
    <tr>
      <th>{{ name }}</th>
      <th>{{ age }}</th>
      <th>{{ shallowName1 }}</th>
      <th>{{ shallowName2 }}</th>
    </tr>
  </table>

  <button style="margin-top: 10px" @click="updateName">修改名字</button>
</template>

<script lang='ts'>
import { ref, shallowRef, triggerRef } from "vue";

export default {
  name: "App",
  setup() {
    // 1.name数据
    // 通过 ref 把普通字符串包装成响应式对象
    const name = ref<string>("猜猜我是谁");
    console.log(name, "===name");

    const updateName = () => {
      // ref 真实值通过 .value 访问
      name.value = "猜猜";
    };

    // 2.age数据
    const age = ref<number>(18);

    /**
     * ref常用定义简单数据类型的响应式数据
     * 其实也可以定义复杂数据类型的响应式数据
     * 对于数据未之的情况下 ref 是最适用的
     */
    // const data = ref(null)
    // setTimeout(()=>{
    //   data.value = res.data
    // },1000)

    // Ref TS对应的接口
    // interface Ref<T> {
    //   value: T;
    // }

    /**
     * isRef
     * 判断是不是一个ref对象
     */

    /**
     * shallowRef
     *
     * 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的
     *
     * 修改其属性是非响应式的这样是不会改变的
     */
    let shallowName1 = shallowRef({
      name: "猜猜我是谁",
    });
    setTimeout(() => {
      shallowName1.value.name = "不猜";
      console.log(shallowName1, "==shallowName1");

      /**
       * triggerRef
       *
       * 强制更新页面DOM
       */
      triggerRef(shallowName1);
    }, 1000);

    let shallowName2 = shallowRef(name);
    setTimeout(() => {
      // shallowName2.value = '不猜'
      // console.log(shallowName2, '==shallowName2');
    }, 2000);

    /**
     * customRef
     * 自定义ref
     * customRef 是个工厂函数要求我们返回一个对象 并且实现 get 和 set  适合去做防抖之类的
     */

    return { name, age, updateName, shallowName1, shallowName2 };
  },
};
</script>
<style lang='less' scoped>
</style>