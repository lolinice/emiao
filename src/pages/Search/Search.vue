<template>
  <div>
    <!--头部-->
    <div class="header">
      <div class="header_left" :class="{on:loginWay}" @click="setLoginWay(true)" >
        <a href="javascript:;">
          <router-link to="/search/item" class="item">分类</router-link>
        </a>
      </div>
      <div class="header_right " :class="{on:!loginWay}" @click="setLoginWay(false)">
        <a href="javascript:;">
          <router-link to="/search/brand" class="brand">品牌</router-link>
        </a>
      </div>
      <a href="javascript:;" class="iconfont icon-fangdajing"></a>
    </div>
    <router-view/>
    <!--内容区-->

  </div>
</template>

<script>
  export default {
    data(){
      return {
        loginWay:true //true代表分类，false代表列表
      }
    },
    methods:{
      setLoginWay(loginWay){
        this.loginWay = loginWay
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
    border-bottom 1px solid #cbcbcb
    position fixed
    top 0px
    left 50%
    transform translateX(-50%)
    height 40px
    padding-bottom 2px
    z-index 11
    background #ffffff
    width 100%
    .header_left,.header_right
      font-size 13px
      font-weight 700
      display inline-block
      width 30%
      height 40px
      line-height 40px
      box-sizing border-box
    .header_left
      float left
      margin-left 50px
      >a
        float right
      &.on a
        color #ed4044
    .header_right
      float right
      margin-right  50px
      >a
        float left
        .brand
          display inline-block
          height 40px
          padding 0px 6px
          cursor pointer
          color #333
      &.on a
        color #ed4044
    .icon-fangdajing
      position absolute
      top 10px
      right 10px
      font-size 18px


</style>
