<template>
  <div class="select">
    <transition name="buttonmove">
      <i v-if="food.count" class="icon-remove_circle_outline" v-on:click.stop="removefood(food, $event)"></i>
    </transition>
    <span v-if="food.count" class="count">{{food.count}}</span>
    <i class="icon-add_circle" v-on:click.stop="addfood(food, $event), $emit('drop', $event)"></i>
  </div>
</template>

<script>
export default {
  props: {
    food: {
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
    return {};
  },

  methods: {
    addfood: function (food, event) {
      if (!event._constructed) {
        return
      }
      else {
        if (!food.count) {
          this.$set(food, 'count', 1)
          this.selectfoods.push(food)
        }
        else {
          food.count++
        }
      }
    },
    removefood: function (food, event) {
      if (!event._constructed) {
        return
      }
      else {
        if (food.count) {
          food.count--
          if (!food.count) {
            this.selectfoods.forEach((item, index, array) => {
              if (item === food) {
                array.splice(index, 1)
                return
              }
            })
          }
        }
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
  .select
    display: inline-block
    height: 24px
    color: rgb(0, 160, 220)
    .buttonmove-enter-active, .buttonmove-leave-active
      transition: all 0.4s linear
    .buttonmove-enter, .buttonmove-leave-to
      transform: translate3d(24px, 0, 0) rotateZ(0deg)
      opacity: 0
    .buttonmove-leave, .buttonmove-enter-to
      transform: translate3d(0, 0, 0) rotateZ(180deg)
      opacity: 1
    .remove
      display: inline-block
      width: 24px
      height: 24px
    .icon-remove_circle_outline, .icon-add_circle
      display: inline-block
      margin-top: -6px
      padding: 6px
      vertical-align: top
      line-height: 24px
      font-size: 24px
      cursor: pointer
    .count
      display: inline-block
      vertical-align: top
      text-align: center
      width: 12px
      height: 24px
      line-height: 24px
      font-size: 10px
      color: rgb(147, 153, 159)
</style>