<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      
      <!-- 面板内容 -->
      <ul class="goods-list">
        <li v-for="item in home.hotGoodsList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<script lang='ts'>
import HomePanel from './home-panel.vue'

import useStore from '@/store';
export default {
  name:'home-hot',
  components: {
    HomePanel,
  },
  mixins:[],

  // props: {},
  setup(props,context){
    const {home} = useStore()
    home.getHotGoodList()
    return {home}
  },
}
</script>

<style lang='less' scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>