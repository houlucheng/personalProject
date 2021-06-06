## react介绍
1. react属于mvc模式
2. react是单向数据流
3. react默认使用sass，但是直接使用还会报错，还需要安装一个包
4. 创建react项目node必须是  ^10.12.0 || >=12.0.0
5. react调试工具 React Developer Tools
6. react 15.5 以后版本开始弃用了React.PropTypes  (因为React包变大，所以用了prop-types.js)
7. pubsub-js 实现兄弟组建之间的传值（发布订阅）
8. querystring url参数转对象以及对象转url参数 qs.stringify()  qs.parse()

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

## 组件
### 函数式(简单)组件  
```
  function Mycomponent () {
    return <h2>函数式组件</h2>
  }

  ReactDOM.render(<Mycomponent/>, document.getElementById('test'))
```

### 类式(复杂)组件  
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

### 类式组件的三大属性
#### state
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

#### props
    ```
      /* props简写 */
      class Person extends React.Component {
        constructor(props) {
          // 构造器中传props的作用是可以在构造器中访问实例的props
          super(props)
          console.log(this.props);
        }
        render() {
          // this.props.name = "nihao" // 会报错 因为props是只读的
          const {name, age, sex} = this.props
          return (
            <ul>
              <li>名字：{name}</li>
              <li>年龄：{age}</li>
              <li>性别：{sex}</li>
            </ul>
          )
        }
        // 加上static就相当于给Person类本身添加方法
        static propTypes = {
          name: PropTypes.string.isRequired, // 名字必须传，而且必须是string类型
          age: PropTypes.number, // 限制年龄必须是数字
          speak: PropTypes.func // 限制speak必须是函数
        }
        static defaultProps = {
          sex: "不男不女", // 可不传有设置默认值
          age: 18
        }
      }
      let arr = {name: "张三", age: 20, sex: '男', speak: function(){}}
      ReactDOM.render(<Person {...arr} />, document.getElementById('test'))

      // ReactDOM.render(<Person name="张三" age={20} sex="男" />, document.getElementById('test'))
      // ReactDOM.render(<Person name="李四" age={25} sex="女" />, document.getElementById('test1'))
    ```
    
#### refs
    ```
      1. 字符串形式的ref 官方不建议使用 因为使用多了有效率问题 将来有可能会废弃这种方式
        class Demo extends React.Component {
          showDate = () => {
            alert(this.refs.inp1.value)
          }
          showDate2 = () => {
            alert(this.refs.inp2.value)
          }
          render() {
            return (
              <div>
                <input ref="inp1" type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                <input ref="inp2" onBlur={this.showDate2} type="text" placeholder="失去焦点提示数据" />
              </div>
            )
          }
        }
        ReactDOM.render(<Demo/>, document.getElementById('test'))

      2. 回调形式的ref（内联函数 与 类中定义函数）
        class Demo extends React.Component {
          showDate = () => {
            alert(this.input1.value)
          }
          showDate2 = () => {
            alert(this.input2.value)
          }
          saveInput = (c)=> {
            this.input2 = c
          }
          render() {
            return (
              <div>
                {/* 如果ref是内联函数，组件有更新时这个函数会执行两次，第一次返回null，第二次才返回DOM 因为render再次被调用时会销毁上次的DOM这时候会调一次*/}
                <input ref={c => this.input1 = c} type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                {/* 在类中定义函数 */}
                <input ref={this.saveInput} onBlur={this.showDate2} type="text" placeholder="失去焦点提示数据" />
              </div>
            )
          }
        }
        ReactDOM.render(<Demo/>, document.getElementById('test'))

      3. React.createRef() 形式
        class Demo extends React.Component {
          // “专人专用”，一个ref只能用一个React.createRef创建出来的容器
          myRef = React.createRef()
          myRef2 = React.createRef()
          showDate = () => {
            alert(this.myRef.current.value);
          }
          showDate2 = () => {
            alert(this.myRef2.current.value)
          }
          render() {
            return (
              <div>
                <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                <input ref={this.myRef2} onBlur={this.showDate2} type="text" placeholder="失去焦点提示数据" />
              </div>
            )
          }
        }
        ReactDOM.render(<Demo/>, document.getElementById('test'))
      
      4. react中的事件处理
        (1). 通过onXxx属性指定事件处理函数(注意大小写)
            a. React使用的是自定义(合成)事件，而不是使用的原生DOM事件 ---- 为了更好的兼容
            b. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ---- 为了高效
        (2). 通过event.target得到发生事件的DOM元素对象 ---- 不要过度的使用ref

        class Demo extends React.Component {
          showDate = () => {
            alert(this.myRef2.current.value)
          }
          showDate2 = (event) => {
            alert(event.target.value);
          }
          render() {
            return (
              <div>
                <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                <input onBlur={this.showDate2} type="text" placeholder="失去焦点提示数据" />
              </div>
            )
          }
        }
        ReactDOM.render(<Demo/>, document.getElementById('test'))

    ```

