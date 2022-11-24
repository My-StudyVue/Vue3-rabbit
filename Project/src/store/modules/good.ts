import { defineStore } from 'pinia'

import { http } from '@/utils/request'
import type { GoodsDetail } from '@/types'

export const useGoodsStore = defineStore('goods', {
  state() {
    return {
      goodsDetail: {} as GoodsDetail,
    }
  },
  actions: {
    // 获取商品详情
    async getGoodsDetails(id: string | string[]) {
      const res = await http<GoodsDetail>("GET", "/goods", { id });
      this.goodsDetail = res.data.result
    }
  }
})