<template functional>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
.container {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
