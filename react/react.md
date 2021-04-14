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
  

## react介绍
1. react属于mvc模式
2. react是单向数据流
3. react默认使用sass，但是直接使用还会报错，还需要安装一个包
4. 创建react项目node必须是  ^10.12.0 || >=12.0.0