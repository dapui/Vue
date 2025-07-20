<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <button v-on:click="increment">Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    // reactive 함수는 객체 타입에만 동작. 기본타입(string, number 등)은 동작 ref 함수 사용
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });
    const increment = () => {
      state.count++;
      state.deep.count++;
    };

    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
