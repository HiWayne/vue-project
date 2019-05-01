<template>
  <div class="ratinglist">
    <div class="border"></div>
    <div class="rating-wrapper">
      <div class="food-ratings border-1px">
        <h1 class="ratings-title">商品评价</h1>
        <div v-if="food.ratings" class="rating-sort">
          <div class="common all" v-bind:class="{ active: ratingType === 'all' }" v-on:click="showAll">
            <span class="text">全部</span>
            <span class="number">{{food.ratings.length}}</span>
          </div>
          <div class="common recommend" v-bind:class="{ active: ratingType === 'recommend' }" v-on:click="showRecommend">
            <span class="text">{{text.recommend}}</span>
            <span class="number">{{recommend}}</span>
          </div>
          <div class="common disgusting" v-bind:class="{ active: ratingType === 'disgusting' }" v-on:click="showDisgusting">
            <span class="text">{{text.disgusting}}</span>
            <span class="number">{{disgusting}}</span>
          </div>
        </div>
      </div>
      <div class="ratings-select">
        <div class="ratings-select-content">
          <span
            class="check-icon"
            v-bind:class="{ checked: checked === true }"
            v-on:click="showContent"
          >
            <i class="icon-check_circle"></i>
          </span>
          <span class="check-text" v-bind:class="{ checked: checked === true }">只看有内容的评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '../Bus/Bus.js'

const ALL = "all"
const RECOMMEND = "recommend"
const DISGUSTING = "disgusting"

export default {
  props: {
    food: {
      type: Object,
      required: true
    },
    text: {
      type: Object,
      default() {
        return {
          recommend: "推荐",
          disgusting: "吐槽"
        }
      }
    }
  },

  data() {
    return {
      ratingList: [],
      tempCheckedList: [],
      checked: false,
      ratingType: ALL
    }
  },

  watch: {
    food: function () {
      //存放某种类型的评论
      this.tempCheckedList = this.food.ratings
      this.ratingList = this.food.ratings
    }
  },

  mounted: function () {
    //切换路由后，data中的数据会初始化
    if (this.food.ratings) {
      this.tempCheckedList = this.food.ratings
      this.ratingList = this.food.ratings
    }
  },

  methods: {
    //显示所有评论
    showAll: function () {
      this.ratingType = ALL
      this.ratingList = this.food.ratings
      this.tempCheckedList = this.ratingList
      this._showContent()
      //通过中央事件总线传递数据给父组件
      Bus.$emit('changeratingtype', this.ratingList)
    },
    //显示推荐评论
    showRecommend: function () {
      this.ratingType = RECOMMEND
      this.ratingList = this.food.ratings.filter(rating => rating.rateType === 0)
      this.tempCheckedList = this.ratingList
      this._showContent()
      //通过中央事件总线传递数据给父组件
      Bus.$emit('changeratingtype', this.ratingList)
    },
    //显示反对评论
    showDisgusting: function () {
      this.ratingType = DISGUSTING
      this.ratingList = this.food.ratings.filter(rating => rating.rateType === 1)
      this.tempCheckedList = this.ratingList
      this._showContent()
      //通过中央事件总线传递数据给父组件
      Bus.$emit('changeratingtype', this.ratingList)
    },
    //内部方法，判断是否应该只显示有内容评论
    _showContent: function () {
      if (this.checked) {
        this.ratingList = this.ratingList.filter(rating => !!rating.text === true)
      }
      else {
        return
      }
    },
    //显示有内容的评论
    showContent: function () {
      this.checked = !this.checked
      if (this.checked) {
        this.ratingList = this.ratingList.filter(rating => !!rating.text === true)
      }
      else {
        //如果取消内容勾选，则显示当前类型的所有评论
        this.ratingList = this.tempCheckedList
      }
      //通过中央事件总线传递数据给父组件
      Bus.$emit('changeratingtype', this.ratingList)
    }
  },

  computed: {
    recommend: function () {
      const length = this.food.ratings.length
      let recommendNumber = 0
      for (let i = 0; i < length; i++) {
        const rating = this.food.ratings[i]
        if (rating.rateType === 0) {
          recommendNumber++
        }
      }
      return recommendNumber
    },
    disgusting: function () {
      const length = this.food.ratings.length
      let disgustingNumber = 0
      for (let i = 0; i < length; i++) {
        const rating = this.food.ratings[i]
        if (rating.rateType === 1) {
          disgustingNumber++
        }
      }
      return disgustingNumber
    }
  },

  components: {
    // eslint-disable-next-line
    Bus
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

  .ratinglist
    .border
      height: 16px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
    .rating-wrapper
      .food-ratings
        margin: 0 18px
        padding: 18px 0
        border-1px(rgba(7, 17, 27, 0.1))
        .ratings-title
          margin-bottom: 6px
          font-size: 15px
          font-weight: 500
          color: rgb(7, 17, 27)
        .rating-sort
          &>.common
            display: inline-block
            margin-right: 8px
            padding: 8px 12px
            text-align: center
            box-sizing: border-box
            height: 32px
            line-height: 16px
            font-size: 0
            border-radius: 1px
            color: rgb(77, 85, 93)
            cursor: pointer
            &>.text
              margin-right: 3px
              font-size: 12px
              font-weight: 500
            &>.number
              font-size: 8px
              font-weight: 500
          .active
            color: #fff
          .all
            background: rgba(0, 160, 220, 0.2)
            &.active
              background: rgb(0, 160, 220)
          .recommend
            background: rgba(0, 160, 220, 0.2)
            &.active
              background: rgb(0, 160, 220)
          .disgusting
            background: rgba(77, 85, 93, 0.2)
            &.active
              background: rgb(77, 85, 93)
      .ratings-select
        padding: 12px 18px
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .ratings-select-content
          font-size: 0
          .check-icon
            margin-right: 4px
            vertical-align: top
            font-size: 24px
            color: rgb(147, 153, 159)
            cursor: pointer
            &.checked
              color: #00c850
          .check-text
            display: inline-block
            vertical-align: top
            line-height: 24px
            font-size: 12px
            color: rgb(147, 153, 159)
            &.checked
              font-weight: 500
              color: #000
</style>