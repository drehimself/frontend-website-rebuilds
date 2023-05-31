import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/laravel-frontend',
      name: 'laravel-frontend',
      component: () => import('../views/LaravelFrontend.vue'),
    },
  ],
})

export default router
