import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registar from '../views/Registar.vue'
import Admin from '../views/Admin.vue'
import Erro from '../views/Error.vue'
import Admin_page_piloto from '../views/Admin_page_piloto.vue'
import Admin_page_equipa from '../views/Admin_page_equipa.vue'
import Admin_page_pista from '../views/Admin_page_pista.vue'
import Admin_page from '../views/Admin_page.vue'
import Piloto from '../views/Piloto.vue'
import Equipas from '../views/Equipas.vue'
import Pistas from '../views/Pistas.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'Error',
    component: Erro
  },
  {
    path: '/Piloto',
    // props : true,
    name: 'Piloto',
    component: Piloto,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Registar',
    name: 'Registar',
    component: Registar
  },
  {
    path: '/Admin_page_piloto',
    name: 'Admin_page_piloto',
    component: Admin_page_piloto
  },
  {
    path: '/Admin_page_equipa',
    name: 'Admin_page_equipa',
    component: Admin_page_equipa
  },
  {
    path: '/Admin_page_pista',
    name: 'Admin_page_pista',
    component: Admin_page_pista
  },
  {
    path: '/Admin_page',
    name: 'Admin_page',
    component: Admin_page
  },
  {
    path: '/Equipas',
    name: 'Equipas',
    component: Equipas
  },
  {
    path: '/Pistas',
    name: 'Pistas',
    component: Pistas
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
