import { defineStore } from 'pinia'

import { http } from "@/utils/request";
import type { TopCategory } from "@/types";

export const useCategoryStore = defineStore('category', {
  state() {
    return {
      topCategory: {} as TopCategory,
    }
  },
  actions: {
    async getTopCategory(id: string | string[]) {
      const res = await http<TopCategory>("GET", "/category", { id: id })
      this.topCategory = res.data.result
    }
  }
})