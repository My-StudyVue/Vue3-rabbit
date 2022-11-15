<template>
  <div class="card">
    <div class="card-head">
      <div>{{ title }}</div>
      <div>{{ subTitle }}</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Card",
  components: {},
  mixins: [],
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {},
};
</script>
<style lang='less' scoped>
@border: #ccc;
.card {
  width: 300px;
  border: 1px solid @border;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 10px @border;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid @border;
  }
  &-content {
    padding: 10px;
  }
}
</style>