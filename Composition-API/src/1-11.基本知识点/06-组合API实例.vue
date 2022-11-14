<template>
  <h1>组合API实例</h1>
  <div>
    <div>坐标</div>
    <div>x:{{ x }}</div>
    <div>y:{{ y }}</div>

    <hr />

    <div>{{ count }}</div>
    <button @click="add">累加1</button>
  </div>
</template>

<script lang='ts'>
// 总结： 体会组合API的写法，尝试组织可读性高的代码。
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";

interface Obj {
  x: number;
  y: number;
}

const useMouse = (): Obj => {
  /**
   * 1.   记录鼠标坐标
   */
  // 1.1  申明一个响应式数据，他是一个对象，包含x、y
  const mouse: Obj = reactive({
    x: 0,
    y: 0,
  });

  // 1.3修改响应式数据
  const move = (e): void => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };

  // 1.2 等dom渲染完毕
  onMounted(() => {
    document.addEventListener("mousemove", move);
  });

  //1.4 组件销毁，删除事件
  onUnmounted(() => {
    document.removeEventListener("mousemove", move);
  });

  return mouse;
};

export default {
  name: "App",
  setup() {
    // /**
    //  * 1.   记录鼠标坐标
    //  */
    // // 1.1  申明一个响应式数据，他是一个对象，包含x、y
    // const mouse = reactive({
    //   x: 0,
    //   y: 0,
    // });

    // // 1.3修改响应式数据
    // const move = (e) => {
    //   mouse.x = e.pageX;
    //   mouse.y = e.pageY;
    // };

    // // 1.2 等dom渲染完毕
    // onMounted(() => {
    //   document.addEventListener("mousemove", move);
    // });

    // //1.4 组件销毁，删除事件
    // onUnmounted(() => {
    //   document.removeEventListener("mousemove", move);
    // });

    // 封装成函数写法
    const mouse: Obj = useMouse();

    const { x, y } = toRefs<Obj>(mouse);

    /**
     * 2.数字累加
     */
    const count = ref<number>(0);
    const add = () => {
      count.value++;
    };

    return { x, y, count, add };
  },
};
</script>
<style lang='less' scoped>
</style>