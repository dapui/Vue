<template>
  <div></div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("");

    watch(message, (newValue, oldValue) => {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
    });

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
