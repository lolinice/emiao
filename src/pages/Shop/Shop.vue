<template>
  <div>
    <!--头部-->
    <div class="header">
      <div class="header_all">
        <div class="inner_all">
          <a href="javascript:void(0)" class="iconfont icon-huitui" :class="{on:$route.path==='/search'}" @click="goto('/search')"></a>
          <span class="allbrand">购物车</span>
          <span class="iconfont icon-all"></span>
        </div>
      </div>
      <div class="header_none" style="display: none">
        <span href="javascript:;" class="footer_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
          <span class="footer_icon">
            <i class="iconfont icon-shouye1"></i>
          </span>
          <span>首页</span>
        </span>
        <span href="javascript:;" class="footer_item " :class="{on:$route.path==='/search'}" @click="goto('/search')">
          <span class="footer_icon">
            <i class="iconfont icon-icon-"></i>
          </span>
          <span>分类</span>
        </span>
        <span href="javascript:;" class="footer_item " :class="{on:$route.path==='/shop'}" @click="goto('/shop')">
          <span class="footer_icon">
            <i class="iconfont icon-gouwuche"></i>
          </span>
          <span>购物车</span>
        </span>
        <span href="javascript:;" class="footer_item" :class="{on:$route.path==='/myec'}" @click="goto('/myec')">
          <span class="footer_icon">
            <i class="iconfont icon-shouye"></i>
          </span>
          <span>我的E宠</span>
      </span>
      </div>
    </div>
    <!--下面-->
    <div class="content_kong">
      <div class="inner_kong">
        <div class="kong_msg">
          <div class="kong_img">
            <span class="iconfont icon-gouwuche11"></span>
          </div>
          <div class="kong_text">购物车是空的</div>
          <div class="kong_gg">
            <a href="javascript:">去逛逛</a>
            <a href="javascript:">我的收藏</a>
          </div>
        </div>
      </div>
    </div>
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "http://at.alicdn.com/t/font_595599_eta3nrnj8efav2t9.css"
  @import "../../common/stylus/mixins.styl"
  @import "../../../static/css/reset.css"
  /*头部*/
  .header
    .header_all
      height 50px
      line-height 50px
      position relative
      padding 0 10px
      border-bottom 1px solid #f3f3f3
      background #ffffff
      text-align center
      .inner_all
        >a
          font-size 20px
          position absolute
          top 0px
          left 5px
        .allbrand
          width 90%
          text-overflow ellipsis
          white-space nowrap
          display block
          margin 0 auto
          font-size 18px
        .icon-all
          position absolute
          right 10px
          top 0px
          font-size 20px
          color #dbdbdb
          font-weight 1000

    /*隐藏的*/
    .header_none
      z-index 100
      background-color #fff
      height 45px
      position absolute
      top 50px
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




  /*下面*/
  .content_kong
    .inner_kong
      .kong_msg
        background #ffffff
        padding-bottom 50px
        text-align center
        .kong_img
          .icon-gouwuche11
            margin 50px auto 20px
            display inline-block
            color #dbdbdb
            font-size 100px
        .kong_text
          color #dbdbdb
          text-align center
        .kong_gg
          margin-top 20px
          a
            border 1px solid #999
            border-radius 5px
            height 40px
            line-height 40px
            width 100px
            color #999
            display inline-block




</style>
