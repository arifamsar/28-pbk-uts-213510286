import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import AboutView from '../views/AboutView.vue'
import MyApp from '../views/MyApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: MyApp
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router