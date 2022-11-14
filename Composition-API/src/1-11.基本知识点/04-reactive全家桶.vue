<template>
  <table border="1">
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>数组1</th>
      <th>数组2</th>
    <tr>复杂数据</tr>
    </tr>
    <tr>
      <td>{{ obj.name }}</td>
      <td>{{ obj.age }}</td>
      <td>{{ obj.list }}</td>
      <td>{{ person }}</td>
      <td>{{ newObj1 }}</td>
    </tr>
  </table>

  <button style="margin: 10px 10px 0 0;" @click="updateName">修改名字</button>

  <button @click="updateData">修改数据</button>
</template>

<script lang='ts'>
import { reactive, readonly, shallowReactive } from 'vue'

interface Obj {
  name: string;
  age: number;
  list: number[];
}

export default {
  name: 'App',
  setup() {
    // 普通数据
    // const obj: Obj = {
    //   name: '鲁班七号',
    //   age: 8,
    // }

    const obj: Obj = reactive({
      name: '鲁班七号',
      age: 8,
      list: []
    })

    // 修改名字
    const updateName = (): void => {
      obj.name = '东皇太一'
    }

    setTimeout(() => {
      obj.list = [4, 5, 6]
      //使用push
      // const arr = [4, 5, 6]
      // obj.list.push(...arr)
    }, 1000)


    // 这样赋值页面是不会变化的因为会脱离响应式
    let person = reactive<number[]>([])
    setTimeout(() => {
      // person = [1, 2, 3]
      // console.log(person);

      // 1. 使用push
      const arr = [1, 2, 3]
      person.push(...arr)
      console.log(person);

      // 2.包裹一层对象
      // 就是上面的样子
    }, 1000)


    const obj1 = {
      a: 1,
      first: {
        b: 2,
        second: {
          c: 3
        }
      }
    }

    let newObj1 = shallowReactive(obj1)

    const updateData = () => {
      /**
       * readonly
       * 
       * 拷贝一份proxy对象将其设置为只读
       */
      // let newObj = readonly(obj)
      // newObj.age = 20 //报错：法分配到 "age" ，因为它是只读属性。

      /**
       * shallowReactive
       * 
       * 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
       */

      let newObj = shallowReactive(obj)
      newObj.age = 20
      console.log(newObj, newObj.age);



      newObj1.first.second.c = 20
      console.log(newObj1, newObj1.first.second.c);
    }

    return { obj, updateName, person, updateData, newObj1 }
  },
}

</script>
<style lang='less' scoped>

</style>