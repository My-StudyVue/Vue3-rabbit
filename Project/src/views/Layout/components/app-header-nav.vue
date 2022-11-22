<template>
  <ul class="app-header-nav">
    <li class="home" @click="itemClick(-1)">
      <RouterLink to="/">首页</RouterLink>
    </li>

    <template v-if="home.categoryList.length > 0">
      <li v-for="(item, index) in home.categoryList" :key="item.id" @click="itemClick(index)">
        <RouterLink :to="`/category/${item.id}`" :key="$route.fullPath" :class="curIndex === index ? 'active' : ''">{{
            item.name
        }}</RouterLink>
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
import { ref } from 'vue';

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

    let curIndex = ref(0)

    const itemClick = (index: number) => {
      curIndex.value = index
    }
    return { home, itemClick, curIndex }
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

      &.active {
        color: @primaryColor;
        border-bottom: 1px solid @primaryColor;
      }
    }

    // &.active {
    //   color: @primaryColor;
    //   border-bottom: 10px solid @primaryColor;
    // }
  }
}
</style>