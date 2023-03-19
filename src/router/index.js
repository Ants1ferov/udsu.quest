import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";
import scanner from "@/pages/scanner.vue";
import safetyRules from "@/pages/safety-rules.vue";
import map from "@/pages/map.vue";

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
      path: '/safety-rules',
      name: 'safety-rules',
      component: safetyRules
    },
  ]
})

export default router
