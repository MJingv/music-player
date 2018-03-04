<template>
  <div class="tab">
    <router-link class="tab-item" tag="div" to="/recommend">
      <span class="tab-link">推荐</span></router-link>
    <router-link class="tab-item" tag="div" to="/rank">
      <span class="tab-link">排行</span></router-link>
    <router-link class="tab-item" tag="div" to="/singer">
      <span class="tab-link">歌手</span></router-link>
    <router-link class="tab-item" tag="div" to="/search">
      <span class="tab-link">搜索</span></router-link>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display flex
    justify-content space-around
    .tab-item
      .tab-link
        padding-bottom: 3px
        color: $color-text-l
      &.router-link-active .tab-link
        color:$color-theme
        border-bottom: 4px solid $color-theme




</style>
