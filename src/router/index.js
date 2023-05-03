import auth from "@/pages/auth.vue";
import map from "@/pages/map.vue";
import metrikaRules from "@/pages/metrika-rules.vue";
import notFound from "@/pages/notFound.vue";
import safetyRules from "@/pages/safety-rules.vue";
import {createRouter, createWebHistory} from 'vue-router'

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
      component: auth,
      meta: {
        transition: 'fade'
      }
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
        transition: 'fade'
      }
    },
  ]
})

export default router
