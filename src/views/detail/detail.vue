<template>
  <div id="detail">
    <detail-nav @itemClick="itemClick" :current-index="currentIndex"></detail-nav>
    <scroll ref="scroll" :probe-type="3" :pull-up-load="true" :clickType="true" @scroll="scroll">
      <detail-swiper :images="topImages" @imgLoad="isImgLoad"></detail-swiper>
      <base-info :base-info="baseInfo"></base-info>
      <shop-info :shop-info="shopInfo" @imgLoad="isImgLoad"></shop-info>
      <detail-info :detail-info="detailInfo" @imgLoad="isImgLoad"></detail-info>
      <goods-info :goods-params="goodsParams" ref="params"></goods-info>
      <rate-info :rate-info="rateInfo" @imgLoad="isImgLoad" ref="rate"></rate-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
      <back-top @click.native="backtopClick" v-show="isShowBackTop" />
      <bottom-bar @addCart="addCart"></bottom-bar>
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
import BottomBar from "./bottombar/DetailBottomBar"

import GoodsList from "components/content/GoodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll"

import {getDetail, GoodsBaseInfo, GoodsShopInfo, GoodsParams, getRecommend} from "network/home.js"
import {debounce} from "common/utils"
import {backTopMixin} from "common/mixins.js"

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
    Scroll,
    BottomBar,
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
      recommend: [],
      positionY: [null, null, null, null],
      getPositionY: null,
      currentIndex: 0,
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
      // console.log(this.baseInfo);
    })
    getRecommend().then(res => {
      this.recommend = res.data.list
      // console.log(res);
    })

    this.getPositionY = debounce(() => {  // 创建防抖函数，提高性能
      this.positionY[0] = 0
      this.positionY[1] = this.$refs.params.$el.offsetTop
      this.positionY[2] = this.$refs.rate.$el.offsetTop
      this.positionY[3] = this.$refs.recommend.$el.offsetTop
      // console.log(this.positionY);
    })
  },
  methods: {
    isImgLoad() {
      this.$refs.scroll.refresh()
      this.getPositionY()
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.positionY[index])
    },
    scroll(position) {
      let y = -position.y
      if(y < this.positionY[1]) {
        this.currentIndex = 0
      }else if (y < this.positionY[2]) {
        this.currentIndex = 1
      }else if (y < this.positionY[3]) {
        this.currentIndex = 2
      }else {
        this.currentIndex = 3
      }

      this.displayBackTop(position)
    },
    addCart() {
      const commodity = {}
      commodity.image = this.topImages
      commodity.title = this.baseInfo.title
      commodity.price = this.baseInfo.lowNowPrice
      commodity.iid = this.iid
      commodity.isChecked = true    // 注意，要将isChecked属性添加进去，否则无法响应

      this.$store.dispatch("addCart", commodity).then(() => { // 调用action里的方法
        this.$toast.show("已加入购物车!")
      })  
    }
  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on("detailItemImageLoad", () => {    // 注意放在mounted里，保证能获取到元素
      refresh("Detail refresh...")
    })
  },
  mixins: [backTopMixin]
}
</script>

<style scoped>

</style>
