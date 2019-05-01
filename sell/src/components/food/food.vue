<template>
  <transition name="move">
    <div v-show="show" class="food" ref="food">
      <div class="food-scroll-wrapper">
        <!-- 返回按钮 -->
        <div class="close" v-on:click="$emit('detailclose')">
          <i class="icon-arrow_lift"></i>
        </div>
        <div class="food-image">
          <img class="image" v-bind:src="food.image">
        </div>
        <div class="food-content">
          <div class="food-name">{{food.name}}</div>
          <div class="food-data">
            <span class="food-sell">月售{{food.sellCount}}份</span>
            <span class="food-rating">好评率{{food.rating}}%</span>
          </div>
          <div class="food-price">
            <span class="new-price">￥{{food.price}}</span>
            <del v-if="food.oldPrice" class="old-price">￥{{food.oldPrice}}</del>
            <div class="shopcart">
              <transition name="fade">
                <div v-show="!food.count" v-on:click="addfood(food, $event)" class="emptycart">加入购物车</div>
              </transition>
              <div v-show="food.count">
                <cartcontrol v-bind:food="food" v-bind:selectfoods="selectfoods" ref="shopcart" v-on:drop="drop"></cartcontrol>
              </div>
            </div>
          </div>
        </div>
        <div class="board"></div>
        <div class="food-description">
          <h1 class="description-title">商品介绍</h1>
          <p class="description-content">{{food.info}}</p>
        </div>
        <ratinglist v-bind:food="food"></ratinglist>
        <div class="ratings-detail">
          <ul class="ratings-list">
            <li
              v-for="(rating, index) of ratingList"
              v-bind:key="index"
              class="ratings-item border-1px"
            >
              <div class="ratings-user">
                <div class="ratings-time">
                  <inputtime v-bind:rate-time="rating.rateTime"></inputtime>
                </div>
                <div class="user-data">
                  <span class="user-name">{{rating.username}}</span>
                  <span class="user-avatar">
                    <img v-bind:src="rating.avatar">
                  </span>
                </div>
              </div>
              <div class="ratings-content">
                <span class="rating-type">
                  <iconthumb v-bind:rate-type="rating.rateType"></iconthumb>
                </span>
                <span class="rating-text">{{rating.text}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import ratinglist from '../ratinglist/ratinglist.vue'
import Bus from '../Bus/Bus.js'
import inputtime from '../inputtime/inputtime.vue'
import iconthumb from '../iconthumb/iconthumb.vue'

export default {
  props: {
    //进入食品详情页时该食品的数据
    food: {
      type: Object,
      required: true
    },
    //食品详情页是否显示
    show: {
      type: Boolean,
      default() {
        return false
      }
    },
    //已选择的食品
    selectfoods: {
      type: Array,
      required: true
    },
    //shopcart组件实例
    shopcartComponent: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      ratingList: []
    };
  },

  mounted: function () {
    if (!this.scroll) {
      this.scroll = new Scroll(this.$refs.food, {
        click: true
      })
    }
    //监听中央事件总线中的事件
    Bus.$on('changeratingtype', (ratinglist) => {
      this.ratingList = ratinglist
    })
  },

  watch: {
    food: function () {
      this.ratingList = this.food.ratings
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },

  methods: {
    addfood: function (food, event) {
      if (!event._constructed) {
        return
      }
      this.$refs.shopcart.addfood(food, event)
      this.drop(event)
    },
    drop: function (el) {
      if (!event._constructed) {
        return
      }
      this.shopcartComponent.dropball(el)
    }
  },

  computed: {
    year: function () {
      return function (rateTime) {
        const date = new Date(rateTime)
        return date.getFullYear()
      }
    },
    month: function () {
      return function (rateTime) {
        const date = new Date(rateTime)
        let month = date.getMonth() + 1
        //一位数前面加0
        month = month.toString().length === 1 ? '0' + month.toString() : month.toString()
        return month
      }
    },
    day: function () {
      return function (rateTime) {
        const date = new Date(rateTime)
        let day = date.getDate()
        //一位数前面加0
        day = day.toString().length === 1 ? '0' + day.toString() : day.toString()
        return day
      }
    },
    hour: function () {
      return function (rateTime) {
        const date = new Date(rateTime)
        let hour = date.getHours()
        //一位数前面加0
        hour = hour.toString().length === 1 ? '0' + hour.toString() : hour.toString()
        return hour
      }
    },
    minute: function () {
      return function (rateTime) {
        const date = new Date(rateTime)
        let minute = date.getHours()
        //一位数前面加0
        minute = minute.toString().length === 1 ? '0' + minute.toString() : minute.toString()
        return minute
      }
    }
  },

  components: {
    cartcontrol,
    ratinglist,
    // eslint-disable-next-line
    Bus,
    inputtime,
    iconthumb
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl'

  .food
    position: fixed
    top: 0
    left: 0
    bottom: 48px
    width: 100%
    background: #fff
    overflow: hidden
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-to
      transform: translate3d(100%, 0, 0)
    .close
      position: absolute
      top: 20px
      left: 15px
      z-index: 2
      width: 24px
      height: 24px
      text-align: center
      border-radius: 50%
      font-size: 16px
      font-weight: 100
      color: rgba(255, 255, 255, 0.4)
      background: rgba(0, 0, 0, 0.4)
      .icon-arrow_lift
        display: inline-block
        margin-top: 4px
        vertical-align: top
    .food-image
      position: relative
      padding-top: 100%
      height: 0
      .image
        position: absolute
        top: 0
        left: 0
        z-index: 1
        width: 100%
        height: 100%
    .food-content
      padding: 18px
      .food-name
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .food-data
        font-size: 10px
        color: rgb(147, 153, 159)
        .food-sell
          margin-right: 12px
      .food-price
        position: relative
        margin-top: 18px
        line-height: 24px
        .new-price
          font-size: 14px
          font-weight: 700
          color: rgb(240, 20, 20)
        .old-price
          font-size: 10px
          font-weight: 700
          color: rgb(147, 153, 159)
        .shopcart
          position: absolute
          right: 0
          top: 0
          .fade-enter-active, .fade-leave-active
            transition: all 0.2s linear
          .fade-enter, .fade-leave-to
            opacity: 0
          .emptycart
            position: absolute
            right: 0
            top: 0
            width: 74px
            height: 24px
            line-height: 24px
            text-align: center
            border-radius: 12px
            background: rgb(0, 160, 220)
            font-size: 10px
            color: #fff
    .board
      height: 16px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
    .food-description
      padding: 18px
      .description-title
        margin-bottom: 6px
        font-size: 15px
        font-weight: 500
        color: rgb(7, 17, 27)
      .description-content
        padding: 0 8px
        line-height: 24px
        font-size: 12px
        color: rgb(77, 85, 93)
    .ratings-detail
      .ratings-list
        padding: 0 18px
        .ratings-item
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .ratings-user
            font-size: 0
            overflow: hidden
            .ratings-time
              float: left
            .user-data
              float: right
              .user-name
                margin-right: 6px
                line-height: 12px
                font-size: 10px
                color: rgb(147, 153, 159)
              .user-avatar
                display: inline-block
                vertical-align: top
                width: 12px
                height: 12px
                &>img
                  width: 100%
          .ratings-content
            line-height: 24px
            font-size: 12px
            .rating-type
              margin-right: 4px
            .rating-text
              line-height: 16px
              font-weight: 500
              color: rgb(7, 17, 27)
</style>