<template>
  <div class="page-home">
    <div class="home-enter">
      <div class="container">
        <HomeCategory />
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import HomeCategory from './components/home-category.vue';
import HomeBanner from './components/home-banner.vue';
export default {
  name: 'index',
  components: {
    HomeCategory,
    HomeBanner,
  },
  mixins: [],

  props: {},
  setup(props, context) {

  },
}

</script>
<style lang='less' scoped>

</style>