#### 受控 与 非受控 组件  
1. 非受控组件   
    ```
      // 页面内的输入类DOM 现用现取 的就叫非受控组件
      class Login extends React.Component {
          handleSubmit = (event)=> {
            event.preventDefault();
            alert(`用户名：${this.username.value}，密码：${this.password.value}`)
          }
          render() {
            return (
              <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                用户名：<input ref={c => this.username = c} type="text" name="userName" />
                密码：<input ref={c => this.password = c} type="password" name="password" />
                <button>登录</button>
              </form>
            )
          }
        }
      ReactDOM.render(<Login/>, document.getElementById('test'))
    ```
2. 受控组件
    ```
      // 
      class Login extends React.Component {
        state = {
          username: "",
          password: ""
        }
        saveUserName = (event) => {
          this.state.username = event.target.value
        }
        savePassword = (event) => {
          this.state.password = event.target.value
        }
        handleSubmit = (event)=> {
          event.preventDefault();
          alert(`用户名：${this.state.username}，密码：${this.state.password}`)
        }
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              用户名：<input onInput={this.saveUserName} type="text" name="userName" />
              密码：<input onInput={this.savePassword} type="password" name="password" />
              <button>登录</button>
            </form>
          )
        }
      }
      ReactDOM.render(<Login/>, document.getElementById('test'))
    ```
3. 高阶函数 与 函数柯里化
    ```
      a. 高阶函数
        * 若函数a，接收的参数是一个函数，那么a就是高阶函数
        * 若函数a，调用的返回值依然是一个函数，那么a就是高阶函数
        如：Promise、setTimeout、arr.map()等等

      b. 函数柯里化
        * 通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式
        如：function fn(a){
              return b => {
                return c => {
                  return a + b + c
                }
              }
            }
          fn(1)(2)(3)
    ```

## 生命周期
#### 旧版生命周期
> 卸载组件 ReactDOM.unmountComponentAtNode()  
> 组件将要挂载 componentWillMount
> 组件挂载完毕 componentDidMount  (常用)
> 父组件传新的值给子组件 componentWillReceiveProps
> 修改状态时的阀门钩子 shouldComponentUpdate
> 状态被更新之前 componentWillUpdate
> 状态更新后 componentDidUpdate
> 组件将要卸载 componentWillUnmount  (常用)

#### 新版生命周期
>将要废弃：
> 组件将要挂载 UNSAFE_componentWillMount
> 状态被更新之前 UNSAFE_componentWillUpdate
> 父组件传新的值给子组件 UNSAFE_componentWillReceiveProps
新增：
> 第一个钩子，必须使用static定义在类本身 getDerivedStateFromProps
> 在更新之前获取快照 getSnapshotBeforeUpdate 用例：元素里面的内容不断增加 但是你看到的永远是你想看的某一块
  
