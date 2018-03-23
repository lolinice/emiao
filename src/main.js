import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router'
//引入mockSever
import './mock/MockSever'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),  /*渲染*/
  router, //结果 所有路由组件都多了两个属性$route路由/$router路由器
})
