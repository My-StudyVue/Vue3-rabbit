<template>
  <div class="page-home">
    <!-- 首屏 -->
    <div class="home-enter">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>

    <!-- 楼层面板组件和 home-entry 同级 -->
    <HomeNew />
  </div>
</template>

<script lang='ts'>
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
import HomeNew from './components/home-new.vue';

export default {
  name: 'index',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
  },
  mixins: [],

  props: {},
  setup(props, context) {

  },
}

</script>
<style lang='less' scoped>

</style>