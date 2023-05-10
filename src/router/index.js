import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import AboutView from '../views/AboutView.vue'
import MyApp from '../views/MyApp.vue'

const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPostition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  }
}) 

export default router