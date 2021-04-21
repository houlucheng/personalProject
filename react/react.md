## react介绍
1. react属于mvc模式
2. react是单向数据流
3. react默认使用sass，但是直接使用还会报错，还需要安装一个包
4. 创建react项目node必须是  ^10.12.0 || >=12.0.0
5. react调试工具 React Developer Tools
6. react16版本开始弃用了React.PropTypes  (因为React包变大，所以用了prop-types.js)

## react脚手架
> create-react-app

全局安装：
```
npm install create-react-app -g

创建项目： create-react-app demo
```

直接使用：
```
npx create-react-app demo
```

修改配置：
1. react默认没有配置文件，也无法单独创建一个配置文件去修改文件。但是有两种方法可修改：
  - 安装一个包 `yarn add react-app-rewired customize-cra`
  - 用命令 `npm run eject` 这个命令是用来暴露配置文件的  


## jsx语法规则
1. 定义虚拟DOM时不要写引号。
   ```
   const VDOM = <div> <span></span> </div>
   ```
2. 标签中混入js表达式时要用 {}。
   ```
    const myData = ""hello,react
    const VDOM = (
      <div>
        <span> {myData} </span>
      </div>
    )
   ```
3. 样式的类名指定不要用calss，要用 className。
   ```
    const myId = "wrap"
    const VDOM = (
      <div>
        <span className="title" id={myIId} > {myData} </span>
      </div>
    )
   ```
4. 内联样式要用 style={{key: val}} 的形式去写 (第一个花括号代表里面要写js，第二个花括号代表样式是对象形式)
   ```
    const VDOM = (
      <div>
        <span style={{color: 'red', fontSize: '29px'}} > {myData} </span>
      </div>
    )
   ```
5. 只能有一个根标签。
6. 标签必须闭合
7. 标签名小写的时候，编译时会和html标签作比较转化为同名html标签
   ```
    <good></good> // html找不到此标签会报错，但是还是会正常显示
   ```
8. 标签名首字母大写时认为是一个组件，按按组件解析
   ```
    <Good> hello,react </Good> // 不定义这个组件就会报错
   ```
9. jsx中只能写js表达式不能写js语句
  ```
    表达式：可以用变量接收的都叫表达式
      const ary = arr.map()
      const fn1 = function () {}

    语句：不能用变量接收的叫语句
      for(let i=0; i<5; i++){}
      if(){}
  ```  

### 组件
>函数式(简单)组件  
```
  function Mycomponent () {
    return <h2>函数式组件</h2>
  }

  ReactDOM.render(<Mycomponent/>, document.getElementById('test'))
```

>类式(复杂)组件  
```
  class Mycomponent extends React.Component {
    render() {
      console.log(this) //组件的实例
      return (
        <h2>我是类式组件</h2>
      )
    }
  }

  ReactDOM.render(<Mycomponent/>, document.getElementById('test'))
```
- 类式组件实力的三大核心属性1：**state**
  ```
    /* state的简写 */

    class Weather extends React.Component {
      // 在类里面写赋值语句就是在构造函数的实例上定义东西
      
      state = {isHot: true}

      render() {
        const {isHot} = this.state
        return (
          // 事件必须要以驼峰方式写
          <h2 onClick={this.changeWeather} >今天天气很{isHot ? "炎热" : '凉爽'}</h2>
        )
      }

      // 这里必须要用赋值 加 箭头函数 写，不然会丢失this
      changeWeather = ()=> {
        // 状态必须通过setState去修改，且是与原有的state合并，不是替换（这个方法在React.Component身上）
        this.setState({isHot: !this.state.isHot})
      }
    }

    ReactDOM.render(<Weather/>, document.getElementById('test'))

    /* state的繁琐写法 */

    。。。。。。请看具体事例：类式组件三大属性1_state.html

  ```
- 类式组件实力的三大核心属性2：**props**
  
- 类式组件实力的三大核心属性3：**refs**
  
  

