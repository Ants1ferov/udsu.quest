import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";
import scanner from "@/pages/scanner.vue";
import help from "@/pages/help.vue";
import map from "@/pages/map.vue";
import main from "@/pages/main.vue";

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
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
  ]
})

export default router
