<template>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style>
  .carousel {
    position: relative;
  }
</style>