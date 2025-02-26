<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage()">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goEditPage()">수정</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter();
  const goListPage = () => {
    router.push({
      name: 'posts'
    });
  }
  const goEditPage = () => {
    router.push({
      name: 'postEdit',
      params: { id: route.params.id }
    });
  }
</script>

<style lang="scss" scoped>

</style>
