<template>
  <div class="p-3 bg-danger">
    <!-- <button class="btn btn-primary" type="button" v-bind="$attrs">My Button</button> -->
    <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  emits: ["click"],
  setup(props, { emit }) {
    // console.log("context.attrs: ", context.attrs);
    // console.log("class: ", context.attrs.class);
    // console.log("id: ", context.attrs.id);
    // console.log("onClick: ", context.attrs.onClick);
    // context.attrs.onClick();
    const sayhello = () => {
      emit("click");
    };
    return { sayhello };
  },
};
</script>

<style lang="scss" scoped></style>
