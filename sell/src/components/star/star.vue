<template>
  <div class="star">
      <span v-for="(star, index) of stars" v-bind:key="index" v-bind:class="[star + size, 'margin' + margin]"></span>
  </div>
</template>

<script>
const starLength = 5
const on = 'on'
const off = 'off'
const half = 'half'

export default {
    props: {
        score: {
            type: Number,
            requierd: true
        },
        size: {
            type: Number,
            required: true
        },
        margin: {
            type: Number
        }
    },
    computed: {
        stars: function () {
            let stars = []
            const score = Math.floor(this.score * 2) / 2
            const halfNumber = score % 1 !== 0
            const onNumber = Math.floor(score)
            for (let i = 0; i < onNumber; i++) {
                stars.push(on)
            }
            if (halfNumber) {
                stars.push(half)
            }
            while (stars.length < starLength) {
                stars.push(off)
            }
            return stars
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.star
    display: inline-block
    vertical-align: top
    font-size: 0
    &>span
        display: inline-block
        margin-right: 22px
        &.margin5
            margin-right: 5px
        &.margin6
            margin-right: 6px
        &.margin3
            margin-right: 3px
    span:last-child
        margin-right: 0
    &>.half24
        width: 10px
        height: 9.5px
        bgImage-size('star24_half')
        background-size: 10px 9.5px
        background-repeat: no-repeat
    &>.off24
        width: 10px
        height: 9.5px
        bgImage-size('star24_off')
        background-size: 10px 9.5px
        background-repeat: no-repeat
    &>.on24
        width: 10px
        height: 9.5px
        bgImage-size('star24_on')
        background-size: 10px 9.5px
        background-repeat: no-repeat
    &>.half36
        width: 15px
        height: 14.5px
        bgImage-size('star36_half')
        background-size: 15px 14.5px
        background-repeat: no-repeat
    &>.off36
        width: 15px
        height: 14.5px
        bgImage-size('star36_off')
        background-size: 15px 14.5px
        background-repeat: no-repeat
    &>.on36
        width: 15px
        height: 14.5px
        bgImage-size('star36_on')
        background-size: 15px 14.5px
        background-repeat: no-repeat
    &>.half48
        width: 20px
        height: 19px
        bgImage-size('star48_half')
        background-size: 20px 19px
        background-repeat: no-repeat
    &>.off48
        width: 20px
        height: 19px
        bgImage-size('star48_off')
        background-size: 20px 19px
        background-repeat: no-repeat
    &>.on48
        width: 20px
        height: 19px
        bgImage-size('star48_on')
        background-size: 20px 19px
        background-repeat: no-repeat
</style>
