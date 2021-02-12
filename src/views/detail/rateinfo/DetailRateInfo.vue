<template>
  <div v-if="rateInfo.list" class="rateInfo">
    <div class="top">
      <span class="title">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="user">
      <img :src="rateInfo.list[0].user.avatar" alt="" @load="imgLoad">
      <span>{{rateInfo.list[0].user.uname}}</span>
      <p>{{rateInfo.list[0].content}}</p>
      <div class="date">
        <span>{{date}}</span>
        <span>{{rateInfo.list[0].style}}</span>
      </div>
    </div>
    <div class="show" v-for="(item, index) in rateInfo.list[0].images" :key="index">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
import {dateFormat} from "common/utils"

export default {
  name: "DetailRateInfo",
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    date() {
      return dateFormat("yyyy-MM-dd hh:mm:ss", new Date(this.rateInfo.list[0].created))
    }
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad")
    }
  }
}
</script>

<style scoped>
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 2px solid gray;
  }
  .title {
    padding-left: 10px;
  }
  .more {
    padding-right: 10px;
  }
  .user {
    padding: 10px;
  }
  .user p {
    color: gray;
  }
  .date {
    color: rgb(165, 165, 165);
    font-size: 15px;
  }
  .show {
    padding: 10px;
  }
  .show img {
    width: 50%;
  }
  .rateInfo {
    padding-bottom: 20px;
    border-bottom: solid 2px gray;
  }
</style>
