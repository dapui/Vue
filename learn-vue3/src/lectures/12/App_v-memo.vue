<template>
  <!-- v-memo는 성능 최적화를 할 때 사용 -->
  <div v-memo="[subscribers, views]">
    <p>subscribers: {{ subscribers }}</p>
    <p>views: {{ views }}</p>
    <p>likes: {{ likes }}</p>
  </div>
  <button @click="subscribers++">Subs++</button>
  <button @click="views++">Views++</button>
  <button @click="likes++">Likes++</button>
  <div>
    <p>subscribers: {{ subscribers }}</p>
    <p>views: {{ views }}</p>
    <p>likes: {{ likes }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);

    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
