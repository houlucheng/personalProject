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
  ```
    new Vue({  
      el: "#app",  
      render: function (createElement) {  
        // createElement("标签名", {标签属性}, ["内容"])  
        return createElement("h2", {class:   'box'}, ["hello world"]) // 基础用法
        //高级用法 可以直接放个组件  
        return createElement({  
          template: '<h2></h2>'
          data(){
            return {}
          }
        })
      }
    })
  ```


## @vue/cli3
  vue-cli3 是基于 webpaack4 打造。 vue-cli2 是基于 webpack3 打造
  vue-cli3 的设计原则是“0配置”，移除了配置文件根目录下的，build和config文件
  vue-cli3 提供了 vue ui 命令，提供了可视化配置
  ```
    vue create demo

    Please pick a preset: Manually select features // 选择一些预设配置

    Where do you prefer placing config for Babel, ESLint, etc.?  // 选择把配置放到哪
      ❯ In dedicated config files // 单独放在一个 config 文件
      ❯ In package.json // 放在 package.json 里

    Save this as a preset for future projects? (y/N) // 是否把本次的配置保存 
      > 删除保存的配置 在 .vuerc 文件里

    package-lock.json 文件里保存了实际安装的包的版本 ^符号是安装版本只有最后一位可以浮动3.6.0(3.6.4)， ～符号是可以浮动后两位3.6.0 (3.7.3)
  ```

## vue-router
  1. 路由的安装、使用 和 重定向 和 mode 和 设置默认路由
  ```
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
  ```
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
    ```
      export default new vueRouter({
        routes:[
          {
            path: "/Home",
            component: () => import('../components/Home.vue')
          }
        ],
        mode: ""
      })  
    ```

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
    ```
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
  7. \$router 与 $route    
   
    vue 源码在vue的原型上定义了这两个属性 
    $router是 // vue.use(vue-router) 的时候，调用了vueRouter里面的install方法并且把vueRouter赋值到了vue的原型上
    $route是 // 把当前活跃的路由对象赋值给了router
    综上所述只要在vue.prototype上定义的属性或方法，都可以在任何组件里面以this.的方式访问执行
  9. 导航守卫(路由拦截器)  
  - 全局守卫  
    > beforeEach(前置钩子)  
      例子： 跳转路由时改变页面的title  
      两种方法：  

        ```
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
        ```
      > afterEach(后置钩子)   
      ```
      router.afterEach((to, from) => {}) 
      ```

  - 路由独享守卫  
    > beforeEnter    
      ```
        {
          path: "/Home",
          component: Home,
          beforeEnter: (to, from, next) => {
            next()
          }
        }
      ```
  - 组件内守卫
    >  beforeRouteEnter
      // 在渲染该组件对应的路由时调用
      ```
      beforeRouteEnter (to, from, next) {}
      ```
    > beforeRouteUpdate
      ```
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
      beforeRouteUpdate (to, from, next) {}
      ```
    > beforeRouteLeave
      ```
      // 在离开该组件对应的路由时调用
      beforeRouteLeave (to, from, next) {}
      ```
  - keep-alive(缓存 vue内置组件)  
    > 正常情况下来回跳转路由会从新创建渲染组件 用了keep-alive之后就不会重新创建
    ```
    <keep-alive>
      <router-view/>
    </keep-alive>
    ```
    > 跳转到被缓存的组件时会调用 activated生命周期 离开时会调用 deactivated生命周期  
    
    > keep-alive 组件有两个属性
      - include // 哪个组件被缓存 值是一个字符串或者一个正则 
        <keep-alive include="User"></keep-alive> //User是组件里面定义的name的值
      - exclude // 哪个组件不会被缓存 值是一个字符串或者一个正则
        <keep-alive exclude="Home,info"></keep-alive> //Home 和 info 是这两个组件里面定义的name的值

## vuex
```
  new Vuex.Store({
    state: {}, // 状态
    mutations: {}, // 改变 这里面一般写一些同步的操作
    actions: {}, // 行动 这里面一般写一些异步操作
    getters: {},
    modules: {}
  })
  组件中这样使用store里的值：this.$store.state
  修改 state 里的值可以直接 this.$store.state = xxx 这样修改 （但是最好不要这样改）
  原因：有个浏览器插件叫 devtools 能帮我们记录是哪个组件修改store里的值 但是如果用上面这种方式修改是无法记录的，所以推荐用 mutations修改
  在组件中这样调用 mutations 里面的方法。因为执行了 Vue.use(Vuex) 所以在 vue 的原型上有了一个$store的属性 所以如下：
    new Vuex.Store({
      mutations: {
        editState(state) {
          // 会默认有一个state参数
        }
      }
    })
    methods: {
      aaa() {
        this.$store.commit("editState") // commit里面传 在mutations里定义的方法名
      }
    }
