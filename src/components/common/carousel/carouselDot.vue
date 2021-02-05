<template>
  <div class="carousel-dot">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'carouselDot'
}
</script>

<style>
  .carousel-dot span {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    
  }
  .carousel-dot {
    display: flex;
    justify-content: space-between;

    width: 50px;

    position: absolute;
    bottom: 5px;

    left: 0;    /* 设置水平居中 */
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
</style>