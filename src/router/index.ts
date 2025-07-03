import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path:'/',
        name:'Home',
        component:()=>import('@/pages/Index.vue'),
        
      },
       {
        path:'/dashboard',
        name:'Da',
        component:()=>import('@/pages/Dashboard.vue')
      }
  ]
})

export default router
