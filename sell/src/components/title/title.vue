<template>
  <div class="title">
    <span class="left-line"></span><span class="title-name">{{title}}</span><span class="right-line"></span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
.title
  margin: 0 auto
  display: flex
  flex-flow: row nowrap 
  justify-content: space-between
  align-items: center
  .left-line
    flex: 1 1 auto
    margin-left: 36px
    width: 112px
    height: 1px
    background: rgba(255, 255, 255, 0.2)
  .title-name
    margin: 0 12px
    flex: 0 0 auto
    font-size: 14px
    font-weight: 700
    color: #fff
  .right-line
    flex: 1 1 auto
    margin-right: 36px
    width: 112px
    height: 1px
    background: rgba(255, 255, 255, 0.2)
</style>
