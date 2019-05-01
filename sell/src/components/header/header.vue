<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" v-bind:src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="count" v-on:click="showDetail">
        <span class="count-support">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" v-on:click="showDetail">
      <span class="bulletin-icon"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bgimg">
      <img width="100%" v-bind:src="seller.avatar">
    </div>
    <transition name="show-detail" v-on:enter="enter">
      <div v-show="show" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <div class="detail-name">{{seller.name}}</div>
            <div class="star-wrapper">
              <star v-bind:score="seller.score" v-bind:size="48"></star>
            </div>
            <div class="title-wrapper">
              <vtitle v-bind:title="'优惠信息'"></vtitle>
            </div>
            <ul class="supports-list">
              <li class="supports-item" v-for="(support, index) of seller.supports" v-bind:key="index">
                <span class="icon" v-bind:class="classMap[support.type]"></span><span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="title-wrapper">
              <vtitle v-bind:title="'商家公告'"></vtitle>
            </div>
            <p class="bulletin">{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" v-on:click="showDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from '../star/star.vue'
import vtitle from '../title/title.vue'

export default {
  data() {
    return {
      //不同的type映射到不同的class
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      show: false
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  methods: {
    showDetail: function () {
      this.show = !this.show
    },
    enter: function (el) {
      //过渡关闭弹窗后, 下次打开, 滚动条到顶部而不是上次关闭时的位置
      el.scrollTop = 0
    }
  },
  components: {
    star,
    vtitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.header
  position: relative
  background-color: rgba(7, 17, 27, 0.5)
  overflow: hidden
  .content-wrapper
    position: relative
    padding: 24px 12px 18px 24px
    .avatar
      display: inline-block
      margin-right: 16px
      border-radius: 2px
    .content
      display: inline-block
      vertical-align: top
      font-size: 0
      .title
        margin: 2px 0 8px 0
        .brand
          display: inline-block
          vertical-align: top
          width: 30px
          height: 18px
          bgImage-size('brand')
          background-size: 30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          font-size: 16px
          color: #fff
          font-weight: bold
          line-height: 18px
      .description
        font-size: 12px
        color: #fff
      .support
        display: inline-block
        margin: 10px 0 2px 0
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          &.decrease
            bgImage-size('decrease_1')
            background-size: 12px 12px
            background-repeat: no-repeat
          &.discount
            bgImage-size('discount_1')
            background-size: 12px 12px
            background-repeat: no-repeat
          &.guarantee
            bgImage-size('guarantee_1')
            background-size: 12px 12px
            background-repeat: no-repeat
          &.invoice
            bgImage-size('invoice_1')
            background-size: 12px 12px
            background-repeat: no-repeat
          &.special
            bgImage-size('special_1')
            background-size: 12px 12px
            background-repeat: no-repeat
        .text
          margin-left: 4px
          font-size: 10px
          color: #fff
          line-height: 12px
    .count
      position: absolute
      right: 12px
      bottom: 18px
      padding: 0 8px
      height: 24px
      line-height: 24px
      border-radius: 8px/7px
      background: rgba(0, 0, 0, 0.2)
      cursor: pointer
      .count-support
        display: inline-block
        font-size: 10px
        color: #fff
        line-height: 12px
      .icon-keyboard_arrow_right
        margin-left: 2px
        font-size: 10px
        color: #fff
  .bulletin-wrapper
    position: relative
    padding: 0 17px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    height: 28px
    line-height: 28px
    font-size: 10px
    color: #fff
    background: rgba(7, 17, 27, 0.2)
    cursor: pointer
    .bulletin-icon
      display: inline-block
      vertical-align: top
      margin-top: 8px
      width: 22px
      height: 12px
      bgImage-size('bulletin')
      background-size: 22px 12px
      background-repeat: no-repeat
    .bulletin-text
      margin: 0 4px
      vertical-align: top
      font-size: 10px
    .icon-keyboard_arrow_right
      position: absolute
      right: 12px
      top: 9px
      font-size: 10px
  .bgimg
    position: absolute
    left: 0
    top: 0
    z-index: -2
    width: 100%
    filter: blur(10px)
  .show-detail-enter-active, .show-detail-leave-active
    transition: all 0.5s ease
  .show-detail-enter, .show-detail-leave-to
    opacity: 0
  .detail
    position: fixed
    top: 0
    z-index: 20
    width: 100%
    height: 100%
    background: rgba(7, 17, 27, 0.8)
    overflow: auto
    backdrop-filter: blur(10px)
    .detail-wrapper
      display: block
      min-height: 100%
      .detail-main
        padding-top: 64px
        padding-bottom: 96px
        word-wrap: break-word
        word-break: normal
      .detail-name
        font-size: 16px
        font-weight: 700
        color: #fff
        text-align: center
      .star-wrapper
        margin-top: 18px
        padding: 2px 0
        text-align: center
      .title-wrapper
        margin: 28px 0 24px 0
      .supports-list
        margin: 0 36px 28px 36px
        padding: 0 12px
        font-size: 0
        .supports-item
          margin-bottom: 12px;
          height: 16px
          line-height: 16px
          &:last-child
            margin-bottom: 0
          .icon
            display: inline-block
            width: 16px
            height: 16px
            background-size: 16px 16px
            background-repeat: no-repeat
            &.decrease
              bgImage-size('decrease_2')
            &.discount
              bgImage-size('discount_2')
            &.guarantee
              bgImage-size('guarantee_2')
            &.invoice
              bgImage-size('invoice_2')
            &.special
              bgImage-size('special_2')
          .text
            margin-left: 6px
            vertical-align: top
            font-size: 12px
            color: #fff
      .bulletin
        margin: 0 36px
        padding: 0 12px
        font-size: 12px
        line-height: 24px
        color: #fff
    .detail-close
      margin-top: -64px
      text-align: center
      .icon-close
        font-size: 32px
        color: rgba(255, 255, 255, 0.5)
        cursor: pointer
</style>