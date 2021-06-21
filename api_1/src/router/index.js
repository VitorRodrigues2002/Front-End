import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Registar from '../views/Registar.vue'
import Admin from '../views/Admin.vue'
import Erro from '../views/Error.vue'
import Admin_page from '../views/Admin_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/Produto',
    props : true,
    name: 'Produto',
    component: Produto
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registar',
    name: 'Registar',
    component: Registar
  },

  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '*',
    name: 'Error',
    component: Erro
  },

  {
    path: '/Admin_page',
    name: 'Admin_page',
    component: Admin_page
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
