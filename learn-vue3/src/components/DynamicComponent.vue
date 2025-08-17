<template>
  <div class="container py-4">
    <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
    <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
    <hr />
    <component :is="currentComp" />
    <hr />
    <p>{{ obj1 }}</p>
    <p>{{ obj2 }}</p>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import DynamicApple from "./DynamicApple.vue";
import DynamicBanana from "./DynamicBanana.vue";

// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple); // shallowRef가 ref보다 퍼포먼스가 더 좋다
const obj1 = ref({ name: "홍길동" });
const obj2 = shallowRef({ name: "김길동" }); // 속성에 대해서는 반응하지 않고, 값 자체가 바뀌었을 때만 반응한다
const changeCurrentComp = (comp) => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
