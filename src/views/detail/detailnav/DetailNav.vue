<template>
  <div>
    <navBar>
      <div slot="left" class="back">
        <img src="~assets/img/leftarrow.svg" alt="" @click="back">
      </div>
      <div class="titles" slot="center">
        <div v-for="(item, index) in list" :key="index" class="items">
          <span @click="itemClick(index)" :class="{active:index===currentIndex}">{{item}}</span>
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar";

export default {
  name: "DetailNav",
  components: {
    navBar,
  },
  data() {
    return {
      list: ["商品", "参数", "评论", "推荐"],
      // currentIndex: 0
    };
  },
  methods: {
    back () {
      this.$router.back()
    },
    itemClick (index) {
      this.currentIndex = index
      this.$emit("itemClick", index)
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  }
};
</script>

<style scoped>
  .titles {
    display: flex;
  }
  .items {
    flex-grow: 1;
    font-size: 13px;
  }
  .active {
    color: red;
  }

</style>
