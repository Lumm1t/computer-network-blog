<template>
  <div>
    <v-app-bar elevate-on-scroll fixed>
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
        Kompendium wiedzy o sieciach
      </v-toolbar-title>

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
