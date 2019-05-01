<template>
  <i v-if="rateType !== undefined" v-bind:class="classMap[rateType]"></i>
</template>

<script>
export default {
  props: {
    rateType: {
      type: Number,
      required: true
    }
  },

  created: function () {
    this.classMap = ['icon-thumb_up', 'icon-thumb_down']
  }
}
</script>

<style lang='stylus' scoped>
  .icon-thumb_up
    color: rgb(0, 160, 220)
  .icon-thumb_down
    color: rgb(147, 153, 159)
</style>