```
  class Life extends React.Component {
    state = {
      opacity: 1
    }
    death = () => { 
      // 卸载组件
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    // 若state的值在任何时候都取决于props，那么可以使用此钩子
    static getDerivedStateFromProps(props,state) {
      return null // 返回状态(state)里面的对象 {opacity: 1} 或者null
    }
    // 在更新之前获取快照
    getSnapshotBeforeUpdate() {
      return this.refs.list.scrollHeight //这个返回值会给componentDidUpdate
    }
    // 在状态更新后调用 preProps(旧的props) preState(旧的state) snapshot(上面钩子传过来的快照)
    componentDidUpdate(preProps, preState, snapshot) {
      this.refs.list.scrollTop += this.refs.list.scrollHeight -  snapshot
    }
    // 组件挂载完毕
    componentDidMount() {
      this.timer = setInterval(()=> {
        let opacity = this.state.opacity - 0.1
        if(opacity <= 0) opacity = 1
        this.setState({opacity})
      },200)
    }
    // 组件将要卸载
    componentWillUnmount() {
      clearInterval(this.timer)
    }
    render() {
      return (
        <div>
            <h2 style={{opacity: this.state.opacity}} >React学不会怎么办</h2>
            <button onClick={this.death} >不活了</button>
        </div>
      )
    }
  }
  ReactDOM.render(<Life/>, document.getElementById('test'))
```

## 兄弟组件传值(pubsub-js)
  ```
    // 订阅
      componentDidMount() {
        // “_” 参数是订阅的名称（hello）
        PubSub.subscribe('hello', (_,data)=> {
          console.log(data); //  {name: 'react'}
        })
      }
      // 删除订阅
      componentWillUnmount() {
        PubSub.unsubscribe(this.token)
      }
    // 发布
      Pubsub.publish('hello', {name: 'react'})
     
     
  ```

## Hooks
> useState
  ```
    import React,{useState} from 'react'
    
    function Count() {
        // 用法一
        const [num, setNum] = useState(0) // 参数0 代表 num 的初始值

        // 用法二
        const [num, setNum] = useState(()=> {
          return 666
        })

        // 更新值
          1. setNum('hello') // 改变值
          2. setNum((prevNum)=> { // 该函数接收先前的state
                return prevNum + "揍你"
            })
    }

  ```

> useEffect
  ```
    import React,{useEffect} from 'react'

    function Person() {
        /*
        * useEffect是异步更新的
        * 不传第二个参数，一但组件状态有变更就会执行useEffect函数，组件状态变更之前执行里面return的函数
        * 第二个参数传空数组，useEffect函数在组件挂载之后执行，里面return的函数在组件卸载之前执行
        * 第二个参数传参数，useEffect函数在 组件挂载之后 以及 更新之后 执行，里面return的函数在 组件卸载之前 以及 更新之前执行
        */

        const [count, setCount] = useState(1)

        useEffect(()=> {
          console.log(count)

          return ()=> {
            // 副作用处理函数
          }

        }, [count])
    }
  ```

> useLayoutEffect
  ```
    /*
    * useLayoutEffect总是比useEffect先执行
    * useEffect在浏览器渲染完成后执行 （如果在此方法内移动某个元素位置会明显看到移动的过程）
    * useLayoutEffect在浏览器渲染前执行 （如果在此方法内移动某个元素位置一进页面看到的就是你移动后的位置）
    * useLayoutEffect在对DOM有操作时使用
    */ 

    import { useState, useEffect, useLayoutEffect } from 'react'

    export default function App() {
        const [count, setCount] = useState(0);
        
        useLayoutEffect(() => {
            if (count === 0) {    
                setCount(10 + Math.random() * 200);
            }
        }, [count]);
      
        return (
            <div onClick={() => setCount(0)}>{count}</div>
        );
    }  
  ```

> useMemo 与 memo （优化性能）
  ```
    import React, { useState, useMemo, memo } from 'react'

    function Count() {
      let [num, setNum]  = useState(1)

      // 返回执行后的结果
      const numResult = useMemo(()=> {
          return '现在的总数是' + num
        }, [num])

      function changeHandel() {
        setNum((prevValue)=> {
          return prevValue += 1
        })
      }

      return (
        <div>
          <h2>{num}</h2> 
          <h2>{numResult}</h2>
          <button onClick={changeHandel} >点我</button>
        </div>
      )
    }

    // 优化性能 （是通过比较前后的值去更新的，只有在props变化时渲染，但只针对基本数据类型, ）
      function compare(prevProps, nextProps) {
        console.log(prevProps, nextProps);
        return true;
        /*
        true 表示不重新渲染
        false 标识重新渲染
        */
      }

      // 第二个参数是自定义比较的函数
      Count = memo(Count, compare)
  ```

