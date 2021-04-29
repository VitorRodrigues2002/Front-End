import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => 
      import( '../views/About.vue')
  },

  {
    path:'/Profile',
    name:'profile',
    component: () => 
      import('../views/Profile.vue')
  },

  {
    path: '*',
    name: 'Erro',
    component: () => 
      import('../views/Erro.vue')
  },

  {
    path:'/Profiles/:id',
    name:'profiles',
    component: () => 
      import('../views/Profiles.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
