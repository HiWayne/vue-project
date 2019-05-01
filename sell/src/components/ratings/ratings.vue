<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-scroll-wrapper">
      <div class="score-data">
        <div class="score-left border-1px">
          <div class="score">{{seller.score}}</div>
          <div class="score-decription">综合评分</div>
          <div class="rankRate">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="score-right">
          <div class="serviceScore">
            <span class="score-text">服务态度</span>
            <star v-bind:score="seller.serviceScore" v-bind:size="36" v-bind:margin="6"></star>
            <span class="score-number">{{seller.serviceScore}}</span>
          </div>
          <div class="foodScore">
            <span class="score-text">商品评分</span>
            <star v-bind:score="seller.foodScore" v-bind:size="36" v-bind:margin="6"></star>
            <span class="score-number">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="score-text">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <ratinglist v-bind:food="ratings" v-bind:text="{ recommend: '满意', disgusting: '不满意' }"></ratinglist>
      <div class="ratings-list-wrapper">
        <ul class="ratings-list">
          <li v-for="(rating, index) of ratingsList" v-bind:key="index" class="ratings-item border-1px">
            <div class="user-avatar">
              <img v-bind:src="rating.avatar">
            </div>
            <div class="rating-data-wrapper">
              <div class="rating-data">
                <div class="username-and-time">
                  <div class="username">{{rating.username}}</div>
                  <div class="usertime">
                    <inputtime v-bind:rate-time="rating.rateTime"></inputtime>
                  </div>
                </div>
                <div class="score-and-deliverytime">
                  <div class="score">
                    <star v-bind:score="rating.score" v-bind:size="36" v-bind:margin="3"></star>
                  </div>
                  <div class="deliverytime" v-if="rating.deliveryTime">
                    {{rating.deliveryTime}}分钟送达
                  </div>
                </div>
              </div>
              <div class="rating-text">{{rating.text}}</div>
              <div class="recommend-wrapper">
                <div class="iconthumb">
                  <iconthumb v-bind:rate-type="rating.rateType"></iconthumb>
                </div>
                <div class="recommend">
                  <ul class="recommend-list">
                    <li class="recommend-item" v-for="(recommend, index) of rating.recommend" v-bind:key="index">
                      {{recommend}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import star from '../star/star.vue'
import ratinglist from '../ratinglist/ratinglist.vue'
import inputtime from '../inputtime/inputtime.vue'
import Bus from '../Bus/Bus.js'
import iconthumb from '../iconthumb/iconthumb.vue'

export default {
  props: {
    seller: {
      type: Object,
      required: true
    },
    ratings: {
      type:Object,
      required: true
    }
  },

  data() {
    return {
      ratingsList: []
    }
  },

  watch: {
    ratings: function () {
      this.ratingsList = this.ratings.ratings
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },

  mounted: function () {
    //切换路由后，data中的数据会初始化
    if (this.ratings.ratings) this.ratingsList = this.ratings.ratings

    if (!this.scroll) {
      this.scroll = new Scroll(this.$refs.ratings, {
        click: true
      })
    }

    Bus.$on('changeratingtype', (ratingList) => {
      this.ratingsList = ratingList
    })
  },

  components: {
    star,
    ratinglist,
    inputtime,
    // eslint-disable-next-line
    Bus,
    iconthumb
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

  .ratings
    height: calc(100% - 225px)
    overflow: hidden
    .ratings-scroll-wrapper
      .score-data
        display: flex
        flex-flow: row nowrap
        padding: 18px 0
        .score-left
          flex: 0 1 auto
          text-align: center
          width: 138px
          border-right-1px(rgba(7, 17, 27, 0.1))
          .score
            margin-bottom: 6px
            line-height: 28px
            font-size: 24px
            color: rgb(255, 153, 0)
          .score-decription
            margin-bottom: 8px
            font-size: 12px
            color: #07111b
          .rankRate
            margin-bottom: 6px
            font-size: 10px
            color: #93999f
        .score-right
          flex: 0 0 auto
          padding: 0 24px
          box-sizing: border-box
          width: 237px
          .serviceScore
            margin-bottom: 8px
            font-size: 0
          .score-text
            display: inline-block
            margin-right: 12px
            line-height: 18px
            font-size: 12px
            color: #07111b
          .score-number
            display: inline-block
            margin-left: 12px
            line-height: 18px
            font-size: 12px
            color: rgb(255, 153, 0)
          .foodScore
            margin-bottom: 8px
            font-size: 0
          .deliveryTime
            font-size: 0
            .time
              line-height: 18px
              font-size: 12px
              color: rgb(147, 153, 159)
      .ratings-list-wrapper
        .ratings-list
          padding: 0 18px
          .ratings-item
            display: flex
            padding: 18px 0
            font-size: 0
            border-1px(rgba(7, 17, 27, 0.1))
            .user-avatar
              flex: 0 0 auto
              margin-right: 12px
              width: 28px
              height: 28px
              &>img
                width: 100%
                height: 100%
            .rating-data-wrapper
              flex: 1 1 auto
              .rating-data
                .username-and-time
                  margin-bottom: 4px
                  line-height: 12px
                  overflow: hidden
                  .username
                    float: left
                    font-size: 10px
                    color: rgb(7, 17, 27)
                  .usertime
                    float: right
                    font-size: 10px
                    color: rgb(147, 153, 159)
                .score-and-deliverytime
                  .score
                    display: inline-block
                    margin-right: 6px
                  .deliverytime
                    display: inline-block
                    vertical-align: top
                    line-height: 15px
                    font-size: 10px
                    color: rgb(147, 153, 159)
              .rating-text
                margin-top: 6px
                line-height: 18px
                font-size: 12px
                font-weight: 500
                color: #07111b
              .recommend-wrapper
                display: flex
                margin-top: 8px
                .iconthumb
                  flex: 0 0 auto
                  margin-top: 2px
                  margin-right: 8px
                  line-height: 16px
                  font-size: 12px
                  color: rgb(0, 160, 220)
                .recommend
                  flex: 1 1 auto
                  .recommend-list
                    .recommend-item
                      display: inline-block
                      margin-right: 8px
                      padding: 0 6px
                      text-align: center
                      width: 69px
                      white-space: nowrap
                      overflow: hidden
                      text-overflow: ellipsis
                      line-height: 16px
                      box-sizing: border-box
                      border: 1px solid rgba(7, 17, 27, 0.1)
                      border-radius: 1px
                      font-size: 9px
                      color: rgb(147, 153, 159)
                      &:last-child
                        margin-right: 0
</style>
