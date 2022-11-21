// 合并 Pinia 模块
import { useHomeStore } from "./modules/home";
import { useCategoryStore } from "./modules/category";

// 封装 useStore 合并管理所有模块
const useStore = () => {
  return {
    home: useHomeStore(),
    category: useCategoryStore()
  };
};

// 默认导出
export default useStore;