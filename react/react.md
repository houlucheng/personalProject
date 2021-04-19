## react介绍
1. react属于mvc模式
2. react是单向数据流
3. react默认使用sass，但是直接使用还会报错，还需要安装一个包
4. 创建react项目node必须是  ^10.12.0 || >=12.0.0

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
7. 标签名小写的时候，编译时会和html标签作比较转化为html标签
   ```
    <good></good> // html找不到此标签会报错，但是还是会正常显示
   ```
8. 标签名首字母大写时认为是一个组件，按按组件解析
   ```
    <Good> hello,react </Good> // 不定义这个组件就会报错
   ```
9. jsx中只能写js表达式不能写js语句
  

