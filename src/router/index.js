import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destinos from '../views/Destinos.vue'
import Contato from '../views/Contato.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/destinos', component: Destinos },
  { path: '/contato', component: Contato }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
