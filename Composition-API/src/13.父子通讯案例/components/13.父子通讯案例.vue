<template>
  <WaterFall :list="list"></WaterFall>
</template>

<script lang='ts'>
import { onBeforeMount, reactive } from "@vue/runtime-core";
import WaterFall from "./components/WaterFall.vue";
export default {
  name: "App",
  components: {
    WaterFall,
  },
  setup() {
    let list = reactive([]);
    const getData = () => {
      const data = [
        {
          height: 300,
          background: "red",
        },
        {
          height: 400,
          background: "pink",
        },
        {
          height: 500,
          background: "blue",
        },
        {
          height: 200,
          background: "green",
        },
        {
          height: 300,
          background: "gray",
        },
        {
          height: 400,
          background: "#CC00FF",
        },
        {
          height: 200,
          background: "black",
        },
        {
          height: 100,
          background: "#996666",
        },
        {
          height: 500,
          background: "skyblue",
        },
        {
          height: 300,
          background: "#993366",
        },
        {
          height: 100,
          background: "#33FF33",
        },
        {
          height: 400,
          background: "skyblue",
        },
        {
          height: 200,
          background: "#6633CC",
        },
        {
          height: 300,
          background: "#666699",
        },
        {
          height: 300,
          background: "#66CCFF",
        },
        {
          height: 300,
          background: "skyblue",
        },
        {
          height: 200,
          background: "#CC3366",
        },
        {
          height: 200,
          background: "#CC9966",
        },
        {
          height: 200,
          background: "#FF00FF",
        },
        {
          height: 500,
          background: "#990000",
        },
        {
          height: 400,
          background: "red",
        },
        {
          height: 100,
          background: "#999966",
        },
        {
          height: 200,
          background: "#CCCC66",
        },
        {
          height: 300,
          background: "#FF33FF",
        },
        {
          height: 400,
          background: "#FFFF66",
        },
        {
          height: 200,
          background: "red",
        },
        {
          height: 100,
          background: "skyblue",
        },
        {
          height: 200,
          background: "#33CC00",
        },
        {
          height: 300,
          background: "#330033",
        },
        {
          height: 100,
          background: "#0066CC",
        },
        {
          height: 200,
          background: "skyblue",
        },
        {
          height: 100,
          background: "#006666",
        },
        {
          height: 200,
          background: "yellow",
        },
        {
          height: 300,
          background: "yellow",
        },
        {
          height: 100,
          background: "#33CCFF",
        },
        {
          height: 400,
          background: "yellow",
        },
        {
          height: 400,
          background: "yellow",
        },
        {
          height: 200,
          background: "#33FF00",
        },
        {
          height: 300,
          background: "yellow",
        },
        {
          height: 100,
          background: "green",
        },
      ];
      list = data;
      console.log(list, "==list");
    };
    getData();
    return { list };
  },
};
</script>
<style lang='less' scoped>
#app,
html,
body {
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
}
</style>
