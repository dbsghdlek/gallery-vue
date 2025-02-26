<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/about">about</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/posts">게시글</RouterLink>
          </li>
        </ul>
        <!-- 글쓰기 버튼을 오른쪽 끝으로 -->
        <div class="ms-auto">
          <button class="btn btn-outline-success" type="submit" @click="goPage()">글쓰기</button>
        </div>
      </div>
    </nav>
  </header>
</template>



<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goPage = () => {
    router.push('/posts/create')
  }
</script>

<style lang="scss" scoped>

</style>
