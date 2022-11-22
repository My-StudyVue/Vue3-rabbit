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

        <!-- 鼠标悬浮展示顶级类目 -->
        <div class="layer">
          <ul>
            <li v-for="item in category.topCategory?.children" :key="item.id">
              <RouterLink :to="`/category/${item.id}`" :key="$route.fullPath">
                <img :src="item.picture" alt="" />
                <p class="name">{{ item.name }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
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
    const { category, home } = useStore()

    let curIndex = ref(-1)

    const itemClick = (index: number) => {
      curIndex.value = index
    }

    return { home, category, itemClick, curIndex }
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
  }
}

.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 1;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;

    li {
      width: 110px;
      text-align: center;
    }
  }
}
</style>