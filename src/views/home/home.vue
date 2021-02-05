<template>
  <div class="homeView">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <main-carousel :banner-list="bannerList"></main-carousel>
    <recommend :recommendData="recommendData"></recommend>
    <tab-control :list="tabList" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar";
import MainCarousel from "components/content/MainCarousel";
import TabControl from "components/common/tabcontrol/TabControl";

import recommend from "views/home/recommend/recommend";

import GoodsList from "components/content/GoodsList/GoodsList";

import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    navBar,
    MainCarousel,
    recommend,
    TabControl,
    GoodsList,
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

  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.bannerList = res.data.banner.list;
        this.recommendData = res.data.recommend.list;
        // console.log(this.recommendData);
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list); //解析数组并push
      });
    },

    tabClick(index) {
      // console.log(index);
      this.tabIndex = index;
    },
  },
};
</script>

<style>
.nav-bar {
  background-color: rgb(209, 81, 166);
  color: white;
}
.homeView {
  margin-top: 44px;
}
</style>