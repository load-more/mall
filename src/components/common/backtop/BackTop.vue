<template>
  <div class="backtop">
    <img src="~assets/img/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    bottom: 55px;
    right: 10px;
    
    height: 29px;
    width: 29px;
    border-radius: 20px;
    background-color: white;
    text-align: center;
  }
  .backtop img {
    width: 20px;
    margin-top: 4px;
  }
</style>