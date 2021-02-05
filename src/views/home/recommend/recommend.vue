<template>
  <div class="recommendGroup">
    <div v-for="(item, index) in recommendData" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommendData: {
      type: Array
    }
  }
}
</script>

<style>
  .recommendGroup {
    display: flex;
    justify-content: space-between;
    text-align: center;

    margin-top: 10px;
    border-bottom: solid 10px rgb(224, 224, 224);
    padding-bottom: 30px;
  }
  .recommendGroup img {
    width: 70px;
    margin-bottom: 10px;
  }
</style>