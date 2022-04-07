import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signup from '../views/Signup.vue'
import signin from '../views/SignIn.vue'

const routes = [
  {
    path: '/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
