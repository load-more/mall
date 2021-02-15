<template>
  <div class="bottom-bar">
    <div class="left">
      <img src="~assets/img/tick.svg" alt="" @click="tick" :class="{isChecked:isSelectAll}" />
      <span class="all">全选</span>
      <span>合计：{{ totalPrice }}</span>
    </div>
    <div class="goCalc" @click="calcClick">去结算({{ checkNum }})</div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    totalPrice() {
      console.log(this.cartList);
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.isChecked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    checkNum() {
      return this.cartList
        .filter((item) => {
          return item.isChecked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList == false) {return false}
      return !this.cartList.find(item => !item.isChecked)
    }
  },
  methods: {
    tick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.isChecked = false)
      } else {
        this.cartList.forEach(item => item.isChecked = true)
      }
    },
    calcClick() {
      const checked = this.cartList.find(item => item.isChecked)
      if (this.cartList == false) {
        this.$toast.show("购物车为空，请添加商品!")
      } else if (checked) {
        this.$toast.show("结算成功!")
      } else {
        this.$toast.show("未选择商品，请选择!")
      }
    }
  },
};
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eeeeee;
    display: flex;
    padding-left: 8px;
    justify-content: space-between;
  }
  .goCalc {
    background-color: #ff4305;
    text-align: center;
    color: white;
    padding: 0 20px;
    line-height: 40px;
  }
  .left {
    line-height: 40px;
  }
  .left img {
    border: 1px solid grey;
    border-radius: 50%;
    width: 20px;
    margin-right: 8px;
  }
  .all {
    margin-right: 20px;
  }
  .isChecked {
    background-color: #d151a6;
  }
</style>
