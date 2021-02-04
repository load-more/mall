<template>
  <div class="item" @click='itemClick'>
    <div v-if="isActive" class="img_activated">
      <slot name="icon_activated"></slot>
    </div>
    <div v-else class="img">
      <slot name="icon"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbarItem',
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    }
  },
  props: {
    path: {
      type: String
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .item{
    flex: auto;
  }
  img{
    width: 29px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>