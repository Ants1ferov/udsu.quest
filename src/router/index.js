import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";
import scanner from "@/pages/scanner.vue";
import safetyRules from "@/pages/safety-rules.vue";
import map from "@/pages/map.vue";
import account from "@/pages/account.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth,
      meta:{
        layout: "not-reg"
      }
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
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})

export default router
