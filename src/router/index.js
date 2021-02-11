import Vue from 'vue'
import VueRouter from 'vue-router'

import Adoptions from '@/components/clients/templates/Adoptions';


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Globale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/clients/Globale.vue')
  },
  {
    path: '/adoption',
    name: 'Adoption',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Adoptions
  }
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/admin/Admin.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
