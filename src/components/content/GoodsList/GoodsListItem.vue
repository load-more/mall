<template>
  <div class="goods-list-item"  @click="goodsListItemClick">
    <img :src="item.show.img" alt="" @load="imgLoad">
    <div class="goods-list-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}￥,</span>
      <span class="cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad () {
      this.$bus.$emit("itemImageLoad")
    },
    goodsListItemClick () {
      this.$router.push('/detail/' + this.item.iid)
    }
  }
}
</script>

<style>
  .goods-list-item {
    padding-bottom: 50px;
    width: 48%;
    position: relative;   /* 子相父绝 */
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-info {
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
  }
  .goods-list-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  
</style>