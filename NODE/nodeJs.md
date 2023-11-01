# Node.js 和浏览器的区别
- 浏览器和 Node.js 都使用 JavaScript 作为其编程语言。
- 在浏览器中，您所做的大部分时间都是与 DOM 或其他 Web 平台 API（如 Cookies）进行交互。 这些当然在 Node.js 中不存在。 您没有浏览器提供的 document、window 和所有其他对象。
- Node.js 中你可以控制环境。 除非您正在构建一个任何人都可以在任何地方部署的开源应用程序，否则您知道将在哪个版本的 Node.js 上运行该应用程序。 与浏览器环境（您无法奢侈地选择访问者将使用哪种浏览器）相比，这非常方便。
- Node.js 使用 CommonJS 模块系统，而在浏览器中我们开始看到正在实施的 ES Modules 标准。
- 在实践中，你暂时在 Node.js 中使用 require()，在浏览器中使用 import。

# 如何退出 Node.js 程序

- 当在控制台中运行程序时，可以用 ctrl-C 关闭它，但我们这里要讨论的是以编程方式退出。
- process 核心模块提供了一种方便的方法，允许您以编程方式退出 Node.js 程序：process.exit()。
  ```javascript
    process.exit() 
  ```

# 如何从 Node.js 读取环境变量
- Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。
- 这是访问 NODE_ENV 环境变量的示例，该环境变量默认情况下被设置为 development
> 注意：process 不需要 "require"，它是自动可用的。
  ```javascript
    process.env.NODE_ENV // "development"
  ```

# Node.js REPL模式
- node 命令是用来运行 Node.js 脚本的命令：
  ```javascript
    node script.js
  ```
- 如果省略文件名，则在 REPL 模式中使用它：
  ```javascript
    node
  ```
  > 注意：REPL 也被称为运行评估打印循环，是一种编程语言环境（主要是控制台窗口），它使用单个表达式作为用户输入，并在执行后将结果返回到控制台。
  ```javascript
    > console.log('测试')
    测试
    undefined
    >
  ``` 
### 探索 JavaScript 对象
- 尝试输入 JavaScript 类的名称，例如 Number，添加一个点号并按下 tab。REPL 会打印可以在该类上访问的所有属性和方法：
  ```javascript
    > Number.
    Number.__proto__  Number.constructor  Number.valueOf ......
  ```
### 探索全局对象
- 通过输入 global. 并按下 tab，可以检查可以访问的全局变量：
  ```javascript
    > global.
    global.__proto__  global.Array  global.Error  global.Map .....
  ```

# 在 Node.js 中从命令行接收用户输入的值(Cli中的你问我答)
#### Node.js 内置 readline 模块
  ```javascript
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`你叫什么名字?`, name => {
      console.log(`你好 ${name}!`)
      readline.close()
    })
    
  ```
#### Inquirer.js 软件包，提供了更完整、更抽象的解决方案。
- type：表示提问的类型，包括：input、confirm、 list、rawlist、expand、checkbox、password、editor。
- name: 存储当前输入的值。
- message：问题的描述。
- default：默认值。
- choices：列表选项，在某些type下可用，并且包含一个分隔符(separator)；
- validate：对用户的回答进行校验。
- filter：对用户的回答进行过滤处理，返回处理后的值。
- when：根据前面问题的回答，判断当前问题是否需要被回答。
- pageSize：修改某些type类型下的渲染行数。
- prefix：修改message默认前缀。
- suffix：修改message默认后缀。

  ```javascript
    // npm install inquirer
    // 看具体例子效果请看 node-demo/03_inquirer.js
    const inquirer = require('inquirer')

    var questions = [
      {
        type: 'input',
        name: 'name',
        message: "你叫什么名字?"
      },
      {
          type:"input",
          message:"请输入你的年龄:",
          name:"age",
          default:18,
          validate:(val)=>{
            if(val > 10 && val < 120){
                return val;
            }else{
                return "我猜你绝对不是一个正常人类";
            }
        }
      }
    ]

    inquirer.prompt(questions).then(answers => {
      console.log(answers)
    })

    // 运行结果
    /*
      $ node ./03_inquirer.js 
      ? 你叫什么名字? hlc    
      ? 请输入你的年龄: 25      
      { name: 'hlc', age: '25' }
    */
    
  ```

