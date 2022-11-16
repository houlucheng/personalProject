## 一、必须属性
>package.json中最重要的两个字段name和version,他们都是必须的，如果没有，就无法正常执行npm install，npm规定package.json文件是由名称和版本号作为唯一标识的。
### 1. name
项目的名称，它是一个字符串，给name命名时，注意一下几点：
- 名称长度必须小于或等于214个字符，不能以"."和“_”开头，不能包含大写字母
  （这是因为当软件包在npm上发布时，会基于此属性获得自己的URL，所以不能包含非URL安全字符（non-url-safe））
- 名称可以作为参数被传入require(""),用来导入模块，所以应当尽可能的简短、语义化；
- 命名不能和其他模块的名称重复，可以使用<font color="#8888">npm view</font>命令查询模块名是否重复，如果不重复会提示404（npm view react）
### 2. version
表示该项目包的版本号，它是一个字符串。规范如下：
- 版本号的命名遵循语义化版本2.0.0规范，格式为：主版本号.次版本号.修订号，通常情况下，修改主版本号是做了大的功能性的改动，修改次版本号是新增了新功能，修改修订号就是修复了一些bug；
- 如果某个版本的改动较大，并且不稳定，可能如法满足预期的兼容性需求，就需要发布先行版本，先行版本通过会加在版本号的后面，通过“-”号连接以点分隔的标识符和版本编译信息：内部版本（alpha）、公测版本（beta）和候选版本（rc，即release candiate）。

可以通过以下命令来查看npm包的版本信息，以react为例：
```javascript
  // 查看最新版本
  npm view react version
  // 查看所有版本
  npm view react versions
```

## 二、描述信息
### 1. description
它是一个字符串，用来描述这个项目包，可以让开发者在npm的搜索中发现这个项目包

### 2. keywords
它是一个字符串数组，表示项目包的关键词。和description一样，用来增加项目包的曝光率。
```javascript
  {
    "keywords": ["javascript", "react"]
  }
```
### 3. author
项目的作者，有两种形式：
- 字符串形式
```javascript
  {
    "author": "houlucheng <15235602279@163.com> (https://blog.csdn.net/qq_43443700)"
  }
```
- 对象形式
```javascript
  {
    "author": {
      "name": "houlucheng",
      "email": "15235602279@163.com",
      "url": "https://blog.csdn.net/qq_43443700"
    }
  }
```

### 4. contributors
项目贡献者，该字段是一个数组，包含所有的贡献者，同样有两种写法：
- 数组
```javascript
  {
    "contributors": [
      "houlucheng0 <xxxxx@xx.com> (https://blog.csdn.net/qq_43443700)",
      "houlucheng1 <xxxxx@xx.com> (https://blog.csdn.net/qq_43443700)"
    ]
  }
```

- 对象数组
```javascript
  {
    "contributors": [
      {
        "name": "houlucheng0",
        "email": "15235602279@163.com",
        "url": "https://blog.csdn.net/qq_43443700"
      },
      {
        "name": "houlucheng1",
        "email": "15235602279@163.com",
        "url": "https://blog.csdn.net/qq_43443700"
      }
    ]
  }
```

### 5. homepage
项目的主页地址

### 6. repository
表示代码的存放仓库地址，通常有两种书写形式。
- 字符串
```javascript
  {
    "repository": "https://github.com/facebook/react.git"
  }
```
- 对象
```javascript
  {
    "repository": {
      "type": "git",
      "url": "https://github.com/facebook/react.git"
    }
  }
```

### 7. bugs
表示项目提交问题的地址，该字段是一个对象，可以添加一个提交问题的地址和反馈的邮箱
```javascript
  {
    "bugs": {
      "url": "https://github.com/facebook/react/issues",
      "email": "xxxxxxx@xx.com"
    }
  }
```

## 三、依赖配置
### 1. dependencies
该字段中声明的是项目在生产环境中所必须依赖的包。当使用npm或yarn安装包的时候，会被自动插入到此配置项中。安装依赖时使用 <b>--save</b> 参数，也会将新安装的bpm包写入dependencies属性
```javascript
  {
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "4.0.3",
    },
  }
```
这里每一项配置都是一个键值对（key-value）， key表示模块名称，value表示模块的版本号。版本号遵循主版本号.次版本号.修订号的格式规定：
- <b>固定版本：</b> 上面的react-scripts的版本4.0.3就是固定版本，安装时只安装这个指定的版本；
- <b>波浪号：</b> 比如~4.0.3，表示安装4.0.x的最新版本（不低于4.0.3），也就是说安装时不会改变主版本号和次版本号；
- <b>插入号：</b> 比如上面 react 的版本^17.0.2，表示安装17.x.x的最新版本（不低于17.0.2），也就是说安装时不会改变主版本号。如果主版本号为0，那么插入号和波浪号的行为是一致的；
- <b>latest：</b>安装最新的版本。
>注：不要把测试或者过渡性的依赖放在dependencies，避免生产环境出现意外的问题。

### 2. devDependencies
开发阶段需要的依赖包，如：Webpack、Eslint、Babel等，用于辅助开发。
当使用 npm 或 yarn 安装软件包时，指定以下参数后，新安装的npm包会被自动插入到此列表中：
```javascript
  // 默认是--save 安装在dependencies。 --save-dev是指定安装到devDependencies
  npm install --save-dev <PACKAGENAME>
  yarn add --dev <PACKAGENAME>
```

### 3. peerDependencies
用来供插件指定其所需要的主工具的版本。
```javascript
  {
    "name": "chai-as-promised",
    "peerDependencies": {
      "chai": "1.x"
    }
  }
```
上面代码指定在安装chai-as-promised模块时，主程序chai必须一起安装，而且chai的版本必须是1.x。如果项目指定的依赖是chai的2.0版本，就会报错。

<b>需要注意，从npm 3.0版开始，peerDependencies不再会默认安装了。</b>

### 4. optionalDependencies
如果需要在找不到包或者安装包失败时，npm仍然能够继续运行，则可以将该包放在optionalDependencies对象中，optionalDependencies对象中的包会覆盖dependencies中同名的包，所以只需在一个地方进行设置即可。

<b>需要注意，由于optionalDependencies中的依赖可能并为安装成功，所以一定要做异常处理，否则当获取这个依赖时，如果获取不到就会报错。</b>

### 5. bundledDependencies
该配置项是一个数组，数组里可以指定一些模块这些模块将在这个个包发布时被一起打包

<b>需要注意，这个字段数组中的值必须是在dependencies, devDependencies两个里面声明过的包才行。</b>

### 6. engines
维护旧项目时，可能对npm包的版本或者node版本有特殊要求，如果不满足就跑不起来项目为了开箱即用

## 四、脚本配置
### 1. scripts

### 2. config

## 五、 文件&目录
### 1. main

### 2. browser

### 3. module

### 4. bin

### 5. files

### 6. man

### 7. directories

## 六、 发布配置
### 1. private

### 2. preferGlobal

### 3. publishConfig

### 4. os

### 5. cpu

### 6. license

## 七、 第三方配置
### 1. typings

### 2. eslintConfig

### 3. babel

### 4. unpkg

### 5. lint-staged

### 6. gitHooks

### 7. browserslist