<template>
  <div class="row">
    <a v-for="(image, index) in images" :key="index" :href="image.fileUrl" class="glightbox col-4">
      <img :src="image.fileUrl" class="img-thumbnail" width="800" height="800"/>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import axios from 'axios'


let lightbox: ReturnType<typeof GLightbox>
// const images = ['http://localhost:3000/resource/100.jpg', 'http://localhost:3000/resource/test.jpg']
const images = ref([])

onMounted(async () => {
  const galleryInfoList  = await axios.get('http://localhost:3000/gallery/1')
  galleryInfoList.data.body.forEach((galleryInfo) => {
    galleryInfo.fileUrl = `http://localhost:3000/resource/${galleryInfo.fileName}`
  })
  images.value = galleryInfoList.data.body;
})

watch(images, async () => {
  if (lightbox) {
    lightbox.destroy() // 기존 인스턴스 제거
  }
  await nextTick()

  lightbox = GLightbox({
    selector: '.glightbox',
    closeButton: true,
    draggable: true,
    width: 'auto',  // 고정된 크기 대신 자동 크기 조절
    height: 'auto',
  })
})

onUnmounted(() => {
  images.value.forEach(url => {
    URL.revokeObjectURL(url)
  })
  if (lightbox) lightbox.destroy()
})
</script>

<style scoped>
.glightbox img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin: auto;
}
</style>