> useCallback
  ```
    const {useState, useEffect, useCallback} = React
    function Demo () {

        let [num, setNum]  = useState(1)

        // 返回的是函数 不执行里面的代码
        const numResult = useCallback(()=> {
          return '现在的总数是' + num
        }, [num])

        function changeHandel() {
          setNum((prevValue)=> {
            return prevValue += 1
          })
        }

      return (
        <div>
          <h2>{num}</h2> 
          <h2>{numResult()}</h2> {/*需要执行*/}
          <button onClick={changeHandel} >点我</button>
        </div>
      )
    }

    ReactDOM.render(<Demo/>, document.getElementById('test'))
  ```

> createContext 与 useContext
  ```
    // 如果需要在组件之间共享状态可以使用useContext

    // 父组件
    import React, {createContext} from 'react'

    // 写在全局 不可写在父组件内部
    const TestContext = createContext()

    function Demo() {

      return (
        <div>
          <TestContext.provider value= {{ name: '小明'}}>
            <Navbar /> // 子组件一
            <Message /> // 子组件二
          </TestContext.provider>
        </div>
      )
    }

    // 子组件
    import React, { useContext } from 'react'

    function Navbar() {
      const { name } = useContext(TestContext)
      
      return (
        <div>
          <h2>{ name }</h2>
        </div>
      )
    }


  ```

> createRef 与 useRef
  ```
    const {useState, createRef, useRef} = React

    /* 使用ref存储变量的方式 */
    function Demo () {
      const [renderIndex, setRenderIndex] = useState(1)

      const fromCreateRef = createRef() // 每次渲染都会返回一个新的引用
      const fromUseRef = useRef() // 每次都会返回相同的引用 永远是初始赋的值

      if(!fromCreateRef.current) {
        fromCreateRef.current = renderIndex
      }

      if(!fromUseRef.current) {
        fromUseRef.current = renderIndex
      }

      return (
        <div>
          <h2> { renderIndex } </h2>
          {/* useRef永远是初始值 1 */}
          <h2>fromUseRef=== { fromUseRef.current } </h2>
          {/* createRef会随着增加而增加 */}
          <h2>fromCreateRef=== { fromCreateRef.current } </h2>
          <button onClick={()=> setRenderIndex(prev => prev + 1)} >点我</button>
        </div>
      )
    }



    /* 使用ref获取DOM方式 */
    function Demo () {
      const ele1 = createRef()
      const ele2 = useRef()

      const changeHandel = ()=> {
          ele1.current.focus()
          ele2.current.value = "你在害怕什么"
      }

      return (
        <div>
          <input ref= {ele1} type="text" placeholder="看什么看" />
          <input ref= {ele2} type="text" placeholder="瞅神么瞅" />
          <button onClick={changeHandel} >点我</button>
        </div>
      )
    }

    ReactDOM.render(<Demo/>, document.getElementById('test'))
  ```

> useReducer
  ```
    import React, {useReducer} from 'react'

    function Demo() {
      const [count, dispath] = useReducer((state, action)=> {
        if(action === 'add') {
          return state + 1
        }
      }, 0)

      return (
        <div>
          <h2> { count } </h2>
          <button onClick={()=> dispath('add)}>点我加</button>
        </div>
      )
    }
    

  ```

### 自定义Hook

## 路由(react-router-dom)
> 导航区
  ```
    <Link to="/home" >Home</Link>
  ```
> 展示区
  ```
    <route path="/home" component={Home} />
  ```
> 路由作用域
  ```
    <App>的最外侧包裹一层 <BrowserRouter> 或 <HashRouter>
  ```
