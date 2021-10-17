<template>
  <button type="button" class="button animated" @click.prevent="onClick">
    <span :style="{ color: color }">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: "ButtonQuote",
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  background-color: white;
  cursor: pointer;
}
</style>
