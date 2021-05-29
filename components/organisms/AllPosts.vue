<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <v-container v-else-if="posts">
      <div v-for="(post, i) in posts.allPosts" :key="i">
        <PostCard :post="post" />
      </div>
    </v-container>
  </div>
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
    posts: [],
    error: undefined,
  }),
  async mounted() {
    try {
      this.posts = await request({
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
