import { defineStore } from 'pinia'

// import request from '@/utils/request'
// 二次封装引用
import { http } from '@/utils/request'
import type { CategoryList } from '@/types'

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
    }
  },
  // 相当于组件的 computed
  getters: {

  },
  // 函数/方法,相当于组件的 methods
  actions: {
    async getAllCategories() {
      // 能用， res.data 的返回值类型为 any
      // const res = await request.get("/home/category/head");

      // const res = await request.get<ApiRes<CategoryList>>("/home/category/head");

      // 使用起来简洁很多
      const res = await http<CategoryList>("GET", "/home/category/head");
      this.categoryList = res.data.result
    }
  },
})

// 默认导出 Store
export default useHomeStore;