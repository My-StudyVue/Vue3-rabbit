<template>
  <div class="home-new">
    <!-- 🚨 ref 需在模板中绑定目标元素 -->
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>

      <!-- 面板内容 -->
      <ul class="goods-list" v-if="home.newGoodList.length > 0">
        <li v-for="item in home.newGoodList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>

      <!-- 骨架组件 - 优化默认显示结构 -->
      <ul class="goods-list" v-else>
        <li v-for="item in 4" :key="item">
          <XtxSkeleton :width="306" :height="406" bg="rgba(255,255,255,0.2)" />
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<script lang='ts'>
import HomePanel from './home-panel.vue';

import useStore from '@/store';
import { useObserver } from '@/hooks';
export default {
  name: 'home-new',
  components: {
    HomePanel,
  },
  mixins: [],

  // props: {},
  setup(props, context) {
    const { home } = useStore()

    // 调用封装的请求按需加载函数，返回用于绑定DOM的目标元素ref
    const { target } = useObserver(home.getNewGoodList)

    return { home, target }
  },
}
</script>

<style lang='less' scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>