import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path:'/',
        name:'Home',
        component:()=>import('@/views/Index.vue'),
      },
  ]
})

export default router
