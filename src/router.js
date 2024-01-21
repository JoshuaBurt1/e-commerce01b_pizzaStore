import { createRouter, createWebHistory } from 'vue-router'
import IndexView from './components/IndexView.vue'
import SuccessView from './components/SuccessView.vue'

const routes = [
  { path: '/', component: IndexView },
  { path: '/success', component: SuccessView },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router