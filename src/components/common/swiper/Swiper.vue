<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
</template>

<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  export default {
    name: 'swiper-example-autoplay',
    title: 'Autoplay',
    mounted() {
      new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          // 分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observer: true, // 修改swiper自己或子元素时，自动初始化swiper，必须加入
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper，必须加入

          // 自动播放
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          // 前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
        })        
    }
  }
</script>

<style scoped>
  .swiper-container {
    height: 300px;
    width: 100%;
  }
  .swiper-wrapper div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    margin-right: 0;
  }
</style>
