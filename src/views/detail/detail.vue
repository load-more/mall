<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <scroll ref="scroll" :probe-type="3" :pull-up-load="true" :clickType="true">
      <detail-swiper :images="topImages" @imgLoad="isImgLoad"></detail-swiper>
      <base-info :base-info="baseInfo"></base-info>
      <shop-info :shop-info="shopInfo" @imgLoad="isImgLoad"></shop-info>
      <detail-info :detail-info="detailInfo" @imgLoad="isImgLoad"></detail-info>
      <goods-info :goods-params="goodsParams"></goods-info>
      <rate-info :rate-info="rateInfo" @imgLoad="isImgLoad"></rate-info>
      <goods-list :goods="recommend" ></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNav from "./detailnav/DetailNav"

import DetailSwiper from "./detailswiper/DetailSwiper"
import BaseInfo from "./baseinfo/DetailBaseInfo"
import ShopInfo from "./shopinfo/DetailShopInfo"
import DetailInfo from "./detailinfo/DetailInfo"
import GoodsInfo from "./goodsinfo/GoodsInfo"
import RateInfo from "./rateinfo/DetailRateInfo"

import GoodsList from "components/content/GoodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll"

import {getDetail, GoodsBaseInfo, GoodsShopInfo, GoodsParams, getRecommend} from "network/home.js"
import {debounce} from "common/utils"

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo,
    ShopInfo,
    DetailInfo,
    GoodsInfo,
    RateInfo,
    GoodsList,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      rateInfo: {},
      recommend: []
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
      this.rateInfo = data.rate
      // console.log(data);
    })
    getRecommend().then(res => {
      this.recommend = res.data.list
      console.log(res);
    })
  },
  methods: {
    isImgLoad() {
      this.$refs.scroll.refresh()
      console.log(1111);
    }
  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on("detailItemImageLoad", () => {    // 注意放在mounted里，保证能获取到元素
      refresh("Detail refresh...")
    })
  }
}
</script>

<style scoped>

</style>
