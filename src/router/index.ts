import { createRouter, createWebHistory } from 'vue-router'
import Default from "@/layouts/Default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: Default,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('@/views/category/Index.vue'),
        },
        {
          path: 'products',
          name: 'products-main',
          children: [
            {
              path: '',
              name: 'products',
              component: () => import('@/views/product/Index.vue')
            },
            {
              path: ':id',
              name: 'products-detail',
              component: () => import('@/views/product/Detail.vue')
            }
          ]
        }
      ]
    }
  ],
})

export default router
