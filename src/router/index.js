import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";
import scanner from "@/pages/scanner.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: scanner
    },
  ]
})

export default router
