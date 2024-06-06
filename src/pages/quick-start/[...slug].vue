<page>
  title: Quick Start
</page>

<script lang="ts">
  import { getPost, getPosts } from '@/composables/posts'
  export default definePageComponent({
    async getStaticPaths() {
      const posts = getPosts()
      return posts.value.map((post) => ({
        // Specify the parameters for the page.
        params: { slug: post.href },

        // Pass any data needed to render the page.
        props: { slug: post.href },
      }))
    },
  })
</script>

<script setup lang="ts">
  import { Post } from '@/composables/posts'

  const props = defineProps<{ slug?: string }>()
  const post = computed((): Post => {
    return getPost(props.slug)
  })
</script>

<template layout="post">
  <component :is="post" />
</template>

<style scoped></style>
