import BackTop from "components/common/backtop/BackTop"

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backtopClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    displayBackTop (position) {
      this.isShowBackTop = (-position.y) > 500
    }
  }
}