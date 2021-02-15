module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应的是设计稿的宽度
      viewportHeight: 667,  // 视窗的高度，对应的是设计稿的高度，也可以不配置
      unitPrecision: 5,   // 指定单位的小数位数，很多时候无法整除
      viewportUnit: 'vw', // 视窗单位，（vw/rem），建议使用vw
      selectorBlackList:['ignore'], // 指定不需要转换的类，全部写在这里可能很麻烦，可以将ignore逐个加入到组件中的类里，要有空格
      minPixelValue: 1, //小于或等于1px不转换成视窗单位
      mediaQuery: false // 允许在媒体查询中转换px，一般设为false
    }
  }
}