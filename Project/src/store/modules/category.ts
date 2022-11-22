import { defineStore } from 'pinia'

import { http } from "@/utils/request";
import type { TopCategory } from "@/types";

export const useCategoryStore = defineStore('category', {
  state() {
    return {
      topCategory: {} as TopCategory,
    }
  },
  // 定义的 getters，第一个参数就是该容器的 state
  getters: {
    //  修改当前一级分类下的open数据为true/false
    // isShow(state) {
    //   return (id: string | string[]) => {
    //     console.log(state);
    //     return state.topCategory.id === id
    //   }
    // },
  },
  actions: {
    // 获取顶级分类数据
    async getTopCategory(id: string | string[]) {
      const res = await http<TopCategory>("GET", "/category", { id: id })
      this.topCategory = res.data.result
    },
  }
})