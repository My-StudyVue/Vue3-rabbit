<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { GoodsItem } from "@/types";
interface Props {
  goods?: GoodsItem;
}
defineProps<Props>();
</script>

<template>
  <RouterLink :to="`/goods/${goods?.id}`" class="goods-item">
    <img :src="goods?.picture" alt="" />
    <p class="name ellipsis">{{ goods?.name }}</p>
    <p class="desc ellipsis">{{ goods?.desc }}</p>
    <p class="price">&yen;{{ goods?.price }}</p>
  </RouterLink>
</template>

<style scoped lang="less">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>
