<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit et, deserunt
      voluptate vero provident, hic quo sint itaque ipsam distinctio molestiae! Sint sit dolores, ab
      blanditiis dignissimos optio exercitationem!
    </div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
  setup() {
    // const styleObject = reactive({
    //   color: "red",
    //   fontSize: "13px",
    // });

    const fontSize = ref(13);

    const styleObject = computed(() => {
      return {
        color: "red",
        fontSize: fontSize.value + "px",
      };
    });

    return { styleObject, fontSize };
  },
};
</script>

<style lang="scss" scoped></style>
