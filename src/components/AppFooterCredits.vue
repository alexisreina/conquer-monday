<template>
  <p class="credits">
    <span>Made with love by </span>

    <app-footer-link
      href="https://twitter.com/AlexisReina"
      title="@AlexisReina"
      :color="color"
    >Alexis Reina</app-footer-link>.

    <br />
    
    <span>Colors and Quotes from </span>

    <app-footer-link
      href="https://creativemarket.com/blog/2015/12/21/30-inspiring-quotes-to-conquer-monday-once-and-for-all"
      title="Creative Market"
      :color="color"
    >this Creative Market Post</app-footer-link>.
    
    <br />

    <span>Twitter icon made by </span>
    
    <app-footer-link
      href="http://www.flaticon.com/authors/elegant-themes"
      title="Elegant Themes"
      :color="color"
    >Elegant Themes</app-footer-link>
    
    <span>from</span>

    <app-footer-link
      class="animated"
      href="http://www.flaticon.com"
      title="Flaticon"
      :color="color"
    >www.flaticon.com</app-footer-link>
    
    <span>licensed by </span>

    <app-footer-link
      class="animated"
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      :color="color"
    >CC BY 3.0</app-footer-link>
  </p>
</template>

<script>
import AppFooterLink from '@/components/AppFooterLink.vue';

export default {
  name: 'AppFooterCredits',
  components: {
    AppFooterLink
  },
  props: {
    color: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.credits {
  margin-top: 1.5rem;
  font: normal 87.5%/1.4 Open Sans, sans-serif;
  color: #66757f
}
</style>

