import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/teleop1',
    name: 'teleop1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/teleopViews/TeleopView1.vue')
  },
  {
    path: '/teleop2',
    name: 'teleop2',
    component: () => import(/* webpackChunkName: "about" */ '../views/teleopViews/TeleopView2.vue')
  },
  {
    path: '/teleop3',
    name: 'teleop3',
    component: () => import(/* webpackChunkName: "about" */ '../views/teleopViews/TeleopView3.vue')
  },
  {
    path: '/roslist',
    name: 'roslist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
