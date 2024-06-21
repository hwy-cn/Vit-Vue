import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

import Home from '@/view/Home/index.vue'
import Resume from '@/view/Resume/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/resume',
    component: Resume,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
