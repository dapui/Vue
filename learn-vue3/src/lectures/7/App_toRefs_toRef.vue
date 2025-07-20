<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";

export default {
  setup() {
    const book = reactive({
      author: "Vue Team",
      year: "2020",
      title: "Vue 3 Guide",
      description: "당신은 지금 바로 이 책을 읽습니다 ;)",
      price: "무료",
    });

    // 반응형 객체에서 속성을 가져오고 싶을 때, 반응형을 잃지 않고 가져오려면 toRefs 또는 toRef를 사용
    // const { author, title } = toRefs(book);
    const author = toRef(book, "author");
    const title = toRef(book, "title");

    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>
