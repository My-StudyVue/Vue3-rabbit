import { defineStore } from 'pinia'

// import request from '@/utils/request'
// 二次封装引用
import { http } from '@/utils/request'
import type { CategoryList, BannerList, GoodsItem } from '@/types'

// 定义axios返回数据的类型
// 原来的request 需要
// interface ApiRes<T = unknown> {
//   msg: string;
//   result: T;
// }

// 定义 Store, 命名建议： useXxxxStore
// 参数1：Store 的唯一标识
// 参数2：配置对象，可以提供 state actions getters
export const useHomeStore = defineStore('home', {
  // 状态,相当于组件的 data
  state() {
    return {
      // 所有分类数据
      categoryList: [] as CategoryList,

      // 轮播图数据
      bannerList: [] as BannerList,

      // 新鲜好物数据
      // 如果 TS 项目某些变量改名重构了
      // 需通过命令 npm run typecheck 主动调用TS检查，提前发现错误
      newGoodList: [] as GoodsItem[],
    }
  },
  // 相当于组件的 computed
  getters: {

  },
  // 函数/方法,相当于组件的 methods
  actions: {
    // 获取分类数据
    async getAllCategories() {
      // 能用， res.data 的返回值类型为 any
      // const res = await request.get("/home/category/head");

      // const res = await request.get<ApiRes<CategoryList>>("/home/category/head");

      // 使用起来简洁很多
      const res = await http<CategoryList>("GET", "/home/category/head");
      // 🎉恭喜已经有类型提醒了
      // 左右类型一致了
      this.categoryList = res.data.result
    },

    // 获取轮播图数据
    async getBannerList() {
      const res = await http<BannerList>('GET', '/home/banner');
      this.bannerList = res.data.result
    },

    // 获取新鲜好物
    async getNewGoodList() {
      const res = await http<GoodsItem[]>('GET', '/home/new');
      this.newGoodList = res.data.result
    }
  },
})

// 默认导出 Store
export default useHomeStore;