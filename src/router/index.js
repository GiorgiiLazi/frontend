import { createRouter, createWebHistory } from 'vue-router'
import JavaScript from '../views/JavaScript.vue'
import CSS from '../views/CSS.vue'
import HTML from '../views/HTML.vue'

const routes = [
  {
    path: '/javascript',
    name: 'javascript',
    component: JavaScript
  },
  {
    path: '/css',
    name: 'css',
    component: CSS
  },
  {
    path: '/html',
    name: 'html',
    component: HTML
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
