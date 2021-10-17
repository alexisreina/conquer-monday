<template>
  <button class="button" @click="onClick">
    <slot class="icon"></slot>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ButtonTwitter",
  props: {
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
      // eslint-disable-next-line
      default: () => console.log('Tweet Button: No handler attached')
    },
  },
};
</script>

<style scoped>
.button {
  position: relative;
  background-color: #55acee;
  color: white;
  padding-left: 48px;
  cursor: pointer;
}

.icon {
  width: 18px;
  position: absolute;
  left: 16px;
  top: 13px;
}
</style>
