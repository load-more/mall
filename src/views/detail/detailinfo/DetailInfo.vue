<template>
  <div class="detailInfo">
    <div class="desc">
      {{detailInfo.desc}}
    </div>
    <div class="key">
      {{detailInfo.key}}
    </div>
    <div v-for="(item, index) in detailInfo.list" :key="index" class="detailImage">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
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
  .detailImage img {
    width: 100%;
  }
  .detailInfo {
    border-top: solid 2px gray;
  }
  .key, .desc {
    padding: 20px;
  }
</style>
