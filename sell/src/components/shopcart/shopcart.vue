<template>
  <div class="shopcart">
    <div class="content-left" v-on:click="showlist">
      <div class="logo-wrapper">
        <div class="logo" v-bind:class="{ 'highlight': foodcount > 0 }">
          <i id="shop-icon" class="icon-shopping_cart" v-bind:class="{ 'highlight': foodcount > 0 }"></i>
        </div>
        <div class="ball-container">
          <transition v-for="(ball, index) of balls" v-bind:key="index" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
            <div v-show="ball.show" class="ball">
              <div class="inner"></div>
            </div>
          </transition>
        </div>
        <div v-show="foodcount" class="foodcount">{{foodcount}}</div>
      </div>
      <div class="price" v-bind:class="{ 'highlight': foodcount > 0 }">￥{{totalprice}}</div>
      <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div>
    </div>
    <div class="content-right" v-on:click="pay">
      <div v-if="!foodcount" class="pay">￥{{seller.minPrice}}起送</div>
      <div v-else-if="totalprice < seller.minPrice" class="pay">还差￥{{seller.minPrice - totalprice}}起送</div>
      <div v-else-if="totalprice >= seller.minPrice" class="topay">结算</div>
    </div>
    <transition name="fold">
      <div v-show="showshoplist" class="shoplist">
        <div class="list-header">
          <h1 class="shopcart-title">购物车</h1>
          <span class="empty" v-on:click="emptylist">清空</span>
        </div>
        <div class="shopcart-content" ref="shopcartContent">
          <ul class="content-list">
            <li v-for="selectfood of selectfoods" v-bind:key="selectfood.name" class="content-item border-1px">
              <span class="food-name">{{selectfood.name}}</span>
              <cartcontrol v-bind:food="selectfood" v-bind:selectfoods="selectfoods" v-on:drop="dropball" class="select"></cartcontrol>
              <span class="food-price">￥{{selectfood.price * selectfood.count}}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="mask">
      <div v-show="showshoplist" v-on:click="showlist" class="list-mask"></div>
    </transition>
  </div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import Scroll from 'better-scroll'