# node模块的导出 导入
  - 第一种
    ```javascript
      const car = {
        brand: 'Ford',
        model: 'Fiesta'
      }

      // 导出
      module.exports = car

      //在另一个文件中导入
      const car = require('./car')
    ```

  - 第二种
    ```javascript
      const car = {
        brand: 'Ford',
        model: 'Fiesta'
      }
      // 导出
      exports.car = car

      //在另一个文件中导入
      const car = require('./items').car
      或
      const items = require('./items')
      items.car
    ```
- module.exports 和 export 之间有什么区别？
前者公开了它指向的对象。 后者公开了它指向的对象的属性。

# npm 将软件包安装到哪里
- 本地安装
软件包会被安装到当前文件树中的 node_modules 子文件夹下。
还会在当前文件夹中存在的 package.json 文件的 dependencies 属性中添加 lodash 条目。
  ```javascript
    npm install lodash
  ```

- 全局安装
在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。
npm root -g 命令会告知其在计算机上的确切位置。
  ```javascript
    npm install -g lodash
  ```
> 在 macOS 或 Linux 上，此位置可能是 /usr/local/lib/node_modules。 在 Windows 上，可能是 C:\Users\YOU\AppData\Roaming\npm\node_modules。
但是，如果使用 nvm 管理 Node.js 版本，则该位置会有所不同。
例如，使用 nvm，则软件包的位置可能为 /Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules。

# 环境变量
```javascript
path: 'c:\User\houlucheng\Dexktop\hello'
```
- 当我们在命令行窗口打开一个文件，或调用一个程序时，系统会首先在当前目录下寻找文件程序，如果找到了则直接打开，如果没有找到则会一直到环境变量path的路径中寻找，直到找到为止，没找到就会报错(此命令不存在)

# node内置模块
### http
- 使用方法
  ```javascript
    // 导入http模块
    const http = require('http')
    
    http.createServer(function(req, res) {

      // 设置响应头
      res.writeHead(200, {'Content-Type': "text/html;charset='UTF-8'"});

      // 解决中文乱码
      res.write("<head> <meta charset='UTF-8'> </head>")

      // 在页面上输出
      res.write("<h2>你好，nodejs</h2>")

      // 给页面输出一句话并结束响应(必须写)
      res.end('Hello World');

    }).listen(8081); // 端口
    
  ```

### url
- 使用方法
  ```javascript
    // 导入url模块
    const URL = require('url')

    // 模拟url
    const api = "http://www.baidu.com?a=123&b=666"

    // 获取url后面的参数  parse的第二个参数true代表把参数转换为对象形式
    const getValue = URL.parse(api, true).query

    console.log(getValue);
  ```

### supervisor (自动重启服务，类似于热更新)
- 使用方法
  ```javascript
    // 1. 安装
        npm install -g supervisor
    // 2. 使用
        supervisor app.js
  ```

### fs
> fs里面的方法都是异步的
- fs.stat 检测是文件还是目录
  ```javascript
    const fs = require('fs')

    /**
    * @param {*} path 检测的文件或目录的路径
    * @param {*} callback 回调，传递异常参数err 和 data对象
    */
    
    fs.stat('./html', (err, data)=> {
        if(err) {
            // 路径错误时
            console.log(err);
            return
        }
        console.log(`是文件${data.isFile()}`); // 是文件false
        console.log(`是目录${data.isDirectory()}`); // 是目录true
    })
  ```

- fs.mkdir 创建目录
  ```javascript
  const fs = require('fs')

  /**
  * @param {*} path 将创建的目录路径
  * @param {*} mode 目录权限（读写权限），默认777
  * @param {*} callback 回调，传递异常参数err
  */

  fs.mkdir('./css', (err)=> {
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("创建成功");
  })
  ```

