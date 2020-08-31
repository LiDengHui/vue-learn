<template>
  <div>
    <slot v-bind="{names}"></slot>
  </div>
</template>

<script>
export default {
  data() {
    console.dir(this);
    return {
      names: ["zhangsan", "lisi", "wanglaowu"]
    };
  }
};
</script>

<style>
</style>`