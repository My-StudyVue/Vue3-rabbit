<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in leftCategoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <RouterLink v-for="item2 in item.children" :key="item2.id" to="/">
          {{ item2.name }}
        </RouterLink>

        <!-- 弹层layer位置 -->
        <div class="layer">
          <h4>分类推荐
            <!-- <small> 标签呈现小号字体效果。 -->
            <small>根据您的购买或浏览记录推荐</small>
          </h4>
          <ul>
            <li v-for="good in item.goods" :key="good.id">
              <RouterLink to="/">
                <img :src="good.picture" alt="">
                <div class="info">
                  <p class="name ellipsis-2">{{ good.name }}</p>
                  <p class="desc ellipsis">{{ good.desc }}</p>
                  <p class="price"><i>¥</i>{{ good.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import useStore from '@/store';
import { computed } from '@vue/reactivity';

export default {
  name: 'home-category',
  components: {},
  mixins: [],

  // props: {},
  setup(props, context) {
    // 获取 Pinia 中的 home 模块，分类数据为 home.categoryList 
    const { home } = useStore()

    //计算：处理左侧分类所需的数据格式
    const leftCategoryList = computed(() => {
      return home.categoryList.map(item => {
        return {
          ...item,
          children: item.children.slice(0, 2)
        }
      })
    })

    return { leftCategoryList }
  },
}
</script>

<style lang='less' scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      &:hover {
        background: @primaryColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 1);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: @priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>