- fs.rmdir 删除目录
  ```javascript
    const fs = require('fs')

    /**
      * @param {*} path 删除目录路径
      * @param {*} callback 回调，传递异常参数err
      */

    fs.rmdir("./css/aaa", (err) => {
        if (err) {
            console.log('失败');
            return
        }
        console.log('rmdir成功');
    })
  ```

- fs.writeFile 创建写入文件
  ```javascript
  const fs = require('fs')

  /**
  * @param {*} path 将创建的文件路径
  * @param {*} data 文件中要写的内容
  * @param {Object} options option数组对象，包含：
  *  · encoding  (string) 可选值，默认‘utf-8’，当data使buffer时，该值应该为。。。
  *  · mode （Number） 文件读写权限，默认值438
  *  · flag  (string) 默认值‘w’
  * @param {*} callback 回调，传递异常参数err
  */

  fs.writeFile('./html/index.html', '你好nodejs', (err)=> {
      // 如果此文件存在将会是替换操作
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("创建写入成功");
  })
  ```

- fs.unlink 删除文件
  ```javascript
    const fs = require('fs')

    /**
      * @param {*} path 删除文件路径
      * @param {*} callback 回调，传递异常参数err
      */

    fs.unlink("./css/a.css", (err) => {
        if (err) {
            console.log('失败');
            return
        }
        console.log('unlink成功');
    })
  ```

- fs.appendFile 追加文件
  ```javascript
  const fs = require('fs')

  /**
  * @param {*} path 将创建的文件路径
  * @param {*} data 文件中要写的内容
  * @param {*} callback 回调，传递异常参数err
  */

  fs.appendFile("./css/index.css", 'html {background-color: blue}\n', (err) => {
      // 如果没有此文件就创建，如果有就追加内容 "\n":换行
      if (err) {
          console.log(err,'追加失败');
          return
      }
      console.log('appendFile成功');
  })
  ```

- fs.readFile 读取文件
  ```javascript
  const fs = require('fs')
  
  /**
  * @param {*} path  将读取的文件路径
  * @param {*} callback 回调，传递异常参数err，读取出来的数据data
  */

  fs.readFile("./css/index.css", (err, data) => {
        // 如果没有此文件就创建，如果有就追加内容
        if (err) {
            console.log(err,'追加失败');
            return
        }
        console.log('readFile成功', data); // 16进制的buffer数据
        console.log(data.toString()); // 把buffer转换为string类型
    })
  ```

- fs.readdir 读取目录
  ```javascript
  const fs = require('fs')

  /**
    * @param {*} path 将读取的目录路径
    * @param {*} callback 回调，传递异常参数err，读取出来的数据data
    */

  fs.readdir('./css', (err, data)=> {
      if(err) {
          // 创建失败
          console.log(err);
          return
      }
      console.log("读取目录成功", data);
  })
  ```

- fs.rename 重命名/移动文件 
  ```javascript
    const fs = require('fs')

    // rename有两个功能： 1. 重命名； 2. 移动文件
    /**
      * @param {*} path 重命名的文件或目录路径
      * @param {*} data 要修改的名称或要移动到了目录
      * @param {*} callback 回调，传递异常参数err
      */

    fs.rename("./html", "./html1", (err) => {
        if (err) {
            console.log('失败');
            return
        }
        console.log('rename成功');
    })
  ```




- fs.createReadStream 从文件流中读取数据
  ```javascript
    // createReadStream
    const readStream = fs.createReadStream('./data.txt')
    let count = 0
    let str = ''
    readStream.on('data', data => {
        str+= data
        count++
    })

    readStream.on('end', () => {
        console.log('count----', count);
        console.log('str----', str);
    })

    readStream.on('error', err => {
        console.log('err', err);
    })

    // readFile
    fs.readFile('./data.txt', (err, data) => {
        if(err) {
            console.log(err);
            return
        }
        console.log(data.toString());
    })
  ```

- fs.createWriteStream 写入文件
  ```javascript
    const writeStream = fs.createWriteStream('data1.txt')
    const data = '你好啊nodejs呵呵\n'
    writeStream.write(data, 'utf-8')
    // 不加 .end 无法监听写入完成，因为是异步的
    writeStream.end()
    writeStream.on('finish', () => {
        console.log('写入完成');
    })
    writeStream.on('error', err => {
        console.log(err);
    })
  ```

