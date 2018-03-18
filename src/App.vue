<template>
  <div id="app">
    <!--显示当前路由组件-->
    <router-view></router-view>
    <!--3.写标签-->
    <FooterGuide/>
  </div>
</template>

<script>
  /*1.引入*/
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    /*2.映射成标签*/
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
