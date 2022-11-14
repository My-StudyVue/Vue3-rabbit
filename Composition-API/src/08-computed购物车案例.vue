<template>
  <h1>computed购物车案例</h1>
  <table border style="width: 800px">
    <thead align="center">
      <tr>
        <th>名称</th>
        <th>数量</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>

    <tbody align="center">
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>
          <button @click="addAndSub(item, true)">+</button>
          {{ item.num }}
          <button @click="addAndSub(item, false)">-</button>
        </td>
        <td>{{ item.price * item.num }}</td>
        <td>
          <button @click="delData(index)">删除</button>
        </td>
      </tr>
    </tbody>

    <tfoot align="center">
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>总价:{{ $total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script lang='ts'>
import { computed, reactive, ref } from "vue";

interface Shop {
  name: string;
  num: number;
  price: number;
}

export default {
  name: "App",
  setup() {
    // 1.定义商品数据和总价格
    const data = reactive<Shop[]>([
      {
        name: "耳机",
        num: 1,
        price: 118,
      },
      {
        name: "棉鞋",
        num: 1,
        price: 40,
      },
      {
        name: "火锅底料",
        num: 1,
        price: 20,
      },
      {
        name: "饼干",
        num: 1,
        price: 5,
      },
    ]);
    let $total = ref(0);

    // 2.控制数量的加减
    const addAndSub = (item: Shop, type: Boolean = true): void => {
      if (type && item.num <= 99) {
        item.num++;
      } else if (!type && item.num > 1) {
        item.num--;
      }
    };

    // 3.删除数据
    const delData = (index: number) => {
      data.splice(index, 1);
    };

    // 4. 计算总数
    $total = computed<number>(() => {
      return data.reduce((prev, next) => {
        return prev + next.price * next.num;
      }, 0);
    });

    return { data, $total, addAndSub, delData };
  },
};
</script>
<style lang='less' scoped>
</style>