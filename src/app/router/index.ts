import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/HomeView.vue'
import GalleryView from '@/features/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery/:name',
      name: 'gallery',
      component: GalleryView
    },
  ],
})

export default router
