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


    