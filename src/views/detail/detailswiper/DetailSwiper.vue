<template>
  <div>
    <swiper v-if="images.length > 0" class="wrapper">
      <div class="swiper-slide"  v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper"
export default {
  name: "DetailSwiper",
  components: {
    Swiper
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
  .swiper-slide img {
    width: 100%;
  }
  .wrapper {
    height: 200px;
  }
</style>
