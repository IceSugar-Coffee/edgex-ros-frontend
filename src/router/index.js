import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页', icon: "HomeFilled"}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/teleop1',
    name: 'teleop1',
    component: () => import('../views/teleopViews/TeleopView1.vue')
  },
  {
    path: '/teleop2',
    name: 'teleop2',
    component: () => import('../views/teleopViews/TeleopView2.vue')
  },
  {
    path: '/teleop3',
    name: 'teleop3',
    component: () => import('../views/teleopViews/TeleopView3.vue')
  },
  {
    path: '/roslist',
    name: 'roslist',
    component: () => import('../views/RosView.vue')
  },
  {
    path: "/map",
    name: "map",
    component: () => import('../views/MapView.vue')
  },{
    path: "/mark",
    name: "mark",
    component: () => import('../views/MarkView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
