import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
  ]
})

export default router
