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
    <HomePanel title="大标题" sub-title="副标题">
      <template #right>
        <XtxMore />
      </template>
      <h2>我是主体内容-默认插槽</h2>
    </HomePanel>
  </div>
</template>

<script lang='ts'>
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
import homePanel from './components/home-panel.vue';

export default {
  name: 'index',
  components: {
    HomeCategory,
    HomeBanner,
    homePanel,
  },
  mixins: [],

  props: {},
  setup(props, context) {

  },
}

</script>
<style lang='less' scoped>

</style>