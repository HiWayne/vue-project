<template>
  <div id="app">
    <vheader v-bind:seller="seller"></vheader>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tab-item"><router-link to="seller">商家</router-link></div>
    </div>
    <keep-alive>
      <router-view v-bind:seller="seller" v-bind:ratings="ratings" v-bind:selectfoods="selectfoods" v-bind:shopcart-component="shopcartComponent"/>
    </keep-alive>
    <shopcart v-bind:seller="seller" v-bind:selectfoods="selectfoods" ref="shopcart"></shopcart>
  </div>
</template>

<script>
import {urlParse} from './common/js/urlParse.js'
import vheader from "./components/header/header.vue"
import shopcart from './components/shopcart/shopcart.vue'

const ERROK = 0

export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParm = urlParse()
          return queryParm.id
        })()
      },
      ratings: {},
      selectfoods: [],
      shopcartComponent: {}
    }
  },
  created: function () {
    this.$http.get('/api/seller?id=' + this.seller.id)
    .then((res) => {
      if (res.data.errno === ERROK) {
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
      else new Error()
    })
    .catch((error) => {
      console.log(error)
    })

    this.$http.get('/api/ratings')
    .then((res) => {
      if (res.data.errno === ERROK) {
        this.$set(this.ratings, 'ratings', res.data.data)
      }
      else {
        throw new Error()
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },
  mounted: function () {
    this.shopcartComponent = this.$refs.shopcart
  },
  components: {
    vheader,
    shopcart
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'

#app
  height: 100%
  .tab
    display: flex
    height: 40px
    line-height: 40px;
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      font-size: 14px
      text-align: center
      & > a
        display: block
        font-weight: 500
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>