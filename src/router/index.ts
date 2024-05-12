import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/LibrarySPA'
    },
    {
      path: '/LibrarySPA',
      name: 'home_github_pages',
      component: HomeView
    },
    {
      path: '/AddBook',
      name: 'add',
      component: () => import('../views/AddBookView.vue')
    }
  ]
})

export default router
