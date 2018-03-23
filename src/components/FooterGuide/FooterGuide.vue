<template>
  <div class="footer_guide">
    <span href="" class="footer_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span class="footer_icon">
        <i class="iconfont icon-shouye1"></i>
      </span>
      <span>首页</span>
    </span>
    <span href="" class="footer_item " :class="{on:$route.path==='/search'}" @click="goto('/search')">
      <span class="footer_icon">
        <i class="iconfont icon-icon-"></i>
      </span>
      <span>分类</span>
    </span>
    <span href="" class="footer_item " :class="{on:$route.path==='/shop'}" @click="goto('/shop')">
      <span class="footer_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span href="" class="footer_item" :class="{on:$route.path==='/myec'}" @click="goto('/myec')">
      <span class="footer_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>我的E宠</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        //跳转到指定路由 push/replace
        this.$router.replace(path)
        //console.log(this); //VueComponent{},$router:VueRouter
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "http://at.alicdn.com/t/font_595599_eta3nrnj8efav2t9.css"
  .footer_guide
    z-index 100
    background-color #fff
    height 45px
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    display flex
    /*justify-content space-around*/
    border-top 1px solid #e7e7e7
    .footer_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items  center
      margin 5px
      color #999999
      &.on
        color #8FBC8F
      span
        font-size 12px
        margin 1px 0
        .iconfont
          font-size 22px



</style>
