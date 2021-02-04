<template>
  <div id="topbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style>
  #topbar{
    display: flex;
    height: 49px;
    background-color: #f6f6f6;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 15px;
  }
</style>