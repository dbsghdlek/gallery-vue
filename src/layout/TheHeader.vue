<template>
  <header>
    <nav class="navbar navbar-expand-lg container-fluid">
      <a class="navbar-brand ps-3" href="/">소은이랑 나은이랑</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link ps-3" aria-current="page" to="/about">about</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link ps-3" aria-current="page" to="/posts">게시글</RouterLink>
          </li>
        </ul>
<!--        <div class="ms-auto">-->
<!--          <div class="align-items-center">-->
<!--            <i class="btn bi-layout-three-columns" data-bs-toggle="offcanvas" data-bs-target="#sideBar" aria-controls="sideBar" />-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </nav>
  </header>
  <SideBar/>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import SideBar from '@/layout/SideBar.vue'
  const router = useRouter()
  const goPage = () => {
    router.push('/posts/create')
  }
</script>

<style lang="css" scoped>
header * {
  color: #E57373;
  font-weight: bold;
}
.navbar{
  background-color: #d4f173;
}
.sidebar{
  background-color: #d4f173;
}
</style>
