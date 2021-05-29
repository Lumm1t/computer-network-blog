<template>
  <div>
    <v-app-bar elevate-on-scroll fixed>
      <nuxt-link to="/" tag="h1">Kompendium wiedzy o sieciach</nuxt-link>

      <v-spacer></v-spacer>

      <ThemeBtn />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavBar',
})
</script>
