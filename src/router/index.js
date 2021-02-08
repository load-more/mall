import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('views/home/home.vue')
const category = () => import('views/category/category.vue')
const cart = () => import('views/cart/cart.vue')
const profile = () => import('views/profile/profile.vue')
const detail = () => import("views/detail/detail.vue")

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/category',
      component: category
    },
    {
      path: "/detail/:iid",
      component: detail
    }
  ],
  mode: 'history'
})