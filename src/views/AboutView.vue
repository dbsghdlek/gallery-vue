<template>
  <div>
    <h2>About View</h2>
    <p>
      {{ $route }}
    </p>
    <button @click="goHome">Home으로 가기</button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const goHome = () => {
    router.push('/')
  }
</script>

<style lang="scss" scoped>

</style>
