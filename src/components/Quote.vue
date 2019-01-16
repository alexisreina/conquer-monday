<template>
  <blockquote class="quote">
    <p class="quote__body" v-html="text"></p>
    
    <footer class="quote__footer" v-if="author">
      <cite class="quote__cite">
        – {{author}} –
      </cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Loading...'
    },
    author: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.quote {
  max-width: 648px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  quotes: "“" "”" "‘" "’";
}

.quote::before {
  font-size: 86px;
  font-family: Georgia, serif;
  line-height: 1.5rem;
  content: open-quote;
  color: rgba(255,255,255,0.4);
}

.quote__body {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 150%;
  letter-spacing: 0.085em;
}

.quote__cite {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 112.5%;
  letter-spacing: 0.085em
}

@media screen and (min-width: 650px) {
  .quote::before {
    font-size: 100px;
    line-height: 4rem;
  }
  .quote__body {
    font-size: 220%;
    margin-bottom: 3rem;
  }
  .quote__cite {
    font-size: 125%;
  }
}
</style>