> 路由组件 与 一般组件
  ```
    1. 存放位置不同：
      一般组件： components
      路由组件： pages
    2. 接收props不同
      一般组件：看组件标签上传递了什么
      路由组件：接收三个固定的组件
        history
          go
          goBack
          goForward
          push
          replace
        location
          pathname: "/home",
          search: "",
          state: ""
        match
          params: {},
          path: "/home",
          url: "/home"
  ```
> Switch组件的使用
  ```
    /* 
      * Switch组件是确保匹配到对应的路由后不会再往下匹配 
      * 不加 Switch /About路由将匹配两个组件 加上 Switch 只匹配 About组件
    */
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/About" component={Test} />
    </Switch>
  ```
> withRouter组件使用
  ```
    // 一般组件如果想访问 history location match 就需要在导出时包裹一层 withRouter

    import {withRouter} from 'react-router-dom'

    const Test = function(props) {
      //{history: {…}, location: {…}, match: {…}, staticContext: undefined}
      console.log(props)

      return (
        <div></div>
      )
    }
    export default withRouter(Test)
  ```
> 严格匹配 与 模糊匹配
  ```
    /* 
      * exact 开启精准匹配 默认模糊匹配 
      * 如果是模糊匹配则 /home/a/b 也能匹配到 Home组件
    */

    <NavLink className="list-group-item" to="/home/a/b" >Home</NavLink>
    <Route exact path="/home" component={Home} />
  ```
> redirect 重定向
  ```
    <Redirect to="/home" />
  ```
> 路由传参
  1. params参数
  ```
    传参：<Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
    路由接收：<Route path="/home/message/detail/:id/:title" component={Detail} />
    输出参数：const {id, title} = props.match.params
  ```
  2. search参数
  ```
    传参：<Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
    输出参数：
      // url参数转对象以及对象转url参数 qs.stringify()  qs.parse()
      import qs from 'querystring' // 脚手架自带的库
      const {search} = props.location;   
      const {id, title} = qs.parse(search.slice(1))
  ```
  3. state参数
  ```
    传参：<Link to={{pathname: '/home/message/detail', state: {id: item.id, title: item.title}}}>{item.title}</Link>
    输出参数：props.location.state
  ```
> 编程式路由跳转
  ```
    props.history.push(`/home/message/detail/${item.id}/${item.title}`) // params
    props.history.replace('/home/message/detail', {id, title}) // state
  ```
> 路由的replace模式
  ```
    // Link 标签加 replace 属性
    <Link replace to='/home/message/detail' >{item.title}</Link>
  ```

## 顶级API

### React.PureComponent() （class组件性能优化）
  ```
    import React from 'react'

    class App extends React.PureComponent {
      render() {
      }
    }
    替换
    class App extends React.Component {
      render() {
      }
    }

    区别：
      React.Component 未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数
  ```

### React.createElement() （创建/克隆元素）
  ```
    import React from "react"
    React.createElement( type, [props], [...children])
    /*
    * 第一个参数是必填，传入的是HTML标签名，p ul li ...
    * 第二个参数是选填，表示的是属性，p: className
    * 第三个参数是选填，子节点，p要显示的文本内容
    * 在我们应用JSX进行开发的时候，其实它最终会转化成React.createElement…去创建元素 ********
    */
    
    const child1 = React.createElement('li', null, 'one');
    const child2 = React.createElement('li', null, 'one');
    const content = React.createElement('ul', {className: 'test'}, child1, child2); // 第三个参数可以分开也可以写成一个数组
    // const content = React.createElement('ul', { className: 'test' }, [child1, child2]);
    ReactDOM.render(
          content,
        document.getElementById('example')
      );

  ```

### React.isValidElement()（验证是否为React元素）
  ```
    React.isValidElement(Object)
    // 验证对象是否为 React 元素，返回值为 true 或 false。
  ```

### React.Children （子集）
  ```
    
  ```

### React.Fragment （包裹元素）

### React.forwardRef （转发ref）

### React.lazy() （懒加载）

### React.Suspense （懒加载，加载指示器）

### forceUpdate()