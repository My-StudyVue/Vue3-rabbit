<template>
  <div class="home-new">
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>

      <!-- 面板内容 -->
      <ul class="goods-list">
        <li v-for="item in home.newGoodList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core'

import HomePanel from './home-panel.vue';

import useStore from '@/store';
export default {
  name: 'home-new',
  components: {
    HomePanel,
  },
  mixins: [],

  // props: {},
  setup(props, context) {
    const { home } = useStore()

    // 通过 ref 获得组件实例
    const target = ref(null)

    const { stop } = useIntersectionObserver(
      // target 被检测的目标元素
      target,
      // isIntersecting 是否进入可视区域
      ([{ isIntersecting }]) => {
        // 在此处可根据isIntersecting来判断，然后做业务
        console.log('是否进入可视区域', isIntersecting);
        if (isIntersecting) {
          home.getNewGoodList();

          // 停止重复监听防止重复调用接口
          stop()
        }
      })
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