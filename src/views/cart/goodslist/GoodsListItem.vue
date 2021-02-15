<template>
  <div class="item" v-if="goodsItem.image">
    <div class="tick" @click="btnClick">
      <img src="~assets/img/tick.svg" :class="{isChecked:goodsItem.isChecked}" />
    </div>
    <div class="image">
      <img :src="goodsItem.image[0]" alt="">
    </div>
    <div class="desc">
      <p>{{goodsItem.title}}</p>
      <div class="number">
        <span class="price">{{goodsItem.price}}</span>
        <span class="count">x{{goodsItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    btnClick() {
      this.goodsItem.isChecked = !this.goodsItem.isChecked
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    padding: 8px;
    border-bottom: 2px solid gray;
    background-color: white;
  }
  .image img {
    width: 70px;
    margin-right: 8px;
    border-radius: 5px;
  }
  .number {
    display: flex;
    justify-content: space-between;
  }
  .desc .count {
    right: 0;
    font-size: 18px;
  }
  .desc .price {
    color: red;
    font-size: 18px;
  }
  .desc p {
    font-weight: bold;
    margin-top: 0;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tick img {
  vertical-align: middle;
  border-radius: 50%;
  width: 20px;
  margin-right: 8px;
  border: solid gray 1px;
  }
  .tick {
    display: flex;
    align-items: center;
  }
  .isChecked {
    background-color: #d151a6;
  }
</style>
