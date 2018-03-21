import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Shop from '../pages/Shop/Shop.vue'
import Myec from '../pages/Myec/Myec.vue'
import Brand from '../pages/Brand/Brand.vue'
import List from '../pages/List/List.vue'

Vue.use(VueRouter)

//向外暴露vueRouter对象 (路由器对象)
  // --里面配置路由，多个路由是数组，每一个路由又是一个对象
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home, //组件
    },
    {
      path:'/search',
      component:Search, //组件
    },
    {
      path:'/shop',
      component:Shop, //组件
    },
    {
      path:'/myec',
      component:Myec, //组件
    },
    {
      path:'/brand',
      component:Brand,
    },
    {
      path:'/list',
      component:List,
    },
    {
      path:'/',
      redirect:'/home'
    },

  ]
})
