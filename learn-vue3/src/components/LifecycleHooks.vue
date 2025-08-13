<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="Hello World!" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifecycleChild v-if="visible"></LifecycleChild>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import LifecycleChild from "./LifecycleChild.vue";

export default {
  components: {
    LifecycleChild,
  },
  setup() {
    // console.log("setup");

    const inputRef = ref(null);
    const message = ref("");
    const visible = ref(false);

    // // 라이프사이클 훅 (2. Mounting 장착단계)
    // onBeforeMount(() => {
    //   console.log("onBeforeMount", inputRef.value);
    // });
    // // onMounted() : 컴포넌트가 마운트 된 이후에 실행
    // onMounted(() => {
    //   console.log("onMounted", inputRef.value.value);
    // });

    // 라이프사이클 훅 (3. Updating 수정단계) : 컴포넌트에서 사용되는 반응형 데이터가 변경되거나 재렌더링이 발생될 때 호출
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate", message.value);
    //   console.log("DOM Content: ", document.querySelector("#message").textContent);
    // });
    // onUpdated(() => {
    //   console.log("onUpdated", message.value);
    //   console.log("DOM Content: ", document.querySelector("#message").textContent);
    // });

    // 라이프사이클 훅 (4. Destruction 소멸단계)
    // onBeforeUnmount() : 컴포넌트가 마운트 해제(제거)되기 직전에 실행
    // onUnmounted() : 컴포넌트가 마운트 해제(제거)된 이후에 실행

    return { inputRef, message, visible };
  },
  // 라이프사이클 훅 (1. Creation 생성단계) :: Vue2 사용 방식 >> vue3에서는 setup()함수 안에서 사용
  // data: () => ({
  //   dataMessage: "data message",
  // }),
  // beforeCreate() {
  //   console.log("컴포넌트가 초기화 될 때 실행되는 Hook");
  //   console.log("beforeCreate", this.dataMessage);
  // },
  // created() {
  //   console.log("created", this.dataMessage);
  // },
};
</script>

<style lang="scss" scoped></style>