export default {
  props: {
    seller: {
      type: Object,
      required: true
    },
    selectfoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showshoplist: false,
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },{
          show: false
        }
      ],
      dropballs: []
    }
  },
  mounted: function () {
    new Scroll(this.$refs.shopcartContent, {
      click: true
    })
  },
  computed: {
    totalprice: function () {
      let price = 0
      this.selectfoods.forEach((food) => {
        price += food.price * food.count
      })
      return price
    },
    foodcount: function () {
      let count = 0
      this.selectfoods.forEach((food) => {
        count += food.count
      })
      return count
    }
  },
  methods: {
    showlist: function () {
      if (!this.selectfoods.length) {
        return
      }
      this.showshoplist = !this.showshoplist
    },
    dropball: function (el) {
      //currentTarget,绑定事件的节点; target, 触发事件的节点。currentTarget会在冒泡结束后reset为null，所以先保存起来
      const currentTarget = el.currentTarget
      //优化性能体验，异步调用下落动画
      this.$nextTick(() => {
        const length = this.balls.length
        for (let i = 0; i < length; i++) {
          const ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = currentTarget
            this.dropballs.push(ball)
            return
          }
        }
      })
    },
    beforeEnter: function (el) {
      let length = this.dropballs.length
      length--
      const dropball = this.dropballs[length]
      const rect = dropball.el.getBoundingClientRect()
      const height = window.innerHeight
      const x = rect.left - 32
      const y = -(height - rect.top - 38)
      el.style.display = ""
      el.style.transform = `translate3d(${x}px, 0, 0)`
      const inner = el.children[0]
      inner.style.transform = `translate3d(0, ${y}px, 0)`
      el.style.transition = "all 0.4s linear"
      inner.style.transition = "all 0.4s cubic-bezier(.64,-0.38,.83,.67)"
    },
    //当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
    enter: function (el) {
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight
      const inner = el.children[0]
      el.style.transform = "translate3d(0, 0, 0)"
      inner.style.transform = "translate3d(0, 0, 0)"
    },
    afterEnter: function (el) {
      const ball = this.dropballs.shift()
      ball.show = false
      el.style.display = "none"
    },
    emptylist: function () {
      const length = this.selectfoods.length
      for (let i = length - 1; i >= 0; i--) {
        this.selectfoods[i].count = 0
        this.selectfoods.splice(i, 1)
      }
    },
    pay: function () {
      if (this.totalprice < this.seller.minPrice) {
        return
      }
      alert(`支付${this.totalprice}元`)
      this.emptylist()
    }
  },
  watch: {
    selectfoods: function (newfoods) {
      if (!newfoods.length) {
        this.showshoplist = false
      }
    }
  },
  components: {
    cartcontrol
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    display: flex
    width: 100%
    height: 48px
    z-index: 10
    background: #141d27
    .content-left
      flex: 1 1 auto
      font-size: 0
      background: #141d27
      .logo-wrapper
        display: inline-block
        position: relative
        top: -10px
        margin: 0 11px
        padding: 6px 7px
        width: 56px
        height: 56px
        border-radius: 50%
        background: #141d27
        box-sizing: border-box
        .logo
          display: inline-block
          width: 44px
          height: 44px
          border-radius: 50%
          text-align: center
          background: #2b343c
          cursor: pointer
          &.highlight
            background: #00a0dc
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px
            color: #80858a
            &.highlight
              color: #fff
        .foodcount
          position: absolute
          top: 0
          right: 0
          width: 24px
          height: 16px
          line-height: 16px
          text-align: center
          border-radius: 8px
          font-size: 9px
          color: #fff
          background: #f01414
      .ball-container
        .ball
          position: fixed
          bottom: 22px
          left: 32px
          z-index: 100
          .inner
            width: 16px
            height: 16px
            border-radius: 50%
            background: rgb(0, 160, 220)
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        padding-right: 12px
        box-sizing: border-box
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        font-size: 16px
        line-height: 24px
        font-weight: 700
        color: rgba(255, 255, 255, 0.4)
        &.highlight
          color: #fff
      .desc
        display: inline-block
        vertical-align: top
        margin: 12px 0 0 12px
        line-height: 24px
        font-size: 10px
        color: rgba(255, 255, 255, 0.4)
    .content-right
      flex: 0 0 105px
      box-sizing: border-box
      width: 105px
      text-align: center
      background: #2b333b
      .pay
        height: 48px
        line-height: 48px
        font-size: 12px
        color: rgba(255, 255, 255, 0.4)
        font-weight: 700
      .topay
        height: 48px
        line-height: 48px
        font-size: 12px
        color: #fff
        background: #00b43c
        cursor: pointer
    .shoplist
      position: absolute
      top: 0
      left: 0
      transform: translate3d(0, -100%, 0)
      width: 100%
      background: #fff
      color: #fff
      z-index: -9
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.3s linear
      &.fold-enter, &.fold-leave-to
        transform: translate3d(0, 0, 0)
      .list-header
        padding: 0 18px
        height: 40px
        line-height: 40px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        overflow: hidden
        .shopcart-title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)
          cursor: pointer
      .shopcart-content
        max-height: 215px
        overflow: hidden
        .content-list
          padding: 0 18px
          .content-item
            height: 48px
            line-height: 48px
            border-1px(rgba(7, 17, 27, 0.1))
            .food-name
              font-size: 14px
              font-weight: 500
              color: rgb(7, 17, 27)
            .food-price
              float: right
              margin-right: 6px
              font-size: 14px
              font-weight: 700
              color: rgb(240, 20, 20)
            .select
              float: right
              margin-top: 12px
    .list-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(7, 17, 27, 0.6)
      backdrop-filter: blur(10px)
      z-index: -10
      &.mask-enter-active, &.mask-leave-active
        transition: all 0.5s linear
      &.mask-enter, &.mask-leave-to
        opacity: 0
</style>

