<template>
  <!-- toRef -->
  <!-- 使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据。 -->
  <h1>toRef</h1>
  <h2> {{ obj.name }}</h2>

  <h2>{{ name }}</h2>

  <button @click="updateName">修改名字</button>

  <!-- toRefs -->
  <!-- 使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。 -->
  <h1>toRefs</h1>
  <h2>{{ obj1.name1 }}</h2>
  <h2>{{ obj1.description }}</h2>

  <hr>

  <h2>{{ name1 }}</h2>
  <h2>{{ description }}</h2>

  <button @click="updateObj1">修改数据</button>

  <!-- toRaw -->
  <!-- 使用场景：将响应式对象转化为普通对象。 -->
  <h1>toRaw</h1>
  <h2>{{ obj1.name1 }}</h2>
  <h2>{{ obj1.description }}</h2>

  <hr>

  <h2>{{ name1 }}</h2>
  <h2>{{ description }}</h2>

  <button @click="updateObj2">数据变回普通对象</button>
</template>

<script lang='ts'>

import { reactive, toRef, toRefs, toRaw } from 'vue';

interface Obj {
  name: string;
  age: number;
}

type Obj1 = {
  name1: string;
  description: string;
}

export default {
  name: 'App',
  setup() {
    // 1.响应式数据对象
    const obj: Obj = reactive({
      name: '百里守约',
      age: -100,
    })

    // 2.模板中只需要使用name数据
    // 注意：从响应式数据中数据对象中结构出属性数据，不再是响应式数据
    // let { name } = obj 不能直接解构，出来的是一个普通数据
    const name = toRef(obj, 'name')

    const updateName = (): void => {
      // obj.name += '是狗'

      // toRef转换响应式数据包装成对象，value存放值的位置
      name.value += '是狗'
    }

    const obj1: Obj1 = reactive({
      name1: '安琪拉',
      description: '嘎嘎牛逼'
    })

    // console.log(obj1, '====obj是响应式');
    // const { name1, description } = obj1;
    // console.log(name1, description, '====description');
    const obj2: Obj1 = { ...obj1 }
    console.log(obj2, '====obj2不是响应式');
    // -------------------以上方式导致数据不是响应式数据

    const obj3 = toRefs(obj1)
    console.log(obj3, '===obj3是响应式');

    // let { name1, description } = toRefs(obj1)
    const updateObj1 = () => {
      // name.value += '6';
      // description.value += '66666'

      // obj3.name.value += '6'
      // obj3.description.value += '66666'

      // 直接改原数据
      obj1.name1 += '6'
      obj1.description += '66666'
    }
    const updateObj2 = () => {
      const obj4 = toRaw(obj1)
      obj4.name1 += '7'
      obj4.description += '77777'
      console.log(obj4, obj1, '====obj4');

    }


    return { obj, name, updateName, ...obj3, obj1, updateObj1, updateObj2 }
  },
}

</script>
<style lang='less' scoped>

</style>