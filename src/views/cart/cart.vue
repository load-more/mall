<template>
<div class="cart">
  <nav-bar class="nav-bar"><div slot="center">购物车({{length}})</div></nav-bar>
  <scroll :probe-type="0" :pull-up-load="true" :click-type="true" class="scroll">
    <goods-list :cart-list="cartList"></goods-list>
  </scroll>
  <bottom-bar :cart-list="cartList"></bottom-bar>
</div>

</template>

<script>
import NavBar from "components/common/navbar/navbar"
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "./goodslist/GoodsList"
import BottomBar from "./bottombar/BottomBar"

import {mapGetters} from "vuex"

export default {
  name: 'cart',
  components: {
    NavBar,
    Scroll,
    GoodsList,
    BottomBar
  },
  computed: {
    // 方式一：参数是数组，变量名要对应
    // ...mapGetters(['cartLength'])

    // 方式二：参数是对象，变量可以自定义
    ...mapGetters({
      length: "cartLength",
      cartList: "cartList"
    })
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: rgb(209, 81, 166);
    color: white;
  }
  .scroll {
    background-color: white;
    height: calc(100% - 44px - 49px - 40px) ; 
    position: relative;
    top: 0;
  }
</style>