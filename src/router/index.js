import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import HomePage from '../views/HomePage.vue'

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
    path:'/homepage',
    name:'homepage',
    component:()=>import('../views/HomePage.vue')
  },
  {
    path:'/echarts',
    name:'echarts',
    component:()=>import('../views/echarts.vue')
  },
  {
    path:'/echartTest',
    name:'echartTest',
    component:()=>import('../views/EchartTest.vue')
  },
  {
    path:'/echartTest2',
    name:'echartTest2',
    component:()=>import('../views/EchartTest2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
