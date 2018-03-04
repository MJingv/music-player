<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-content" ref="scroll" :data="discList">
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in recommendList">
            <a :href="item.linkUrl">
              <img :src="item.picUrl"/>
            </a>

          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from 'api/recommend';
  import {ERR_OK} from "api/config";
  import Slider from 'base/slider/slider'

  export default {
    components: {
      Slider
    },
    data() {
      return {
        recommendList: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommendList = res.data.slider
          }

        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>
