<template>
  <a
    class="animated"
    target="_blank"
    :style="{ color: color }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppFooterLink',
  props: ['color','url',]
}
</script>
