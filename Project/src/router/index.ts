import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

// 指定 RouteRecordRaw[] 类型后，书写的时候就有 TS 的类型提示和检查了
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/Layout/index.vue"), //首页布局容器 Layout
    children: [
      {
        path: "/",
        component: () => import("@/views/Home/index.vue")
      },
      {
        path: "/category/:id",
        component: () => import("@/views/Category/index.vue"), //分类
      },
      // {
      //   path: "/goods/:id",
      //   component: () => import("@/views/Goods/index.vue"), //商品详情
      // },
      // {
      //   path: "/cart",
      //   component: () => import("@/views/Cart/index.vue"), //购物车
      // },
      // {
      //   path: "/checkout",
      //   component: () => import("@/views/Checkout/index.vue"), //填写订单
      // },
      // {
      //   path: "/pay",
      //   component: () => import("@/views/Pay/index.vue"), //支付
      // },
      // {
      //   path: "/pay/result",
      //   component: () => import("@/views/Pay/result.vue"), //支付结果
      // },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  }, //登录
  // {
  //   path: "/login/callback",
  //   component: () => import("@/views/Login/callback.vue"),
  // },
  { path: "/test", component: () => import("@/views/Test/index.vue") },
];

// 创建路由实例
const router = createRouter({
  //使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes,
})

export default router