- fs.createReadStream 管道流,一个文件中的内容读取出来后放入到另一个文件里
  ```javascript
    const readStream = fs.createReadStream('./data1.txt')

    const writeStream = fs.createWriteStream('./data2.txt')

    readStream.pipe(writeStream);

    console.log('执行完毕');
  ```


### EJS\GET\POST


### 模块化

- 导出
  ```javascript
    // app.js

    function person() {
      console.log("看过来")
    }

    const obj = {a: 555}
    // 1. module.exports
    module.exports.person = person
    module.exports = obj
    // 2. exports
    exports.person = person

    // 区别
    // exports 是 module.exports 的简写，相当于 const exports = module.exports
    
  ```
- 导入
  ```javascript
    const per = require('./app.js')
    console.log(per.person)
  ```



# 第三方模块
### 符合CommonJs规范的包目录
- package.json: 包描述文件
- bin：用于存放可执行二进制文件的目录
- lib：用于存放 JavaScript 代码的目录
- doc：用于存放文档的目录

# package.json
### 属性
- `version` 表明了当前的版本。
  > 此属性遵循版本的语义版本控制记法，这意味着版本始终以 3 个数字表示：x.x.x。
第一个数字是主版本号，第二个数字是次版本号，第三个数字是补丁版本号。
这些数字中的含义是：仅修复缺陷的版本是补丁版本，引入向后兼容的更改的版本是次版本，具有重大更改的是主版本。
- `name` 设置了应用程序/软件包的名称。
- `description` 是应用程序/软件包的简短描述。
- `contributors` 应用程序/软件包的贡献者
- `bugs` 链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。
- `homepage` 设置软件包的主页
- `main` 设置了应用程序的入口点。
- `private` 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
- `scripts` 定义了一组可以运行的 node 脚本。
- `dependencies` 设置了作为依赖安装的 npm 软件包的列表。
- `devDependencies` 设置了作为开发依赖安装的 npm 软件包的列表。
- `engines` 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- `browserslist` 用于告知要支持哪些浏览器（及其版本）。
- `license` 指定软件包的许可证。
- `keywords` 此属性包含与软件包功能相关的关键字数组。这有助于人们在浏览相似的软件包或浏览 https://www.npmjs.com/ 网站时找到你的软件包。
- `repository` 此属性指定了此程序包仓库所在的位置。
### dependencie 与 devDependencie
- `^` 表示第一位版本号不变，后面两位取最新
- `~` 前两位不变，最后一位取最新
- `*` 表示全部取最新
- `>` 接受高于指定版本的任何版本。
- `>=` 接受等于或高于指定版本的任何版本。
- `<=` 接受等于或低于指定版本的任何版本。
- `<` 接受低于指定版本的任何版本。
- `=` 接受确切的版本。
- `-` 接受一定范围的版本。例如：2.1.0 - 2.6.2。
- `||` 组合集合。例如 < 2.1 || > 2.6。
- 无符号: 仅接受指定的特定版本（例如 1.2.1）。
- `latest` 使用可用的最新版本。
  ```javascript
  // npm install md5 --save
  "dependencie": { // 生产环境需要使用的
    "md5": "^2.1.0"
  },
  // npm install Jquery --save-dev 
  "devDependencie": { // 插件只用于开发环境
    "Jquery": "^2.1.0"
  }
  ```
- 区别
  dependencie 生产环境需要使用的。
  devDependencie 只用于开发环境。
  这样做的话，我们在发布的时候，可以将dependencies里的所有包，打包成一个vendor.js文件，因为这个文件都是三方库，代码几乎不太会改变，这样，这部分代码就能很好的被游览器缓存利用了；而对于项目相关的JS代码，愉快得迭代就好了。
  ```javascript
  const pkg = require('./package.json');
  entry: {
      app: path.resolve(__dirname, 'app/index.jsx'), // 这行是项目相关的JS代码
      // 将第三方依赖（node_modules）的库打包
      vendor: Object.keys(pkg.dependencies)
  },
  ```

