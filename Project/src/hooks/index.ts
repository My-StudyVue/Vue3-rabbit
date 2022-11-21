import { ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core'

/**
 * 请求按需加载
 * @param apiFn 发送请求函数
 * @returns  🚨 target 用于模板绑定
 */
export const useObserver = (apiFn: () => void) => {
  // 准备个 ref 用于绑定模板中的某个目标元素(DOM节点或组件)
  const target = ref(null)

  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    console.log("是否进入可视区域", isIntersecting);
    if (isIntersecting) {
      // 当目标元素进入可视区域时，才发送请求
      apiFn();
      // 请求已发送，主动停止检查
      stop();
    }
  })

  // 🚨返回 ref 用于模板绑定，建议返回对象格式支持解构获取
  return { target };
}