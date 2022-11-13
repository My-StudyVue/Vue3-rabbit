<template>
  <h1>{{ obj.name }}</h1>
  <h1>{{ obj.description }}</h1>

  <hr>

  <h1>{{ name }}</h1>
  <h1>{{ description }}</h1>

  <button @click="updateObj">修改数据</button>
</template>

<script lang='ts'>
//使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。
import { reactive, toRefs } from 'vue';

interface Obj {
  name: string;
  description: string;
}
export default {
  name: 'App',
  setup() {
    const obj: Obj = reactive({
      name: '安琪拉',
      description: '嘎嘎牛逼'
    })

    // console.log(obj, '====obj是响应式');
    // const { name, description } = obj;
    // console.log(name, description, '====description');
    const obj2: Obj = { ...obj }
    console.log(obj2, '====obj2不是响应式');
    // -------------------以上方式导致数据不是响应式数据

    const obj3 = toRefs(obj)
    console.log(obj3, '===obj3是响应式');

    // let { name, description } = toRefs(obj)
    const updateObj = () => {
      // name.value += '6';
      // description.value += '66666'

      // obj3.name.value += '6'
      // obj3.description.value += '66666'

      // 直接改原数据
      obj.name += '6'
      obj.description += '66666'
    }


    return { ...obj3, obj, updateObj }
  },
}

</script>
<style lang='less' scoped>

</style>