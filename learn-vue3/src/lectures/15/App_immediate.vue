<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("Hello Vue3");
    const reverseMessage = ref("");

    // watch(
    //   message,
    //   (newValue) => {
    //     console.log("즉시 실행함!!!");
    //     reverseMessage.value = newValue.split("").reverse().join("");
    //   },
    //   {
    //     immediate: true,
    //   },
    // );

    const reverseFunction = () => {
      console.log("즉시 실행함!!!");
      reverseMessage.value = message.value.split("").reverse().join("");
    };

    watch(message, reverseFunction);
    reverseFunction(); // 즉시 실행

    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>
