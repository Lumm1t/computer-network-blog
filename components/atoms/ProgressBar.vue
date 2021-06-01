<template>
  <v-progress-linear
    absolute
    bottom
    color="grey darken-1"
    :value="width"
  ></v-progress-linear>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProgressBar',
  data: () => ({
    scrolled: 0,
    docHeight: 0,
    width: 0,
  }),
  watch: {
    $route() {
      this.width = 0
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler() {
      this.scrolled =
        document.body.scrollTop || document.documentElement.scrollTop

      this.docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      this.width = (this.scrolled / this.docHeight) * 100
    },
  },
})
</script>
