<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Slider',
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted() {
      setTimeout(() => {
        // this._setSliderWidth()
        // this._initSlider()
      }, 20)

      // this.$nextTick(() => {
      //   this.scroll = new Bscroll(this.$refs.wrapper, {})
      // })
    },
    _initSlider() {
      this.scroll = new Bscroll(this.$refs.wrapper, {})
    },
    _setSliderWidth() {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%

</style>