```  
###### Vuex的五大核心  
  > state 单一状态树 (一个项目里面只有一个store)
  - 如果你的状态信息保存到多个store里面，那么对于之后的管理和维护来说比较困难 所以vuex使用了单一状态树来管理应用层级的全部状态
  - 单一状态树能让我们用最直接的方式找到某个状态的片段，也让然后的管理和维护变的简单方便   

  > getters (一般当 state 里面的数据对外提供时需要改变的时候使用)
  ```
    例如：state 中定义了一个 a:"hello", b:"word!"。 在某些组件中用的时候需要把 a 和 b 拼接起来 这时候就用到getters 和计算属性相似
      getters: {
        content(state, getters) {
          // 第二个参数getters就是store中的getters 所以可以在此方法中调用 getters 中的其他方法 如：
          // getters.getText
          return state.a + state.b
        },
        getText() {
          return "666"
        }
      }
      在组件中调用：
      methods: {
        getContent() {
          console.log(this.$store.getters.content)
        }
      }
    例如：state中存了一个数组 数组中是一些学生的信息 比如 名字、年龄等 在某个组件中要获取 state中存的这些学生的数据 并且只取大于30岁的
    - 进阶方法  （如果组件中调用 getters 里的方法并且需要传入自己想传入的参数 那么可以如下面这样）
      methods: {
        getContent() {
          console.log(this.$store.getters.viewText('vuex')) // vuex 你好
        }
      }
      getters: {
        viewText(state, getters) {
          return function (a) {
            return a + " 你好"
          }
        }
      }
  ```
  > mutations (payload负载)

  - vuex的store状态的唯一更改方式就是提交 mutations  
  - mutations主要包括两部分  
    。字符串的事件类型(type) //(方法名)
    。一个回调函数(handle),该回掉的第一个参数就是state
  - 如何在调用mutations里面的方法时传入参数方式
    ```
    methods: {
      this.$store.commit("addText", 10) // 普通传参方式

      this.$store.commi({
        type: "addText",
        count: 10
      }) //这种方式传参在mutations中接收的时候第二个参数就变为了一个对象 这个对象就是我们传过去的对象


    }

    mutations: {
      addtext(state, num) {
        alert(num) // 10
      }
    }
    ```
  - 如果业务多了 mutations 中定义的方法也就越来越多 commit 的时候也就多了 为了防止定义和提交的时候方法名写错可以用这种方式写
    ```
    import {getContent} from "./store/mutations-types.js"       

    mutations: {
      [getContent]() {
        
      }
    }

    methods: {
      getText() {
        this.$store.commit(getContent)
      }
    }
    ```
  > actions (执行异步操作)  
  - 如果异步操作也在 mutations 中执行，那么数据源和页面上也会改，但是在 devtools 中将检测不到 还是会显示上次的值 就会让你无法再调试
  - actions 中定义的方法也会默认有一个参数 context(上下文) 这个参数可以理解为是当前的store对象
  - 在actions中异步修改state中定义的变量时也必须要经过mutations用commit提交进行修改
  - 调用aupdateInfo时传递参数 直接作为第二个参数传入
    ```
    methods: {
      getHandle() {
        this.$store.dispatch("aupdateInfo",{name:"xiaoming"})

        this.$store
          .dispatch("aupdatecon",{name:"xiaoguang"})
          .then((parm) => {  // 修改成功后回掉
            console.log(parm)
            })
      }
    } 
    actions: {
      aupdateInfo(context,payload) {
        setTimeout(() => {
          context.commit("getContent")
          console.log(payload) // 调用aupdateInfo时传递过来的参数
        },1000)
      },
      aupdatecon(context, payload) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit("getContent")
            console.log(payload) // 调用aupdateInfo时传递过来的参数
            resolve(666)
          },1000)
        })
      }
    } 
    ```
> modules (模块化)
  ```
    const moduleA = {
            state: {},
            mutations: {},
            actions: {},
            getters: {},
            modules: {}
          }
    modules: {
      a: {
        state: {
          name: "zhangshan"
        },
        mutations: {},
        actions: {},
        getters: {},
        modules: {}
      },
      b: moduleA
    }   
    获取的方式:
      created() {
        console.log(this.$store.state.a.name)
      }
    
    - 在 modules 中调用 mutations 里的方法依然是用commit
    - 在 modules 中调用 getters 里的方法依然是用 $store.getters.xxx, 但是唯一不同的是 模块中getters里定义的方法多一个参数 rootState
      modules: {
        getters: {
          getHandel(state, getters, rootState) {
            // rootState 是根的state
          }
        }
      }
    - 在 modules 中调用 actions
      modules: {
        actions: {
          aupdateCon(context) {
            // 这里的context不再是store对象 而是这个模块 里面有rootGetters、rootState等
          }
        }
      }
  ```


  
    

  




## axios
> axios参数  
  - 请求地址  
    `url: "/ueer"`
  - 请求类型  
    `method: "get"`
  - 请求根路径  
    `baseURL: "http://127.0.0.1:8080"` 
  - 请求前的数据处理  
    `transformRequest: [function(data){}]` 
  - 请求后的数据处理  
    `transformResponse: [function(data){}]`
  - 自定义的请求头  
    `headers: {x-Requested-with: "XMLHttpRequest"}` 
  - URL查询参数  
    `params: {id:2}` 
  - 查询对象序列化  
    `paramsSerializer: function(params){}` 
  - request body  
    `data: {key:'aa'}` 
  - 超时设置  
    `timeout: 1000` 
  - 跨域是否带Token  
    `withCredentials: false` 
  - 自定义请求处理    
    `adapter: function(resolve, reject, config){}` 
  - 跨域是否带Token  
    `withCredentials: false` 
  - 身份验证信息  
    `auth: {username: "", pwd: '123'}` 
  - 响应的数据格式json/ blob/ document/ arraybuffer/ text/ tream
    `responseType: 'json'` 
  > 全局配置  
  ```
    axios.defaults.baseUrl = "http://127.0.0.1:8080";
    axios.defaults.timeout = 5000;
    ......
  ```  
  > 全局用法事例  
  ```
    axios.defaults.baseURL = "http://123.207.32.32:8000/"
    axios.default.timeout = 5000

    axios.all([
        axios({
          url: "home/multidata",
          method: "get"
        }),
        axios({
          url: "home/data",
          method: 'get',
          params: {
            type: "sell",
            age: 1
          }
        })
    ]).then(axios.spread((res1, res2)=> {
      console.log(res1);
      console.log(res2);
    }))
  ```  
  > 创建实例的用法  
  ```
    const instance1 = axios.create({
      baseURL: "http://123.207.32.32:8000/",
      timeout: 5000
    })

    instance1({
      url: "home/multidata",
      method: "get"
    }).then((res)=>{
      console.log(res)
    })
    instance1({
      url: "home/data",
      method: "get",
      params: {
        type: "sell",
        age: 1
      }
    }).then((res)=>{
      console.log(res);
    })
  ```  
  > axios请求拦截器 (interceptors.request.use)
  - 全局拦截器
  `axios.interceptors.request.use()`
  - 实例拦截器
    ```
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000/",
        timeout: 5000
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 必须return 要不然请求无法完成
      return config
    }, err => {})

    // 响应拦截器
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    }, err => {})

    instance({url: "", method: ""})
    ```


    