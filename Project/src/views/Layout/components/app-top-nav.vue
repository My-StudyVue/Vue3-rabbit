<template>
  <!-- nav标签是html5版本中新增的标签，是使用来定义导航链接的部分 -->
  <nav>
    <div class="app-top-nav">
      <ul>
        <li>
          <a href="javascript:;"><i class="iconfont icon-user"></i>黑马先锋</a>
        </li>
        <li><a href="javascript:;">退出登录</a></li>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">免费注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang='ts'>
export default {
  name: 'app-top-nav',
  components: {},
  mixins: [],
  props: {},
  setup(props, context) {
    return 
  },
}
</script>

<style lang='less' scoped>
.app-top-nav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @primaryColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>