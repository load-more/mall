<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <carousel>
      <div v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </carousel>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navbar'
import carousel from 'components/common/carousel/carousel'
import carouselItem from 'components/common/carousel/carouselItem'
import {getHomeMultiData} from 'network/home'


export default {
  name: 'home',
  components: {
    navBar,
    carousel,
    carouselItem
  },
  data(){
    return {
      bannerList: []
    }
  },
  created(){
    getHomeMultiData().then(res => {
      this.bannerList = res.data.banner.list
      console.log(this.bannerList);
    })
  }
}
</script>

<style>
  .nav-bar {
    background-color: rgb(209, 81, 166);
    color: white;
  }
</style>