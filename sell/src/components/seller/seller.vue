<template>
  <div class="seller" ref="sellerScroll">
    <div class="sellerScroll">
      <div class="seller-data">
        <div class="seller-data-content">
          <div class="seller-data-content-up border-1px">
            <div class="seller-data-left">
              <h1 class="title">{{seller.name}}</h1>
              <div class="seller-star">
                <star v-bind:score="seller.score" v-bind:size="36" v-bind:margin="5"></star>
                <span class="ratings-length" v-if="ratings.ratings">({{ratings.ratings.length}})</span>
                <span class="sell-count">月售{{seller.sellCount}}单</span>
              </div>
            </div>
            <div class="seller-data-right">
              <div class="favorite" v-bind:class="{select:favorite}" v-on:click="selectFavorite($event)">
                <i class="icon-favorite"></i>
              </div>
              <div class="favorite-text">
                <span class="nofavorite" v-show="!favorite">收藏</span>
                <span v-show="favorite">已收藏</span>
              </div>
            </div>
          </div>
          <div class="seller-data-content-down">
            <div class="content-down-left">
              <div class="data-content-title">起送价</div>
              <div class="data-content-detail">{{seller.minPrice}}<span>元</span></div>
            </div>
            <div class="content-down-center">
              <div class="data-content-title">商家配送</div>
              <div class="data-content-detail">{{seller.deliveryPrice}}<span>元</span></div>
            </div>
            <div class="content-down-right">
              <div class="data-content-title">平均配送时间</div>
              <div class="data-content-detail">{{seller.deliveryTime}}<span>分钟</span></div>
            </div>
          </div>
        </div>
        <div class="border"></div>
      </div>
      <div class="seller-bulletin">
        <div class="seller-bulletin-content">
          <h1 class="title">公告与活动</h1>
          <p class="bulletin-text">{{seller.bulletin}}</p>
          <ul class="supports-list" v-if="seller.supports">
            <li class="supports-item border-1px" v-for="(support, index) of seller.supports" v-bind:key="index">
              <span class="support-icon" v-bind:class="classMap[support.type]"></span>
              <span class="support-description">{{support.description}}</span>
            </li>
          </ul>
        </div>
        <div class="border"></div>
      </div>
      <div class="seller-pictures">
        <div class="seller-pictures-content">
          <h1 class="title">商家实景</h1>
          <div class="pics-content" ref="picturesScroll">
            <div class="pics-scroll-wrapper">
              <ul class="pics-list" v-if="seller.pics">
                <li class="pics-item" v-for="(pic, index) of seller.pics" v-bind:key="index">
                  <img class="pic" v-bind:src="pic">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border"></div>
      </div>
      <div class="seller-information">
        <h1 class="title">商家信息</h1>
        <ul class="infos-list">
          <li class="infos-item" v-for="(info, index) of seller.infos" v-bind:key="index">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import {saveToLocal, getFromLocal} from '../../common/js/store.js'
import star from '../star/star.vue'

export default {
  props: {
    seller: {
      type: Object,
      required: true
    },
    ratings: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      favorite: (() => {
        return getFromLocal(this.seller.id, 'favorite', false)
      })()
    }
  },

  created: function () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },

  mounted: function () {
    if (this.scrollY && this.scrollX) return
    this.scrollY = new Scroll(this.$refs.sellerScroll, {
      click: true
    })

    this.scrollX = new Scroll(this.$refs.picturesScroll, {
      scrollX: true,
      scrollY: false
    })
  },

  methods: {
    selectFavorite: function (event) {
      if (!event._constructed) return
      this.favorite = !this.favorite
      saveToLocal(this.seller.id, 'favorite', this.favorite)
    }
  },

  components: {
    star
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

  .border
    height: 16px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f5f7
  .title
    font-size: 14px
    color: #07111b
  .seller
    height: calc(100% - 225px)
    font-size: 0
    overflow: hidden
    .sellerScroll
      .seller-data
        .seller-data-content
          padding: 0 18px
          .seller-data-content-up
            padding: 18px 0
            border-1px(rgba(7, 17, 27, 0.1))
            overflow: hidden
            .seller-data-left
              float: left
              .seller-star
                margin-top: 8px
                line-height: 18px
                color: #4d555d
                .ratings-length
                  margin-left: 8px
                  font-size: 10px
                .sell-count
                  margin-left: 12px
                  font-size: 10px
            .seller-data-right
              float: right
              text-align: center
              width: 40px
              .favorite
                font-size: 24px
                color: #d4d6d9
                cursor: pointer
                &.select
                  color: rgb(240, 20, 20)
              .favorite-text
                font-size: 10px
                color: #4d555d
                .nofavorite
                  color: #93999f
          .seller-data-content-down
            display: flex
            padding: 18px 0
            text-align: center
            .content-down-left
              flex: 1 1 0
              border-right-1px(rgba(7, 17, 27, 0.1))
            .content-down-center
              flex: 1 1 0
              border-right-1px(rgba(7, 17, 27, 0.1))
            .content-down-right
              flex: 1 1 0
            .data-content-title
              font-size: 10px
              color: #93999f
            .data-content-detail
              margin-top: 4px
              font-size: 24px
              color: rgb(7, 17, 27)
              &>span
                font-size: 10px
      .seller-bulletin
        padding-top: 18px
        .seller-bulletin-content
          padding: 0 18px
          .bulletin-text
            padding: 8px 12px 16px 12px
            line-height: 24px
            font-size: 12px
            color: rgb(240, 20, 20)
          .supports-list
            .supports-item
              padding: 16px 12px
              border-top-1px(rgba(7, 17, 27, 0.1))
              .support-icon
                display: inline-block
                margin-right: 6px
                vertical-align: top
                width: 16px
                height: 16px
                background-repeat: no-repeat
                background-size: 100% 100%
                &.decrease
                  bgImage-size('decrease_4')
                &.discount
                  bgImage-size('discount_4')
                &.special
                  bgImage-size('special_4')
                &.invoice
                  bgImage-size('invoice_4')
                &.guarantee
                  bgImage-size('guarantee_4')
              .support-description
                display: inline-block
                line-height: 16px
                font-size: 12px
                color: rgb(7, 17, 27)
      .seller-pictures
        .seller-pictures-content
          padding: 18px 0 18px 18px
          .pics-content
            overflow: hidden
            .pics-scroll-wrapper
              display: inline-block
              .pics-list
                display: inline-block
                margin-top: 12px
                white-space: nowrap
                .pics-item
                  display: inline-block
                  width: 90px
                  height: 90px
                  margin-right: 6px
                  &:last-child
                    margin-right: 0
                  .pic
                    width: 100%
      .seller-information
        padding: 18px
        padding-bottom: 0
        .infos-list
          margin-top: 12px
          .infos-item
            padding: 16px 12px
            border-top-1px(rgba(7, 17, 27, 0.1))
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
</style>