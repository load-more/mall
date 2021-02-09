<template>
  <div>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <topbar v-show="this.$route.meta.show">
      <topbar-item path='/home'>
        <img slot='icon' src="~assets/img/home.svg" alt="">
        <img slot='icon_activated' src="~assets/img/home_activated.svg" alt="">
        <div slot="text">首页</div>
      </topbar-item>
      <topbar-item path='/category'>
        <img slot='icon' src="~assets/img/category.svg" alt="">
        <img slot='icon_activated' src="~assets/img/category_activated.svg" alt="">
        <div slot="text">分类</div>
      </topbar-item>
      <topbar-item path='/cart'>
        <img slot='icon' src="~assets/img/cart.svg" alt="">
        <img slot='icon_activated' src="~assets/img/cart_activated.svg" alt="">
        <div slot="text">购物车</div>
      </topbar-item>
      <topbar-item path='/profile'>
        <img slot='icon' src="~assets/img/profile.svg" alt="">
        <img slot='icon_activated' src="~assets/img/profile_activated.svg" alt="">
        <div slot="text">我的</div>
      </topbar-item>
    </topbar>
  </div>
</template>

<script>
import topbar from 'components/common/topbar/topbar'
import topbarItem from 'components/common/topbar/topbarItem'
export default {
  name: 'MainTopBar',
  components: {
    topbar,
    topbarItem
  }
}
</script>

<style>

</style>