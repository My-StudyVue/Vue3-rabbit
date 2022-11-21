<template>
  <div class="home-banner">
    <XtxSlider :sliders="home.bannerList" auto-play></XtxSlider>
  </div>
</template>

<script lang='ts'>
import useStore from '@/store';
export default {
  name: 'home-banner',
  components: {},
  mixins: [],

  // props: {},
  setup(props, context) {
    const { home } = useStore()
    home.getBannerList()
    return { home }
  },
}
</script>

<style lang='less' scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>