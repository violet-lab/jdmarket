import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Category from '@/components/category/Category';
import Find from '@/components/Find';
import Cart from '@/components/cart/Cart';
import Mine from '@/components/Mine.vue';
import Login from '@/components/Login';
import Reg from '@/components/Reg';
import SearchPage from '@/components/SearchPage';
import GoodsDetail from '@/components/GoodsDetail';
Vue.use(Router);

export default new Router({
  mode: 'history',
  scorllBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/home',
    component: Home
  }, {
    path: '/catgory',
    component: Category
  }, {
    path: '/catgory/:id',
    component: Category
  }, {
    path: '/find',
    component: Find
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/mine',
    component: Mine
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Reg
  }, {
    path: '/search',
    component: SearchPage
  }, {
    path: '/detail/:id',
    component: GoodsDetail
  }, {
    path: '/',
    redirect: '/home'
  }, {
    path: '*',
    redirect: '/home'
  }]
});
