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


> better-scroll
  