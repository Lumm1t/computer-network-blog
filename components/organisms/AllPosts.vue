<template>
  <v-container>
    <div v-if="error">{{ error }}</div>

    <div v-else-if="response">
      <div v-for="(post, i) in response.allPosts" :key="i">
        <PostCard :post="post" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { request } from '~/datocms'
import Vue from 'vue'

const query = `
{
  allPosts(orderBy: _createdAt_DESC) {
    title
    content
    slug
    createdAt
  }
}`

export default Vue.extend({
  name: 'AllPosts',
  data: () => ({
    response: undefined,
    error: undefined,
  }),
  async fetch() {
    try {
      this.response = await request({
        query,
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
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
