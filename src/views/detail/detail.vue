<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <!-- <scroll> -->
      <detail-swiper :images="topImages"></detail-swiper>
      <base-info :base-info="baseInfo"></base-info>
      <shop-info :shop-info="shopInfo"></shop-info>
      <detail-info :detail-info="detailInfo"></detail-info>
      <goods-info :goods-params="goodsParams"></goods-info>
    <!-- </scroll> -->
  </div>
</template>

<script>
import DetailNav from "./detailnav/DetailNav"

import DetailSwiper from "./detailswiper/DetailSwiper"
import BaseInfo from "./baseinfo/DetailBaseInfo"
import ShopInfo from "./shopinfo/DetailShopInfo"
import DetailInfo from "./detailinfo/DetailInfo"
import GoodsInfo from "./goodsinfo/GoodsInfo"

// import Scroll from "components/common/scroll/Scroll"

import {getDetail, GoodsBaseInfo, GoodsShopInfo, GoodsParams} from "network/home.js"

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo,
    ShopInfo,
    DetailInfo,
    GoodsInfo
    // Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo)
      this.shopInfo = new GoodsShopInfo(data.shopInfo)
      this.detailInfo = data.detailInfo.detailImage[0]
      this.goodsParams = new GoodsParams(data.itemParams)

      console.log(data);
    })
  }
}
</script>

<style scoped>

</style>
