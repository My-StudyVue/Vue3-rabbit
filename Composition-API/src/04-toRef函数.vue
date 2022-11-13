<template>
  <h1> {{ obj.name }}</h1>

  <h1>{{ name }}</h1>

  <button @click="updateName">修改名字</button>
</template>

<script lang='ts'>
//使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据。
import { reactive, toRef } from 'vue';

interface Obj {
  name: string;
  age: number;
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

    return { obj, name, updateName }
  },
}

</script>
<style lang='less' scoped>

</style>