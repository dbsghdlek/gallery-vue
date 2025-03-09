
<template>
  <div class="app-container">
    <TheHeader />
    <div class="container text-center">
      <div class="py-4 row">
        <div class="col-6 text-center">
          <h2>소은</h2>
          <button class="btn rounded-circle" @click="$router.push('/gallery/soeun')">
            <img :src="soeunImage" class="col img-thumbnail rounded-circle" alt="...">
          </button>
        </div>
        <div class="col-6 text-center">
          <h2>나은</h2>
          <button class="btn rounded-circle" @click="$router.push('/gallery/naeun')">
            <img :src="naeunImage" class="col img-thumbnail rounded-circle" alt="...">
          </button>
        </div>
      </div>
    </div>
    <RouterView class="ps-5 pe-5 py-4 p-6"/>
  </div>
</template>
<script setup lang="ts">
import TheHeader from '@/layout/TheHeader.vue';
import soeunImage from '../../public/images/soeun.jpg'
import naeunImage from '../../public/images/naeun.jpg'
</script>

<style>
@font-face {
  font-family: 'BMHANNAAir';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'BMHANNAAir', sans-serif !important;
}

</style>

<style scoped>
.app-container {
  width: 100%;
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
