<template>
  <button
    type="button"
    class="button animated"
    @click.prevent="onClick"
  >
    <span :style="{ 'color': color }">
      {{label}}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonQuote',
  props: {
    label: {
      type: String,
      required: true,
      default: 'New Quote'
    },
    color: {
      type: String,
      required: true,
      default: '#8aa651'
    },
    onClick:{
      type: Function,
      required: true,
      // eslint-disable-next-line
      default: () => console.log('Quote Button: No handler attached')
    }
  }
}
</script>

<style scoped>
.button {
  background-color: white;
}
</style>