### 安装指定版本的包 以及 查看软件包所有的以前的版本
  ```javascript
    // 当前项目安装
    npm install cowsay@1.2.0

    // 全局安装
    npm install -g webpack@4.16.4

    // 查看cowsay包以前的版本
    npm view cowsay versions
  ```

# 重点
### npm
- npm 安装依赖时新版node自动会在package.json中记录，不是必须加 --save
### cnpm
- cnpm 安装依赖时不加 --save 不会自动记录在package.json中
### 运行 npm run xxx 的时候发生了什么？
1. > npm run xxx的时候，首先会去项目的package.json文件里找scripts 里找对应的xxx，然后执行 xxx的命令，例如启动vue项目 npm run serve的时候，实际上就是执行了vue-cli-service serve 这条命令。
2. > 为什么 不直接执行vue-cli-service serve而要执行npm run serve 呢？

    因为 直接执行vue-cli-service serve，会报错，因为操作系统中没有存在vue-cli-service这一条指令
3. > 那既然vue-cli-service这条指令不存在操作系统中，为什么执行npm run serve的时候，也就是相当于执行了vue-cli-service serve ，为什么这样它就能成功，而且不报指令不存在的错误呢？

    我们在安装依赖的时候，是通过npm i xxx 来执行的，例如 npm i @vue/cli-service，npm 在 安装这个依赖的时候，就会node_modules/.bin/ 目录中创建 好vue-cli-service 为名的几个可执行文件了。
    .bin 目录，这个目录不是任何一个 npm 包。目录下的文件，表示这是一个个软链接，打开文件可以看到文件顶部写着 #!/bin/sh ，表示这是一个脚本。
    由此我们可以知道，当使用 npm run serve 执行 vue-cli-service  serve 时，虽然没有安装 vue-cli-service的全局命令，但是 npm 会到 ./node_modules/.bin 中找到 vue-cli-service 文件作为  脚本来执行，则相当于执行了 ./node_modules/.bin/vue-cli-service serve（最后的 serve 作为参数传入）。
4. > 你说.bin 目录下的文件表示软连接，那这个bin目录下的那些软连接文件是哪里来的呢？它又是怎么知道这条软连接是执行哪里的呢？

    我们可以直接在新建的vue项目里面搜索vue-cli-service可以看到，它存在项目最外层的package-lock.json文件中
    从 package-lock.json 中可知，当我们npm i 整个新建的vue项目的时候，npm 将 bin/vue-cli-service.js 作为 bin 声明了。
    所以在 npm install 时，npm 读到该配置后，就将该文件软链接到 ./node_modules/.bin 目录下，而 npm 还会自动把node_modules/.bin加入$PATH，这样就可以直接作为命令运行依赖程序和开发依赖程序，不用全局安装了。
    假如我们在安装包时，使用 npm install -g xxx 来安装，那么会将其中的 bin 文件加入到全局，比如 create-react-app 和 vue-cli ，在全局安装后，就可以直接使用如 vue-cli projectName 这样的命令来创建项目了。
    面试官：搜噶，也就是说，npm i 的时候，npm 就帮我们把这种软连接配置好了，其实这种软连接相当于一种映射，执行npm run xxx 的时候，就会到 node_modules/bin中找对应的映射文件，然后再找到相应的js文件来执行。
5. > 刚刚看到在node_modules/bin中 有三个vue-cli-service文件。为什么会有三个文件呢？  

    如果我们在 cmd 里运行的时候，windows 一般是调用了 vue-cli-service.cmd，这个文件，这是 windows 下的批处理脚本，
    所以当我们运行vue-cli-service serve这条命令的时候，就相当于运行 node_modules/.bin/vue-cli-service.cmd serve。
    然后这个脚本会使用 node 去运行 vue-cli-service.js这个 js 文件
    由于 node 中可以使用一系列系统相关的 api ，所以在这个 js 中可以做很多事情，例如读取并分析运行这条命令的目录下的文件，根据模板生成文件等。


