<template>
  <div>
    <!--头部-->
    <div class="header">
      <div class="header_all">
        <div class="inner_all">
          <a href="javascript:void(0)" class="iconfont icon-huitui" :class="{on:$route.path==='/search/brand'}" @click="goto('/search/brand')"></a>
          <span class="allbrand">全部品牌</span>
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
    <!--内容区-->
    <div class="content">
      <div class="allbrands">
        <!--导航—A-Z-->
        <div class="content_nav">
          <div class="content_wrapper">
            <div class="content_menu">
              <span class="menu_item on" name="">A</span>
              <span class="menu_item" name="">B</span>
              <span class="menu_item" name="">C</span>
              <span class="menu_item" name="">D</span>
              <span class="menu_item" name="">E</span>
              <span class="menu_item" name="">F</span>
              <span class="menu_item" name="">G</span>
              <span class="menu_item" name="">H</span>
              <span class="menu_item" name="">I</span>
              <span class="menu_item" name="">G</span>
              <span class="menu_item" name="">K</span>
              <span class="menu_item" name="">L</span>
              <span class="menu_item" name="">M</span>
              <span class="menu_item" name="">N</span>
              <span class="menu_item" name="">O</span>
              <span class="menu_item" name="">P</span>
              <span class="menu_item" name="">Q</span>
              <span class="menu_item" name="">R</span>
              <span class="menu_item" name="">S</span>
              <span class="menu_item" name="">T</span>
              <span class="menu_item" name="">U</span>
              <span class="menu_item" name="">V</span>
              <span class="menu_item" name="">W</span>
              <span class="menu_item" name="">X</span>
              <span class="menu_item" name="">Y</span>
              <span class="menu_item" name="">Z</span>
            </div>
          </div>
        </div>
        <div class="content_list">
          <!--重复大-->
          <div class="brand_items">
            <h2 class="brand_letter">A</h2>
            <!--重复小-->
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!--重复大-->
          <div class="brand_items">
            <h2 class="brand_letter">B</h2>
            <!--重复小-->
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="content_letter">
              <a href="javascript:;">
                <div class="inner_letter">
                  <div class="letter_img">
                    <img src="./images/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="">
                  </div>
                  <div class="letter_hz">
                    <p class="p3">艾尔</p>
                    <p class="p4">中国</p>
                  </div>
                </div>
              </a>
            </div>
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




  /*内容区*/
  .content
    .allbrands
      .content_nav //A-Z
        position fixed
        bottom 0px
        right 4px
        width 10px
        top 0px
        z-index 1
        text-align center
        .content_wrapper
          display table
          height 100%
          .content_menu
            display table-cell
            height 100%
            vertical-align middle
            .menu_item
              display block
              height 12px
              margin-top 2px
              font-size 12px
          .content_menu .on
            color #fe3e3e
            font-weight 700
      .content_list //内容
        background #f3f4f5
        margin-bottom 46px
        .brand_items
          .brand_letter //A h2
            text-indent 15px
            font-size 12px
            color #999
            font-weight 400
            line-height 24px
          .content_letter //图片
            >a
              display block
              background #ffffff
              color #333
              .inner_letter
                overflow hidden
                border-bottom 1px solid #f3f4f5
                margin-right 20px
                padding 10px
                .letter_img
                  position relative
                  text-align center
                  width 30%
                  max-width 150px
                  height 50px
                  border 1px solid #f3f4f5
                  float left
                  img
                    max-width 98%
                    height 40px
                    position absolute
                    top 0px
                    left 0px
                    right 0px
                    display block
                    vertical-align middle
                .letter_hz
                  margin 5px 0 5px 20px
                  float left
                  .p3,.p4
                    font-size 14px
                  .p4
                    color #999

</style>
