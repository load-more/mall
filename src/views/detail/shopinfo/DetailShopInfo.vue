<template>
  <div>
    <div class="shop">
      <img :src="shopInfo.logo" alt="">
      {{shopInfo.name}}
    </div>
    <div class="detail">
      <div class="left">
        <div class="sells">
          <span class="number">{{shopInfo.sells}}</span>
          <span class="title">总销量</span>
        </div>
        <div class="goods">
          <span class="number">{{shopInfo.goods}}</span>
          <span class="title">全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="scoreItem">
          <span>{{item.name}}</span>
          <span v-if="item.isBetter" :style="{color:'red'}" class="point">{{item.score}}</span>
          <span v-else :style="{color:'green'}" class="point">{{item.score}}</span>
          <span v-if="item.isBetter" :style="{backgroundColor:'red',color:'white'}">高</span>
          <span v-else :style="{backgroundColor:'green',color:'white'}">低</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shop {
    font-size: 15px;
    padding-top: 20px;
  }
  .shop img {
    width: 60px;
  }
  .detail .left {
    display: flex;
    text-align: center;
    width: 50%;
    justify-content: space-evenly;
    border-right: solid gray 2px;
    padding: 8px;
  }
  .detail .sells, .detail .goods {
    display: flex;
    flex-direction: column;
  }
  .left .number {
    font-size: 20px;
    font-weight: bold;
  }
  .left .title {
    font-size: 15px;
  }
  .scoreItem {
    display: flex;
  }
  .scoreItem .point {
    flex: 1;
    padding-left: 16px;
  }
  .score {
    width: 50%;
    padding: 0 16px;
    font-size: 15px;
  }
  .detail {
    display: flex;
    padding: 20px 0;
  }
</style>
