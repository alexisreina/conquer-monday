<template>
  <footer class="page-footer">
    <container>
      <slot></slot>
    </container>
  </footer>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  name: "AppFooter",
  components: {
    Container,
  },
};
</script>

<style scoped>
.page-footer {
  background: white;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}
</style>
