import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/pages/auth.vue";
import safetyRules from "@/pages/safety-rules.vue";
import map from "@/pages/map.vue";
import test from "@/components/UI/test.vue";
import account from "@/pages/account.vue";

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
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})

export default router
