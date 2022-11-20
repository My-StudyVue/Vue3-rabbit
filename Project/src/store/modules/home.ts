import { defineStore } from 'pinia'

import request from '@/utils/request'
import type { CategoryList } from '@/types'

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
      const res = await request.get('/home/category/head')
      this.categoryList = res.data.result
    }
  },
})

// 默认导出 Store
export default useHomeStore;