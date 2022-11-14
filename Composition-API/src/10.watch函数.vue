<template>
  <div>
    <p>{{ count }}</p>

    <button @click="updateCount">改数字</button>
  </div>

  <hr />

  <div>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <p>{{ obj.brand.name }}</p>

    <button @click="updateName">改名字</button>
    <button @click="updateBrandName">改品牌名字</button>
  </div>
</template>

<script lang='ts'>
/**
 * 学习目标：
 *    watch 侦听器(监听), 接收三个参数
 *      1. 参数1: 监视的数据源
 *      2. 参数2: 回调函数
 *      3. 参数3: 额外的配置
 */
import { reactive, ref, watch } from "vue";

type BrandObj = {
  name: string
}

type PersonObj = {
  name: string;
  age: number;
  brand:BrandObj;
};

export default {
  name: "App",
  setup() {
    const count = ref(0);
    const updateCount = () => {
      count.value++;
    };

    watch(
      count,
      (newVal, oldVal) => {
        console.log(newVal, oldVal, "===newVal,oldVal");
      },
      {
        // immediate: true, //是否立即调用一次
        // deep: true, //是否开启深度监听
      }
    );

    const obj: PersonObj = reactive({
      name: "小王",
      age: 18,
      brand: {
        id: 1,
        name: '宝马'
      }
    });

    const updateName = () => {
      obj.name = "小李";
    };

    const  updateBrandName = () =>{
      obj.brand.name = '大众'
    }

    // 2.监听一个reactive数据
    watch(obj,(newVal, oldVal) => {
      console.log('数据变化了吗1',obj,newVal,oldVal);
    })

    // 2.1 监听对象的某个属性的变化
    // 需要写成函数返回该属性的方式才能监听到
    watch(() =>obj.brand,(newVal, oldVal)=>{
      console.log('数据变化了吗2',obj.brand,newVal,oldVal);
    },{
      // 2.2. 需要深度监听
      deep: true,
      // 2.2. 想默认触发
      // immediate: true
    })

    // 3. 监听多个数据的变化
    watch([count,obj],(newVal, oldVal)=>{
      console.log(newVal, oldVal,'多个数据变化了吗？');
    })

    return { count, updateCount, obj, updateName,updateBrandName };
  },
};
</script>
<style lang='less' scoped>
</style>
