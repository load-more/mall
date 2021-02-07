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
  - 这是因为图片是异步加载的，当要滚动时，better-scroll会先计算content的高度，此时如果图片还没全部加载完成，那么content的高度就比实际的更小，页面可滚动的范围也更小，所以当图片加载完成时，content高度增加，就会导致在某个位置卡住，无法往下滚动
  - 解决办法：在滚动之前，重新计算content@的高度，通过scroll.refresh()刷新

> 解决首页中better-scroll可滚动区域的问题
- better-scroll在决定有多少区域可以滚动时，是根据scrollerHeight属性决定的
- scrollerHeight属性是根据better-scroll中content的子组件的高度决定的，但是在首页里，由于图片是异步加载的，刚开始计算scrollerHeight时，没有将图片高度计算在内，到后来所有图片加载完成后，scrollerHeight有了新的高度，但属性并没有进行更新，所以滚动出现了问题
- 解决方法：
  - 监听每一张图片是否加载完成，只要有一张图片加载完成，就执行一次refresh()
  - 如何监听图片是否加载完成：
    - 1.原生js：img.onload = function(){}
    - 2.Vue中监听：img标签内加入@load=""方法
  - 在GoodsListItem中添加@load方法，如何将状态传给Scroll？
    - 1.自定义事件，但是要一层层转移，比较麻烦
    - 2.使用Vuex，创建公共状态
    - 3.创建bus总线:
      - 在main.js中给Vue添加一个原型$bus，值为新的Vue对象，这样Vue的实例就有$bus了，而且可以调用$emit和$on
      - 在GoodsListItem中添加@load方法，触发回调函数，添加事件监听
      - 在home中获取事件监听，并执行响应函数，即refresh

> 问题
- 注意给scroll封装一些常用的函数，避免其它组件调用scroll对象时还要频繁获取scroll
- 注意获取$refs时，要放在mounted中，只有当组件挂载后，才能获取到元素
- 在调用scroll中的一些方法时，通常在前面加上 this.scroll && ，这样就能保证在获取到scroll后才调用方法，避免没有scroll却仍然调用它的方法而导致报错

> 防抖（debounce）和节流（throttle）
- 防抖
  - 当数据请求过于频繁时，需要加入防抖操作，以减轻服务的压力
```javascript
mounted () {
  let refresh = this.debounce(this.$refs.scroll.refresh, 20)
  this.$bus.$on("itemImageLoad", () => { 
    refresh("refresh...")
  })
},

methods: {
  debounce (func, delay) {
    let timer = null        // 1.创建一个空的定时器

    return (...args) => {
      if (timer) {          // 2.如果存在定时器则销毁，避免创建多个定时器
        clearTimeout(timer)
      }
      timer = setTimeout(() => {  // 3.创建一个新的定时器
        func.apply(this, args)
        console.log(...args);
      }, delay)
    }
  },
```
  - 实现过程：
    - 1.调用refresh()，创建一个timer，在delay时间后，发送refresh请求
    - 2.如果在发送之前，又加入调用一次refresh()，则会销毁之前的timer，重新创建一个timer，在delay时间后，发送refresh请求
    - 3.如此反复，直到发送之前，没有调用refresh()

  - setTimeout的执行顺序：
```javascript
  cosole.log("fff")

  setTimeout({
    console.log("ddd")
  })

  console.log("aaa")
  // 执行结果：fff -> aaa -> ddd
  // 即使setTimeout函数没有设置延迟时间，但延时程序仍然会在最后执行
```


> tab-control的吸顶效果


> 让Home保持原来的状态
  - 使用keep-alive



