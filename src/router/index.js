import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Brand from '../pages/Search/Brand/Brand.vue'
import Item from  '../pages/Search/Item/Item.vue'

import Shop from '../pages/Shop/Shop.vue'
import Myec from '../pages/Myec/Myec.vue'

import List from '../pages/List/List.vue'

Vue.use(VueRouter)

//向外暴露vueRouter对象 (路由器对象)
  // --里面配置路由，多个路由是数组，每一个路由又是一个对象
export default new VueRouter({
  routes:[
    {
      path:'/home', //首页
      component:Home, //组件
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',//分类
      component:Search, //组件
      meta:{
        showFooter:true
      },
      children:[
        {
          path:'/search/brand', //品牌页
          component:Brand,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/search/item', //分类页
          component:Item,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/', //品牌页
          redirect:'/search/item',
          meta:{
            showFooter:true
          }
        }
      ]
    },
    {
      path:'/shop', //购物车
      component:Shop, //组件

    },
    {
      path:'/myec', //我的
      component:Myec, //组件
    },
    {
      path:'/list', //全部页
      component:List,
    },
    {
      path:'/',
      redirect:'/home'
    },

  ]
})
