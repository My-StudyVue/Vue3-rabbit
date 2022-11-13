<template>
  <table border="1">
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
    <tr>
      <td>{{ obj?.name }}</td>
      <td>{{ obj?.age }}</td>
    </tr>
  </table>

  <button style="margin-top:10px" @click="updateName">修改数据</button>
</template>

<script lang='ts'>
import { reactive } from 'vue'

interface Obj {
  name: string;
  age: number;
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
    })

    // 修改名字
    const updateName = (): void => {
      obj.name = '东皇太一'
    }

    return { obj, updateName }
  },
}

</script>
<style lang='less' scoped>

</style>