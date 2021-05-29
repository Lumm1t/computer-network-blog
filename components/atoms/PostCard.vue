<template>
  <v-card
    v-if="post"
    class="mx-auto my-5"
    max-width="400"
    :to="`post/${post.slug}`"
  >
    <v-card-title>
      {{ post.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ post.createdAt | formatDate() }},
      {{ post.content | estimatedReadingTime() }}
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import moment from 'moment'
import Vue from 'vue'

export default Vue.extend({
  name: 'PostCard',
  filters: {
    formatDate(value: string) {
      return moment(String(value)).locale('pl').format('LL')
    },
    estimatedReadingTime(value: string) {
      const wpm = 175
      const words = value.trim().split(/\s+/).length
      return Math.ceil(words / wpm) + 'min'
    },
  },
  props: {
    post: {
      type: Object,
      default: undefined,
    },
  },
})
</script>
