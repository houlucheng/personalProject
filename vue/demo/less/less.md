## Less
> 安装  
```
  npm方式 : npm i less --save-dev
  cdn方式 : <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.8.1/less.min.js" ></script> 
```

 > 变量（Variables）
 ```
  @wrapWidth: 100%;
  @width: 100px;
  @height: @width + 20px;
 ```

 > 混合（MinXin）
 ```
  .textCenter {
    text-align: center;
    margin: 20px;
    float: left;
  }
  .box-li {
    width: @width;
    height: @height;
    background-color: @backColor;
    .textCenter();
  }
 ```

 > 嵌套（Nesting）
 ```
  .box-li {
    width: @width;
    height: @height;
    .textCenter();
    .img {
      width: @wrapWidth;
      height: 80%;
    }
    &:after {
      content: " * ";
      display: block;
      font-size: 50px;
      height: 2px;
      clear: both;
      color: blueviolet;
    }
  }
 ```

 > @规则嵌套和冒泡
 ```
  .component {
    width: 300px;
    @media (min-width: 768px) {
      width: 600px;
      @media  (min-resolution: 192dpi) {
        background-image: url(/img/retina2x.png);
      }
    }
    @media (min-width: 1280px) {
      width: 800px;
    }
  }


编译为：
  .component {
    width: 300px;
  }
  @media (min-width: 768px) {
    .component {
      width: 600px;
    }
  }
  @media (min-width: 768px) and (min-resolution: 192dpi) {
    .component {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    .component {
      width: 800px;
    }
  }
 ```

 > 运算（Operations）  
算术运算符 +、-、*、/ 可以对任何数字、颜色或变量进行运算。如果可能的话，算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准
 ```
  // 所有操作数被转换成相同的单位
  @conversion-1: 5cm + 10mm; // 结果是 6cm
  @conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

  // conversion is impossible
  @incompatible-units: 2 + 5px - 3cm; // 结果是 4px

  // example with variables
  @base: 5%;
  @filler: @base * 2; // 结果是 10%
  @other: @base + @filler; // 结果是 15%
  @base: 2cm * 3mm; // 结果是 6cm
  @color: #224488 / 2; //结果是 #112244
  background-color: #112244 + #111; // 结果是 #223355
 ```

 > 转译（Escaping）  
 任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出
 ```
  @min768: ~"(min-width: 768px)";
  .element {
    @media @min768 {
      font-size: 1.2rem;
    }
  }

编译为：
  @media (min-width: 768px) {
    .element {
      font-size: 1.2rem;
    }
  }

注意，从 Less 3.5 开始，可以简写为：
  @min768: (min-width: 768px);
  .element {
    @media @min768 {
      font-size: 1.2rem;
    }
  }
 ```

 > 函数（Functions）
 ```
  利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 

  @base: #f04615;
  @width: 0.5;

  .class {
    width: percentage(@width); // returns `50%`
    color: saturate(@base, 5%);
    background-color: spin(lighten(@base, 25%), 8);
  }
 ```

 > 命名空间和访问符
 ```
  #bundle() {
    .button {
      display: block;
      border: 1px solid black;
      background-color: grey;
      &:hover {
        background-color: white;
      }
    }
    .tab { ... }
    .citation { ... }
  }

  #header a {
    color: orange;
    #bundle.button();  // 还可以书写为 #bundle > .button 形式
  }
 ```

 > 映射（Maps）
 ```
  #colors() {
    primary: blue;
    secondary: green;
  }

  .button {
    color: #colors[primary];
    border: 1px solid #colors[secondary];
  }

编译为：
  .button {
    color: blue;
    border: 1px solid green;
  }
 ```

 > 作用域（Scope）
 ```
  @var: red;
  #page {
    @var: white;
    #header {
      color: @var; // white
    }
  }

混合（mixin）和变量的定义不必在引用之前事先定义
  @var: red;
  #page {
    #header {
      color: @var; // white
    }
    @var: white;
  }
 ```

 > 导入（Importing）
 ```
  @import "library"; // library.less
  @import "typo.css";
 ```