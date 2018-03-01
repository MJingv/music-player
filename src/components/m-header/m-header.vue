<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Vue Music Player</h1>
  </div>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .m-header
    color: $color-theme
    display flex
    justify-content center

    .icon
      background-size: 30px 32px
      width: 30px
      height: 32px
      bg-image('logo')
      margin:10px

    .text
      margin-top:15px
      font-size: $font-size-large-x


</style>
