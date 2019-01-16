<template functional>
  <footer class="page-footer">
    <container>
      <slot></slot>
    </container>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.page-footer {
  background: white;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}
</style>
