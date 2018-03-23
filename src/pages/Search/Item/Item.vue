<template>
  <div>
    <!--内容区-->
    <div class="content">
      <!--内容区左-->
      <div class="content_left">
        <div class="inner_content">
          <ul class="inner_list">
            <li class="inner_item on">为您推荐</li>
            <li class="inner_item">E宠国际</li>
            <li class="inner_item">狗狗主粮</li>
            <li class="inner_item">狗狗零食</li>
            <li class="inner_item">狗狗服饰</li>
            <li class="inner_item">狗狗窝垫</li>
            <li class="inner_item">狗狗生活</li>
            <li class="inner_item">狗狗玩具</li>
            <li class="inner_item">狗狗保健</li>
            <li class="inner_item">狗狗医疗</li>
            <li class="inner_item">狗狗牵引</li>
            <li class="inner_item">狗狗美容</li>
            <li class="inner_item">狗狗周边</li>
            <li class="inner_item">狗狗清洁</li>
          </ul>
        </div>
      </div>
      <!--内容区右-->
      <div class="content_right">
        <div class="inner_right">
          <a href="javascript:;">热门分类
            <img src="../images/cate_right_img.png" alt="">
          </a>
          <ul class="inner_right_list">
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
            <li class="inner_right_item">
              <a href="javascript:;">
                <div class="right_item_img">
                  <img src="../images/0f972761c08a37c8baff88fa9302053d.jpg" alt="">
                </div>
                <p>进口狗粮</p>
              </a>
            </li>
          </ul>
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
  @import "../../../common/stylus/mixins.styl"
  @import "../../../../static/css/reset.css"
  /*内容区*/
  .content
    .content_left
      position fixed
      top 40px
      left 0px
      overflow-y scroll
      bottom 0px
      padding-bottom 45px
      border-right 5px solid #f3f4f5
      background #ffffff
      .inner_content
        .inner_list
          list-style none
          box-sizing border-box
          .inner_item
            padding 20px 0
            border-bottom: 1px solid #f3f4f5
            width 70px
            font-size 13px
            text-overflow ellipsis
            white-space: nowrap
            overflow hidden
            text-align center
        .inner_list .on
          color #ed4044
    .content_right
      margin-left 75px
      border-top 5px solid #f3f4f5
      background #ffffff
      margin-top 40px
      .inner_right
        background #ffffff
        padding 5px 5px 20px
        border-top 1px solid #f3f4f5
        >a
          display block
          color #999
          padding-left 5px
          margin-top 10px
          font-size 12px
          img
            height 10px
            margin-top 5px
            margin-right 5px
            float right
        .inner_right_list
          width 100%
          overflow hidden
          list-style none
          .inner_right_item
            width 33.33%
            margin-top 10px
            float left
            a
              display block
              .right_item_img
                img
                  width 100%
                  vertical-align middle
              p
                text-overflow ellipsis
                white-space nowrap
                height 20px
                font-size 13px
                margin-top 10px
                color #333
                text-align center
                overflow hidden

</style>
