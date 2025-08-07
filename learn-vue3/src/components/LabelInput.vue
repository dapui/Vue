<template>
  <div>
    <label>
      {{ label }}
      이름
      <!-- <input v-model="username" type="text" /> -->
      <input
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
        type="text"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label"], // Vue2에서의 value
  emits: ["update:modelValue"], // Vue2에서의 @input
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
