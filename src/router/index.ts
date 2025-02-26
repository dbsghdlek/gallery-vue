import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostCreateView from '@/posts/PostCreateView.vue'
import AboutView from '@/views/AboutView.vue'
import PostEditView from '@/posts/PostEditView.vue'
import PostDetailView from '@/posts/PostDetailView.vue'
import PostListView from '@/posts/PostListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView
    },
    {
      path: '/posts/create',
      name: 'postCreate',
      component: PostCreateView
    },
    {
      path: '/posts/:id',
      name: 'postDetail',
      component: PostDetailView
    },
    {
      path: '/posts/:id/edit',
      name: 'postEdit',
      component: PostEditView
    }
  ],
})

export default router
