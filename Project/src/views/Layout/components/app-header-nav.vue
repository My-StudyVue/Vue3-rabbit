<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>

    <template v-if="home.categoryList.length > 0">
      <li v-for="item in home.categoryList" :key="item.id">
        <a href="#">{{ item.name }}</a>
      </li>
    </template>
    <template v-else>
      <li v-for="i in 9" :key="i">
        <XtxSkeleton :width="60" :height="32" style="margin-right: 5px" bg="rgba(0,0,0,0.2)" />
      </li>
    </template>
  </ul>
</template>

<script lang='ts'>
import useStore from '@/store';

export default {
  name: 'app-header-nav',
  /**
   * 报错信息
   * 不能将类型“{}”分配给类型“ComponentProps<DefineComponent<Readonly<ComponentPropsOptions<Data>>, { home: Store<"home", { categoryList: CategoryList; }, {}, { getAllCategories(): Promise<...>; }>; }, ... 9 more ..., { ...; } | {}>>”。
   * 
   * 解决：
   * 注释 props: {},
   */
  components: {},
  mixins: [],

  // props: {},
  setup(props, context) {
    const { home } = useStore()
    return { home }
  },
}
</script>

<style lang='less' scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: @primaryColor;
        border-bottom: 1px solid @primaryColor;
      }
    }
  }
}
</style>