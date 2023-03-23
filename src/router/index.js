import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/views/auth.vue";
import safetyRules from "@/views/safety-rules.vue";
import map from "@/views/map.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
    {
      path: '/safety-rules',
      name: 'safety rules',
      component: safetyRules
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
  ]
})

export default router
