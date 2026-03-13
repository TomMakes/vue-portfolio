import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about_me/AboutView.vue'),
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: () => import('../views/front_end/FrontEndLanding.vue'),
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('../views/back_end/BackEndLanding.vue'),
    },
    {
      path: '/fullstack',
      name: 'fullstack',
      component: () => import('../views/full_stack/FullStackLanding.vue'),
    },
  ],
})

export default router
