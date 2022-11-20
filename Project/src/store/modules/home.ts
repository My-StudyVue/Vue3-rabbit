import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store, 命名建议： useXxxxStore
// 参数1：Store 的唯一标识
// 参数2：配置对象，可以提供 state actions getters
export const useHomeStore = defineStore('home', {
  // 状态,相当于组件的 data
  state() {
    return {
      money: 15000,
    }
  },
  // 相当于组件的 computed
  getters: {

  },
  // 函数/方法,相当于组件的 methods
  actions: {

  },
})

// 默认导出 Store
export default useHomeStore;