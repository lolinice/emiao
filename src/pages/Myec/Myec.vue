<template>
  <div>
    <div class="header">
      <div class="inner_header">
        <div class="header_top">
          <router-link to="/home" class="iconfont icon-huitui"></router-link>
          <div class="top_zhuce">
            <a href="javascript:;">注册</a>
          </div>
        </div>
        <div class="header_logo">
          <img src="./images/logo.png" alt="">
        </div>
        <div class="header_bottom">
          <ul class="header_list">
            <li :class="{on:loginWay}" @click="setLoginWay(true)">
              <a href="javascript:;">普通登陆</a>
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </li>
            <li :class="{on:!loginWay}" @click="setLoginWay(false)">
              <a href="javascript:;">手机动态密码登陆</a>
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content_number">
        <div class="inner_number">
          <!--普通登陆-->
          <form action="" :class="{on:loginWay}">
            <div class="number_form">
              <ul class="number_list">
                <li class="number_item">
                  <span class="iconfont icon-icon--"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名">
                </li>
                <li class="number_item">
                  <span class="iconfont icon-mima"></span>
                  <input type="text" placeholder="请输入密码">
                </li>
              </ul>
            </div>
          </form>
          <!--手机动态密码登陆-->
          <form action="" id="newlogin_form" :class="{on:!loginWay}">
            <div class="number_form">
              <ul class="number_list">
                <li class="number_item">
                  <span class="iconfont icon-icon--"></span>
                  <input type="text" class="number_input" placeholder="已注册的手机号">
                </li>
                <li class="number_item">
                  <span class="iconfont icon-mima"></span>
                  <input type="text" class="number_input" placeholder="请输入图片内容">
                  <span class="yanzhengma">
                    <img src="./images/seccode.jpg" alt="">
                  </span>
                </li>
                <li class="number_item">
                  <span class="iconfont icon-mima"></span>
                  <input type="text" class="number_input" placeholder="动态密码">
                  <a href="javascript:;" class="dtyzm">获取动态密码</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <!--忘记密码-->
      <div class="content_forget">
        <a href="javascript:;">忘记密码?</a>
      </div>
      <!--登陆-->
      <div class="content_login">
        <a href="javascript:;">登&nbsp&nbsp&nbsp录</a>
      </div>
      <div style="height: 80px"></div>
      <!--其他登陆-->
      <div class="other_login">
        <div class="hezuo">
          <b>合作网站登陆</b>
        </div>
        <ul class="other_list">
          <li>
            <a href="javascript:;" class="iconfont icon-zhifubao"></a>
          </li>
          <li>
            <a href="javascript:;" class="iconfont icon-qqtb"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        loginWay:true //true代表普通登陆，false代表动态密码登陆
      }
    },
    methods:{
      goto(path){
        //跳转到指定路由 push/replace
        this.$router.replace(path)
        //console.log(this); //VueComponent{},$router:VueRouter
      },
      setLoginWay(loginWay){
        this.loginWay = loginWay
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "http://at.alicdn.com/t/font_595599_fifhwrwfp0gam7vi.css"
  @import "../../common/stylus/mixins.styl"
  @import "../../../static/css/reset.css"
  /*头部*/
  .header
    .inner_header
      background url("./images/2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
      background-size 100% 100%
      .header_top
        height 50px
        line-height 50px
        position relative
        text-align center
        >a
          position absolute
          top 0px
          left 5px
          font-size 20px
          color #ffffff
        .top_zhuce
          position absolute
          right 10px
          >a
            color #ffffff
      .header_logo
        padding 15px 0 20px 0px
        img
          display block
          margin auto
          width 20%
          vertical-align middle
      .header_bottom
        background-color rgba(255,255,255,0.3)
        .header_list
          overflow hidden
          li
            width 50%
            text-align center
            height 44px
            line-height 44px
            float left
            position relative
            >a
              display block
              font-size 15px
              color #ffffff
            >i
              display none
            &.on>i
              display block
              color #ffffff
              font-size 38px
              bottom -16px
              left 0px
              right 0px
              position absolute




  /*内容区*/
  .content
    background #ffffff
    .content_number //普通登陆
      background #ffffff
      margin 0 20px 0 20px
      .inner_number
        form
          display none
          &.on
            display block
          .number_form
            .number_list
              .number_item
                color #dddddd
                padding 12px 0 12px 30px
                border-bottom 1px solid #e2e2e2
                position relative
                .iconfont
                  float left
                  font-size 20px
                  margin 1px 0 0 -25px
                  display inline
                .number_input
                  outline none //取消输入框
                  width 100%
                  font-size 15px
                  border none
                  font-family "Microsoft Yahei",tahoma,arial
                  color #666
                  padding 0px
                  height 21px
                  display block
                .yanzhengma
                  display block
                  position absolute
                  top 7px
                  right 0px
                .dtyzm
                  color #ff4259
                  background #ffffff
                  position absolute
                  right 0px
                  top 7px
                  border-radius 3px
                  width 100px
                  text-align center
                  padding 10px 0
                  font-size 10px
                  border 1px solid #eb4c33
                input::-webkit-input-placeholder
                  color #dddddd
                input:-moz-placeholder
                  color #dddddd
                input::-moz-placeholder
                  color #dddddd
                input:-ms-input-placeholder
                  color #dddddd




    .content_forget //忘记密码
      padding 15px 30px 15px 30px
      >a
        color #898989
        font-size 14px
        float right
    .content_login //登陆
      margin 10px 15px 0 15px
      text-align center
      >a
        font-size 15px
        text-align center
        padding 10px 0
        background #2ec975
        border-radius 5px
        display block
        color #ffffff
    .other_login //其他登陆
      .hezuo
        color #d7d7d7
        text-align center
        margin-top 20px
        b
          font-weight normal
      .other_list
        padding 20px 0
        display flex
        justify-content space-around
        >li a
          display block
          font-size 50px
          color #00A0E9



</style>
