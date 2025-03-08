<template>
  <div class="row">
    <a v-for="(image, index) in images" :key="index" :href="image" class="glightbox col-4">
      <img :src="image" class="img-thumbnail" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import axios from 'axios'


let lightbox: ReturnType<typeof GLightbox>
const images = ['../../public/images/100.jpg', '../../public/images/soeun.jpg']
// const images = ref([])
onMounted(async () => {
  // await axios.get('http://localhost:3000/gallery/1').then(res => {
  //   res.data.body.forEach(gallery => {
  //     let image = new Uint8Array(gallery.file.data);
  //     image = new Blob([image], {type : "image/jpg"})
  //     image = URL.createObjectURL(image);
  //     images.value.push(image)
  //   })
  // })
  lightbox = GLightbox({ selector: '.glightbox', closeButton: true, width: 'auto', height: 'auto', draggable: true })
})

onUnmounted(() => {
  if (lightbox) lightbox.destroy()
})
</script>

<style scoped>
</style>
