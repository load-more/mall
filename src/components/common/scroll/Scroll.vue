<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    clickType: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    let wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: this.clickType
    })

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })


    this.scroll.on('pullingUp', () => {
      this.$emit('loadMore')
    })
  },
  methods: {  //封装函数
    scrollTo (x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x, y, time) //只有当scroll存在时，才执行后面的函数，防止报错
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    getPositionY () {
      return this.scroll ? this.scroll.y : 0
    }
  },
}
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
