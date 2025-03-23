import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import GalleryView from '@/pages/GalleryView.vue'
import TimeTable from '@/pages/TimeTable.vue'

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
    {
      path: '/timetable',
      name: 'timetable',
      component: TimeTable
    }
  ],
})

export default router
