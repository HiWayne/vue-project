<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul class="menu-list">
        <li v-for="(item, index) of goods" v-bind:key="index" class="menu-item border-1px" v-bind:class="{on:index === leftIndex}" v-on:click="scrollto(index, $event)">
          <span class="menu-name">
            <span v-if="item.type!==-1" class="icon" v-bind:class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="food">
      <div class="food-scroll-wrapper">
        <div v-for="(item, index) of goods" v-bind:key="index" ref="fooditem">
          <div class="food-menu">{{item.name}}</div>
          <ul class="food-list">
            <li v-for="(food, index) of item.foods" v-bind:key="index" v-on:click="selectFood(food)" class="food-item border-1px on">
              <div class="food-icon" ><img v-bind:src="food.icon"></div>
              <div class="food-detail">
                <div class="food-select-wrapper">
                  <h1 class="food-name">{{food.name}}</h1>
                  <div v-if="food.description" class="food-description">{{food.description}}</div>
                  <div class="food-data"><span class="food-sell">月售{{food.sellCount}}份</span><span class="food-rating">好评率{{food.rating}}%</span></div>
                </div>
                <div class="food-price">
                  <span class="current-price">￥{{food.price}}</span>
                  <del v-if="food.oldPrice" class="old-price">￥{{food.oldPrice}}</del>
                  <cartcontrol class="select" v-bind:food="food" v-bind:selectfoods="selectfoods" v-on:drop="drop"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <food v-bind:food="selectedFood" v-bind:show="show" v-bind:selectfoods="selectfoods" v-bind:shopcartComponent="shopcartComponent" v-on:detailclose="selectFood"></food>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import food from '../food/food.vue'

const ERROK = 0

export default {
  props: {
    seller: {
      type: Object,
      required: true
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
      //异步从服务器get数据
      goods: [],
      //不同的type映射到不同的class
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      //存放右侧栏目高度
      heightArray: [],
      //当前滚动高度
      currentHeight: 0,
      //进入食品详情页时该食品的数据
      selectedFood: {},
      //食品详情页是否显示
      show: false
    }
  },
  created: function () {
    this.$http.get('/api/goods')
    .then((res) => {
      if (res.data.errno === ERROK) {
        this.goods = res.data.data
      }
      else new Error()
    })
    .catch((error) => {
      console.log(error)
    })
  },
  mounted: function () {
      this.scrollMenu = new Scroll(this.$refs.menu, {
        click: true
      })

      this.scrollFood = new Scroll(this.$refs.food, {
        click: true,
        probeType: 3
      })
      this.scrollFood.on('scroll', (pos) => {
        this.currentHeight = Math.abs(pos.y)
      })
  },
  computed: {
    leftIndex: function () {
      for (let i = 0; i < this.heightArray.length; i++) {
        if (this.heightArray[i + 1] && this.currentHeight >= this.heightArray[i] && this.currentHeight < this.heightArray[i + 1]) {
          return i
        }
      }
      return 0
    }
  },
  watch: {
    goods: function() {
      this.$nextTick(() => {
        let foodList = this.$refs.fooditem, addHeight = 0
        this.heightArray.push(0)
        for (let i = 0; i < foodList.length; i++) {
          addHeight += foodList[i].clientHeight
          this.heightArray.push(addHeight)
        }
      })
    }
  },
  methods: {
    scrollto: function (index, event) {
      if (!event._constructed) {
        return
      }
      else {
        const foods = this.$refs.fooditem
        let target = foods[index]
        this.scrollFood.scrollToElement(target, 400)
      }
    },
    drop: function (el) {
      this.shopcartComponent.dropball(el)
    },
    selectFood: function (food) {
      if (food) {
        this.selectedFood = food
      }
      this.show = !this.show
    }
  },
  components: {
    cartcontrol,
    food
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.goods
  display: flex
  height: calc(100% - 222px)
  overflow: hidden
  .menu-wrapper
    flex: 0 0 auto
    width: 80px
    .menu-list
      .menu-item
        display: table
        padding-left: 12px
        width: 100%
        height: 54px
        line-height: 14px
        background: #f3f5f7
        box-sizing: border-box
        border-1px(rgba(7, 17, 27, 0.1))
        &.on
          background: white;
          &>span 
            color: #07111b
            font-weight: 500
        &>span
          color: #43474d
        .menu-name
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          .icon
            display: inline-block
            vertical-align : top
            margin-right: 2px
            width: 12px
            height: 12px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bgImage-size('decrease_3')
            &.discount
              bgImage-size('discount_3')
            &.guarantee
              bgImage-size('guarantee_3')
            &.invoice
              bgImage-size('invoice_3')
            &.special
              bgImage-size('special_3')
  .foods-wrapper
    flex: 1
    .food-menu
      padding-left: 14px
      box-sizing: border-box
      height: 26px
      line-height: 26px
      font-size: 12px
      font-weight: 500
      color: rgb(147, 153, 159)
      border-left: 3px solid #d9dde1
      background: #f3f5f7
    .food-list
      padding: 0 18px
      .food-item
        display: flex
        padding: 18px 0
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-bottom: none
        .food-icon
          flex: 0 0 auto
          width: 72px
          height: 72px
          &>img
            display: inline-block
            width: 100%
            height: 100%
        .food-detail
          flex: 1
          margin-left: 10px
          vertical-align: top
          .food-select-wrapper
            .food-name
              margin-top: 2px
              font-size: 14px
              font-weight: 400
              color: rgb(7, 17, 27)
            .food-description
              margin-top: 8px
              font-size: 10px
              font-weight: 500
              color: rgb(147, 153, 159)
            .food-data
              margin: 8px 0
              font-size: 10px
              color: rgb(147, 153, 159)
              .food-sell
                font-weight: 500
              .food-rating
                margin-left: 12px
                font-weight: 500
          .food-price
            position: relative
            font-size: 0
            height: 24px
            line-height: 24px
            .current-price
              font-size: 14px
              font-weight: 700
              color: red
            .old-price
              margin-left: 8px
              font-size: 10px
              font-weight: 700
              color: rgb(147, 153, 159)
            .select
              position: absolute
              right: 0
              top: 0
</style>