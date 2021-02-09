<template>
  <div class="baseInfo">
    <div class="title">
      <p>{{baseInfo.title}}</p>
    </div>
    <div class="price">
      <span class="currentPrice" :style="{color:baseInfo.discountBg}">{{baseInfo.price}}</span>
      <span class="oldPrice">{{baseInfo.oldPrice}}</span>
      <span class="discountDesc" :style="{backgroundColor:baseInfo.discountBg}">{{baseInfo.discountDesc}}</span>
    </div>
    <div class="shopInfo">
      <div>{{baseInfo.sales}}</div>
      <div>{{baseInfo.collection}}</div>
      <div>{{baseInfo.deliver}}</div>
    </div>
    <div class="services">
      <div><img :src="baseInfo.service1Icon" alt="">
        {{baseInfo.service1}}
      </div>
      <div><img :src="baseInfo.service1Icon" alt="">
        {{baseInfo.service2}}
      </div>
      <div>
        <img :src="baseInfo.service1Icon" alt="">
        {{baseInfo.service3}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 18px;
    padding: 0 6px;
  }
  .title p {
    margin: 10px 0;
  }
  .price {
    padding: 0 6px;
    margin-bottom: 10px;
  }
  .currentPrice {
    font-size: 22px;
  }
  .oldPrice {
    font-size: 16px;
    color: gray;
    margin: 0 5px;
    text-decoration: line-through gray;
  }
  .discountDesc {
    color: white;
    font-size: 17px;
    border-radius: 9px;
    padding: 0 5px;
  }
  .shopInfo {
    display: flex;
    justify-content: space-between;
    color: gray;
    padding: 0 6px;
    font-size: 15px;
  }
  .services {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 20px 6px;
    box-shadow: 0 1px 2px gray;
    margin-top: 5px;
  }
  .services img {
    width: 12px;
  }
</style>
