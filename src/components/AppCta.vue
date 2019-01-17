<template functional>
  <div class="cta">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppCta'
}
</script>

<style scoped>
.cta {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

@media screen and (min-width: 650px) {
  .cta {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
}
</style>
