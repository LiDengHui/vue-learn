<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vue-slot-1",
  props: {
    opt: {
      default() {
        return {};
      }
    }
  },
  data() {
    console.dir(this);
    return {
      name: "123"
    };
  }
};
</script>

<style>
</style>