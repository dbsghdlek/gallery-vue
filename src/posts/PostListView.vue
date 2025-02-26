<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem :title="post.title" :content="post.content" :created-at="post.created_at" @click="goPage(post.id)"></PostItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import PostItem from '@/components/posts/PostItem.vue'
import { ref } from 'vue'
type Post = {
  id: number,
  title: string,
  content: string,
  created_at: string
}
const router = useRouter()
const posts = ref<Post[]>(
  [
    {id: 1, title: 'post 1', content: 'content 1', created_at: '2020-01-01'},
    {id: 2, title: 'post 2', content: 'content 2', created_at: '2020-01-01'},
    {id: 3, title: 'post 3', content: 'content 3', created_at: '2020-01-01'}
  ]
)

const goPage = (id: number)=> {
  router.push({
    name: 'postDetail',
    params: {
      id: id,
    }
  });
}
</script>

<style lang="scss" scoped>

</style>
