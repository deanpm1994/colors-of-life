import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { cities } from '@/data/palette'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:color',
      name: 'color',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ColorView.vue')
    },
    ...cities.map((city) => ({
      path: '/' + city.city.replace(' ', '-').toLowerCase(),
      name: 'country' + city.city.replace(' ', '-').toLowerCase(),
      props: { city },
      component: () => import('../views/CityColorsView.vue')
    })),
  ]
})

export default router
