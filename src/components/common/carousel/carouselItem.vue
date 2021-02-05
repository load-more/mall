<template>
  <div class="carousel-item">
    <div class="carousel-item-banner">
      <slot name="banner"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carouselItem'
}
</script>

<style>
  .carousel-item-banner img {
    width: 100%;
  }
  .carousel-item {
    width: 100%;
    /* flex: 0 0 auto;  flex-grow,flex-shrink=0 , 空间不足时，不放大也不缩放 */
  }
</style>