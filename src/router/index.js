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
      component: home,
      meta: {
        show: true
      }
    },
    {
      path: '/cart',
      component: cart,
      meta: {
        show: true
      }
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        show: true
      }
    },
    {
      path: '/category',
      component: category,
      meta: {
        show: true
      }
    },
    {
      path: "/detail/:iid",
      component: detail,
      meta: {
        show: false
      }
    }
  ],
  mode: 'history'
})