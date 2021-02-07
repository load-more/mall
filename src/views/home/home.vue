<template>
  <div class="homeView">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control :list="tabList" @tabClick="tabClick" ref="tabControl" v-show="isShowTabControl" 
    :tab-index="tabIndex" />
    <scroll ref="scroll" :probe-type="3" :pull-up-load="true" :clickType="true" @scroll="scroll"
     @loadMore="loadMore"
     >
      <main-carousel :banner-list="bannerList" @isLoadImage="isLoadImage" />
      <recommend :recommendData="recommendData" />
      <tab-control :list="tabList" @tabClick="tabClick" ref="tabControl" :tab-index="tabIndex" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backtopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar";
import MainCarousel from "components/content/MainCarousel";
import TabControl from "components/common/tabcontrol/TabControl";
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"

import recommend from "views/home/recommend/recommend";

import GoodsList from "components/content/GoodsList/GoodsList";

import { getHomeMultiData, getHomeGoods } from "network/home";
import {debounce} from "common/utils"

export default {
  name: "home",
  components: {
    navBar,
    MainCarousel,
    recommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      bannerList: [],
      recommendData: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      tabList: ["流行", "新款", "精选"],
      tabListEn: ['pop', 'new', 'sell'],
      tabIndex: 0,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.tabListEn[this.tabIndex]].list
    },
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on("itemImageLoad", () => {    // 注意放在mounted里，保证能获取到元素
      refresh("refresh...")
    })
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getPositionY()
  },

  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.bannerList = res.data.banner.list;
        this.recommendData = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list); //解析数组并push

        this.$refs.scroll.finishPullUp() //结束加载更多,下一次继续调用
      });
    },

    tabClick(index) {
      this.tabIndex = index;
    },
    backtopClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    scroll (position) {
      this.isShowBackTop = (-position.y) > 500
      this.isShowTabControl = (-position.y) > (this.tabOffsetTop)
    },
    loadMore () {
      this.getHomeGoods(this.tabListEn[this.tabIndex])
    },

    isLoadImage () {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
    
    
  },
};
</script>

<style>
.nav-bar {
  background-color: rgb(209, 81, 166);
  color: white;
}
.homeView {
  position: relative;
  height: 100vh;
}

</style>