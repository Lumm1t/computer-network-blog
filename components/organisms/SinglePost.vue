<template>
  <v-container>
    <div v-if="error">{{ error }}</div>

    <v-card
      v-else-if="response && response.post"
      class="mx-auto mt-4"
      width="900"
    >
      <v-card-title class="text-h4">{{ response.post.title }}</v-card-title>

      <v-card-subtitle>
        {{ response.post.createdAt | formatDate() }},
        {{ response.post.content | estimatedReadingTime() }}
      </v-card-subtitle>

      <v-card-text v-html="response.post.content"></v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { request } from '~/datocms'
import moment from 'moment'
import Vue from 'vue'

export default Vue.extend({
  name: 'SinglePost',
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
  data: () => ({
    response: undefined,
    error: undefined,
  }),
  async mounted() {
    try {
      this.response = await request({
        query: `
          query Post {
            post(filter: { slug: { eq: "${this.$route.params.slug}" } }) {
              title
              content
              createdAt
            }
          }
        `,
        variables: {},
        preview: false,
      })
    } catch (error) {
      this.error = error
    }
  },
})
</script>

<style>
img {
  max-width: 600px;
  height: auto;
}
</style>
