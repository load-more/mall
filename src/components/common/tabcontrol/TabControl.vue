<template>
  <div class="tab-control">
    <div v-for="(item, index) in list" :key="index" :class="{'tab-control-active': index === currentIndex}">
      <span @click="tabcontrolClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabcontrolClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)   // 子传父，自定义事件
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: white;

    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .tab-control-active span {
    border-bottom: red solid 2px;
  }
  .tab-control span {
    padding: 3px;
  }
</style>