### 项目
> 划分目录结构
  - assets
  - common
  - components
  - network
  - router
  - store
  - views

> 导入css文件
  - normalize.css
  - base.css

> 设置别名
  - 新建vue.config.js
  - 导出配置


> 特殊语法
  ```
  let a = [2, 4, 6]
  let b = ['test', 're']
  b.push(...a)  // 将数组a解析，并将所有元素push到b中
  ```

> 项目中遇到的问题
- 轮播图的实现
- flex布局的应用
  - 熟悉两种状态下的属性：
    - 容器
      - flex-direction    // 主轴方向
      - flex-wrap         // 包裹
      - flex-flow         // 前两个属性的简写
      - justify-content   // 主轴方向的排列方式
      - align-items       // 交叉轴方向的排列方式（一行）
      - align-content     // 交叉轴方向的排列方式（多行）
    - 元素
      - order
      - flex-grow
      - flex-shrink
      - flex-basis
      - flex
      - align-self
- 定位方式：
  - static    //默认
  - relative  //父相子绝
  - absolute
  - fixed     //固定
  - sticky    //粘滞

  - 注意：当给一个没有设置宽高的父元素设置为相对定位时，给子元素设置绝对定位时，要设置bottom或者padding-bottom或其它相对量，保证有空间

- 给组件添加响应事件时，要加.native修饰词，这样才能转换成原生的元素进行响应


> better-scroll
- 创建多个有序列表快捷写法：ul>li{列表$}*99
- 使用方法：
  - 创建一个父元素，其包裹一个子元素，注意子元素只能有一个（虽然可以包括多个子元素，但滚动效果只会作用于第一个子元素，所以最好只设置一个子元素，如果有多个组件，可以将其全部包含在第一个子元素里）
  - 给父元素设置高度！！！
  - 导入better-scroll
  - 获取父元素（querySelector或者this.$refs.），注意：必须在mounted中获取，因为只有挂载上去并渲染，才能获取到元素
    - querySelector和this.$refs的区别
      - querySelector是在真个html中查找元素，所以如果元素具有相同的class属性，那么获取到的可能是其它组件中的元素
      - this.$refs中的this指向当前组件的实例对象，所以它只会在组件内查找ref属性，这就避免了获取到其它组件的元素，所以一般推荐使用这种方法获取元素
      - 另外，给元素设置css样式时，通常许多元素会有相同的class属性，如果直接在style中给class设置样式，会导致html中所有该class的元素都有这些样式，如果给style加上scoped，就只会给组件内的class设置样式，而不会跨组件
  - new一个better-scroll对象，传入父元素，还有其它参数对象


> backtop
- 实现返回顶部的功能
- 实现达到某一位置显示图标功能


> 加载更多
- 大写问题：
  - 在使用动态属性的时候，通常属性名不能出现大写，要用-代替，如： :background-color="color"
  - 但是用自定义事件时，可以使用大写，如： @btnClick="btnClick"
- 页面卡住无法滚动问题：
  - 这是因为图片是异步加载的，当要滚动时，better-scroll会先计算wrapper的高度，此时如果图片还没全部加载完成，那么wrapper的高度就比实际的更小，页面可滚动的范围也更小，所以当图片加载完成时，wrapper高度增加，就会导致在某个位置卡住，无法往下滚动
  - 解决办法：在滚动之前，重新计算wrapper的高度，通过scroll.refresh()刷新

