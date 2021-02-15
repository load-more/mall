<template>
  <div>
    <goods-list-item v-for="(item, index) in cartList" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  
</style>
