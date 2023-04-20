import notFound from "@/pages/notFound.vue";
import {createRouter, createWebHistory} from 'vue-router'
import auth from "@/pages/auth.vue";
import safetyRules from "@/pages/safety-rules.vue";
import map from "@/pages/map.vue";
import metrikaRules from "@/pages/metrika-rules.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: map
    },
    {
      path: '/safety-rules',
      name: 'safety rules',
      component: safetyRules,
      meta: {
        transition: 'right'
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/metrika-rules',
      name: 'metrika-rules',
      component: metrikaRules,
      meta: {
        transition: 'right'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: notFound,
      meta: {
        footer: true
      }
    },
  ]
})

export default router
