## @vue/cli2  
  1. 创建项目步骤详解
    vue init webpack "demo"

    Project name  // 项目名称

    Project description (A Vue.js project)  // 项目描述

    Author (houlucheng <luchenghou@caixin.com>) // 作者 - 会默认显示git.config里面的配置

    Vue build (Use arrow keys)  
      // 用 runtime-compiler 或 runtime-only 构建项目 （推荐用compiler 但是项目用的更多的是 only）
      // only的优点：
          - 最后打包下来会小6kb 
          - 运行效率更高
          - runtime-compiler:  template -> ast(抽象语法树) -> render -> vdom(虚拟DOM) -> UI
          - runtime-only:  render -> vdom -> UI
      > Runtime + Compiler: recommended for most users 
      > Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere

    Install vue-router? (Y/n)  // 是否需要用路由

    Use ESLint to lint your code? (Y/n) // 对ES代码进行限制 规范 选择yes后需要选择使用哪种规范
      > Standard (https://github.com/standard/standard) // 标准
      > Airbnb (https://github.com/airbnb/javascript) // 爱彼迎
      > none (configure it yourself) // 自己配置

    et up unit tests (Y/n) // 要不要单元测试

    Setup e2e tests with Nightwatch? (Y/n) 
      // e2e-端到端 安装 Nightwatch，是一个利用 selenium 或 webdriver或phantomjs等进行自动化测试框架 可操作浏览器自动点击啥的

  2. runtime-only 创建项目后 render函数使用
    new Vue({
      el: "#app",
      render: function (createElement) {
        // createElement("标签名", {标签属性}, ["内容"])
        return createElement("h2", {class: 'box'}, ["hello world"]) // 基础用法
        //高级用法 可以直接放个组件
        return createElement({
          template: "<h2></h2>",
          data(){
            return {}
          }
        })
      }
    })


## @vue/cli3
  vue-cli3 是基于 webpaack4 打造。 vue-cli2 是基于 webpack3 打造
  vue-cli3 的设计原则是“0配置”，移除了配置文件根目录下的，build和config文件
  vue-cli3 提供了 vue ui 命令，提供了可视化配置

  vue create demo

  Please pick a preset: Manually select features // 选择一些预设配置

  Where do you prefer placing config for Babel, ESLint, etc.?  // 选择把配置放到哪
    ❯ In dedicated config files // 单独放在一个 config 文件
    ❯ In package.json // 放在 package.json 里

  Save this as a preset for future projects? (y/N) // 是否把本次的配置保存 
    > 删除保存的配置 在 .vuerc 文件里

  package-lock.json 文件里保存了实际安装的包的版本 ^符号是安装版本只有最后一位可以浮动3.6.0(3.6.4)， ～符号是可以浮动后两位3.6.0 (3.7.3)


## vue-router
  1. 路由的安装、使用 和 重定向 和 mode 和 设置默认路由
    npm install vue-router --save
    import vueRouter from "vue-router"
    vue.use(vueRouter)
    exoprt default new vueRouter({
      routes: [
        {
          path: "/",
          <!-- component: Home, -->
          redirect: "/Home" //重定向
        }
      ],
      mode: "history" // 模式
    })
    import router from './router/index.js'
    new Vue({
      el: "#app",
      router
    })
  2. router-link 组件
    > router-link 组件上的属性
      - to  // to="/Home" 和a标签的href相似 用来跳转路由
      - tag // tag="button" 用来定义router-link组件最终会渲染成什么标签
      - replace // replace 用来控制跳转路由用 pushState 还是 replaceState 前者可以前进后退 后者不可以前进后退
      - active-class // active-class="active" 修改选中tab的class名
        修改class还有一种方法是在路由里面配置linkActiveClass属性 这个属性和mode、routes并列
    > 编程式路由跳转
      - this.$router.push()
      - this.$router.replace()
       
  3. 路由懒加载 
    - 用了路由懒加载之后 打包后的js也会按组件来分 一个组件一个js
    export default new vueRouter({
      routes:[
        {
          path: "/Home",
          component: () => import('../components/Home.vue')
        }
      ],
      mode: ""
    })

  4. 嵌套路由
    new vueRouter({
      routes: [
        {
          path: "/Home",
          conponent: () => import('../components/Home.vue'),
          children: [
            {
              path: "HomeNew",
              component: HomeNew
            }
          ]
        }
      ]
    })
  
  5. 动态路由
    a. 需要在路由里面配置路由路径path
      routes: [
        {
          path: "/Home/:userId",
          component: Home
        }
      ]
    b. 在 router-link 的 to属性中传递参数
      <router-link :to="'/Home' + text">走你</router-link>
      data(){
        return {
          text: 666
        }
      }
      // // http://localhost:8080/Home/666
    c. 在Home组件中获取参数
      this.$route.params.userId
  6. 路由传递参数
    a. 第一种方式可以用上面动态路由的方式传递 params
    b. 第二种方式是 query
      <router-link :to="{path: '/User', query: {name: '666'}}"></router-link>
      // http://localhost:8080/User?name=666
      // 获取参数 在User组件中 this.$route.query
    c. 用编程式传递参数
      this.$router.push({
        path: "/User",
        query: {
          name: 666
        }
      })
  7. $router 与 $route
    vue 源码在vue的原型上定义了这两个属性 
    $router是 vue.use(vue-router) 的时候，调用了vueRouter里面的install方法并且把vueRouter赋值到了vue的原型上
    $route是 把当前活跃的路由对象赋值给了router
    综上所述只要在vue.prototype上定义的属性或方法，都可以在任何组件里面以this.的方式访问执行
  8. 导航守卫(路由拦截器)
    - 全局守卫
      > beforeEach(前置钩子)
        例子： 跳转路由时改变页面的title
        两种方法：
          a. 在每个组件的 created 生命周期中 修改document.title //这种方法比较麻烦，需要在每个组件中写逻辑
          b. 在定义路由的文件里这样写
            router.beforeEach((to, from, next) => {
              document.title = to.matched[0].meta.title
              // to 即将要跳转到的路由对象
              // from 上一个路由对象
              next() 
              // 这里的next必须执行 不执行会导致整体代码到这里就不走了 原本vue会自己执行next现在你从新定义了这个方法就需要你自己执行一下
              // next({path: "/User"}) || next("/User") 跳到User路由
              // next(false) 停止跳转
            })
            所以此时你就可以在每个路由对象中设置title属性然后在beforeEach中获取并设置
            new router({
              routes: [
                {
                  path: "/Home",
                  component: Home,
                  meta: {
                    title: "首页"
                  }
                }
              ]
            })
      > afterEach(后置钩子)
        router.afterEach((to, from) => {})
    - 路由独享守卫
      > beforeEnter
        {
          path: "/Home",
          component: Home,
          beforeEnter: (to, from, next) => {
            next()
          }
        }
    - 组件内守卫
      >  beforeRouteEnter
        // 在渲染该组件对应的路由时调用
        beforeRouteEnter (to, from, next) {}
      > beforeRouteUpdate
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
        beforeRouteUpdate (to, from, next) {}
      > beforeRouteLeave
        // 在离开该组件对应的路由时调用
        beforeRouteLeave (to, from, next) {}
  9. keep-alive(缓存 vue内置组件)
    正常情况下来回跳转路由会从新创建渲染组件 用了keep-alive之后就不会重新创建
    <keep-alive>
      <router-view/>
    </keep-alive>
    > 跳转到被缓存的组件时会调用 activated生命周期 离开时会调用 deactivated生命周期
    > keep-alive 组件有两个属性
      - include // 哪个组件被缓存 值是一个字符串或者一个正则 
        <keep-alive include="User"></keep-alive> //User是组件里面定义的name的值
      - exclude // 哪个组件不会被缓存 值是一个字符串或者一个正则
        <keep-alive exclude="Home,info"></keep-alive> //Home 和 info 是这两个组件里面定义的name的值