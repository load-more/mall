<template>
  <div id="app">
    <main-top-bar></main-top-bar>
  </div>
</template>

<script>
import MainTopBar from 'components/content/MainTopBar'

export default {
  name: 'App',
  components: {
    MainTopBar
  }
}
</script>

<style>
  @import '~@/assets/css/normalize.css';
</style>
