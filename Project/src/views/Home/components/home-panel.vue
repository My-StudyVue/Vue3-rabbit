<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 左侧标题部分 -->
        <h3>
          {{ title }}
          <small>{{ subTitle }}</small>
        </h3>

        <!-- 右侧内容区域 -->
        <slot name="right"></slot>
      </div>

      <!-- 主体内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'home-panel',
  components: {},
  mixins: [],

  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subTitle: {
      type: String,
      default: ''
    },
  },
  setup(props, context) {

    return {}
  },
}
</script>

<style lang='less' scoped>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>