<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="service">
        <img src="~assets/img/service.svg" alt="">
        <span>客服</span>
      </div>
      <div class="shop">
        <img src="~assets/img/shop.svg" alt="">
        <span>店铺</span>
      </div>
      <div class="collection">
        <img src="~assets/img/collection.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="middle" @click="addCart">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 49px;
    z-index: 99;
    display: flex;
  }
  .left {
    width: 50%;
    display: flex;
  }
  .service, .shop, .collection {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    align-items: center;
  }
  .middle {
    background-color: #ffe715;
    color: rgb(131, 131, 131);
    line-height: 49px;

  }
  .right {
    background-color: #fe669a;
    color: #fff;
    flex: 1;
    line-height: 49px;
    text-align: center;
  }
</style>
