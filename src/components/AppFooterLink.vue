<template>
  <a class="animated" target="_blank" rel="noopener" :style="{ color: color }">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "AppFooterLink",
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>
