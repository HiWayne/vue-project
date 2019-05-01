<template>
  <div class="rating-time">{{rateTime | formatDate}}</div>
</template>

<script>
import {formatDate} from '../../common/js/formatDate.js'

export default {
  props: {
    rateTime: {
      type: Number,
      required: true
    }
  },

  filters: {
    formatDate: function(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .rating-time
    line-height: 12px
    font-size: 10px
    color: rgb(147, 153, 159)
</style>