<template>
  <div>
    <carousel>
      <carousel-item v-for="(item, index) in bannerList" :key="index" v-show="index==currentIndex">
        <a :href="item.link" slot="banner" @mouseover="mouseHover" @mouseleave="mouseLeave">
          <img :src="item.image" alt="" @load="carouselImageLoad" />
        </a>
      </carousel-item>
      <carousel-dot>
        <span v-for="(item, index) in bannerList" :key="index" :class="{'carousel-dot-active': index==currentIndex}" 
        @mouseover="mouseDotHover(index)"></span>
      </carousel-dot>
      <div class="carousel-left-arrow" @mouseover="mouseHover" ref="leftarrow" @mouseleave="mouseLeave" @click="prev">
        <img src="~assets/img/leftarrow.svg" alt="">
      </div>
      <div class="carousel-right-arrow" @mouseover="mouseHover" ref="rightarrow" @mouseleave="mouseLeave" @click="next">
        <img src="~assets/img/rightarrow.svg" alt="">
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "components/common/carousel/carousel";
import carouselItem from "components/common/carousel/carouselItem";
import carouselDot from "components/common/carousel/carouselDot";

export default {
  name: "MainCarousel",
  props: {
    bannerList: {
      type: Array,
    },
  },
  components: {
    carouselItem,
    carousel,
    carouselDot
  },
  data(){
    return {
      currentIndex: 0,
      timer: null,
      isLoadImage: false
    }
  },
  methods: {
    autoPlay() {
      this.timer = setInterval(() =>{
        this.currentIndex = (this.currentIndex + 1) % this.bannerList.length
      }, 3000)
    },
    mouseHover(){
      this.$refs.leftarrow.style.backgroundColor = "gray"
      this.$refs.rightarrow.style.backgroundColor = "gray"
      clearInterval(this.timer)
    },
    mouseLeave(){
      this.$refs.leftarrow.style.backgroundColor = ""
      this.$refs.rightarrow.style.backgroundColor = ""
      this.autoPlay()
    },
    mouseDotHover(index){
      this.currentIndex = index
    },
    prev(){
      this.currentIndex = (this.currentIndex + 1) % this.bannerList.length
    },
    next(){
      this.currentIndex = (this.currentIndex + 1) % this.bannerList.length
    },
    carouselImageLoad () {
      if (!this.isLoadImage) {
        this.$emit("isLoadImage")
        this.isLoadImage = true
      }
    }
  },
  created() {
    this.autoPlay()
  }
  
};
</script>

<style>
  .carousel-dot-active {
    background-color: gray !important;
  }
  .carousel-left-arrow {
    display: flex;
    position: absolute;
    left: 1px;

    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 30px;
  }
  .carousel-right-arrow {
    display: flex;
    position: absolute;
    right: 1px;

    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 30px;
  }
</style>