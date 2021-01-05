AppID(小程序ID)：	wxf32cee7cda1902c0
##### 开发小程序的第一步，需要拥有一个小程序 AppID 
使用浏览器打开 https://mp.weixin.qq.com/ 点击立即注册，如图1-1所示，在打开的页面中选择小程序后，填入相关的信息，就可以完成注册了
注册成功之后，点击 “开发”—“开发设置” 就可以看到小程序的 AppID  
###### 下载微信小程序开发工具地址：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html

#### 目录结构文件解析
1. 根目录app.json： 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等  
    ##### 文件内字段解析：  
   >（1）pages字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录,写在 pages 字段的第一个页面就是这个小程序的首页。  
   >（2）window字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。
2. 工具配置 project.config.json：小程序开发者工具在每个项目的根目录都会生成一个,里面包含了你对开发者工具的所有设置,重新安装工具或者换电脑工作时可直接拉过来用。
3. 根目录下的 sitemap.json： 文件用来配置小程序及其页面是否允许被微信索引  
   ``` 
   "rules": [
       { //所有页面可以被搜索
        "action": "allow",
        "page": "*"
       },
       { //所有页面不可被搜索
        "action": "disallow",
        "page": "*"
       },
       { //此页面可以被搜索
        "action": "allow",
        "page": "path/to/page"
       },
       { //包含 a 和 b 参数的 path/to/page 页面会被微信优先索引
        "action": "allow",
        "page": "path/to/page",
        "params": ["a", "b"],
        "matching": "inclusive"
       }
    ] 
    ```
# -api：

**1. wx:if：**        
`<view wx:if="{{true}}">666</view>  `  

**2. wx:elif**        
`<view wx:elif="{{true}}">666</view>  `  

**3. wx:else**        
`<view wx:else>666</view>`  

**4. block wx:if**    
`<block wx:if="{{true}}"></block> //一次性判断多个组件标签`  

**5. wx:for**         
`<view wx:for="{{array}}" wx:key="index" >{{index}}: {{item.message}}</view>  `  
                      `默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item `  

**6. wx:for-item**    
`指定数组当前元素的变量名` 

**7. wx:for-index**   
`指定数组当前下标的变量名`

    <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
        {{idx}}: {{itemName.message}}
    </view>
                
**8. template**     
```  
item: {
    index: 0,
    msg: 'this is a template',
    time: '2016-06-18'
}
<template name="msgItem">
    <view>
        <text> {{index}}: {{msg}} </text>
        <text> Time: {{time}} </text>
    </view>
</template>
<template is="msgItem" data="{{...item}}"/>
```

**9. 引用.wxml文件：**

```
import          <import src="item.wxml"/>
                <template is="item" data="{{text: 'forbar'}}"/>

include         可以直接引用 相当于拷贝到 include 位置。
                <include src="header.wxml"/>
                <view> body </view>
                <include src="footer.wxml"/>
```

**10. 所有wxml 标签都支持的属性** 
`id \ class \ style \ hidden \ `

**11.** `data-*组件的事件 \  bind*/catch*(组件的事件)`

**12. 单位rpx**  

**13. WXSS引用：**   
`@import url('./test_0.css')  @import './test_0.wxss'`

**14. 动态更新内联样式：**      
`<view style="color: {{eleColor}}; font-size: {{eleFontsize}}"></view>`

**15. 官方样式库WeUI.wxss：**  
     `https://github.com/Tencent/weui-wxss `

**16. 模块化 以及 引入模块**
```
    /* A.js */
    module.exports = function( value ){ //暴露方法
    return value * 2;
    }
    /* B.js */
    var multiplyBy2 = require('./moduleA')
    var result = multiplyBy2(4)     
```

**17. 作用域：** 
```
不同的文件中可以声明相同名字的变量和函数，不会互相影响，不能直接使用
当需要使用全局变量的时，通过使用全局函数 getApp() 获取全局的实例，并设置相关属性值，来达到设置全局变量的目的
// a.js
// 获取全局变量
var global = getApp()
global.globalValue = 'globalValue'

// b.js
// 访问全局变量
var global = getApp()
console.log(global.globalValue) // 输出 globalValue
```

**18. 脚本执行顺序**   
`先执行app.js 然后会按照app.json 中定义的 pages 的顺序，逐一执行`

**19. App构造器** 
```
App({
    onLaunch: function(options) {}, //初始化完成时触发  options参数 打开小程序的方式 如：扫一扫打开 群聊中打开 
    onShow: function(options) {},  //小程序启动，或从后台进入前台显示，会触发 options参数 打开小程序的方式 如：扫一扫打开 群聊中打开 
    onHide: function() {},  //小程序从前台进入后台，会触发
    onError: function(msg) {}, //小程序发生脚本错误，或者 API 调用失败时，会触发
    globalData: 'I am global data' //全局共享数据
})
```
**20. 页面构造器Page()**
```
    Page({
        data: { text: "This is page data." },
        //Page实例的生命周期：
        onLoad: function(options) { }, //监听页面加载，触发时机早于onShow和onReady options其他页面跳转进来之后参数
        onReady: function() { }, //监听页面初次渲染完成
        onShow: function() { }, //监听页面显示，触发事件早于onReady
        onHide: function() { }, //监听页面隐藏
        onUnload: function() { }, //监听页面卸载
        //页面的用户行为：
        onPullDownRefresh: function() { }, //监听用户下拉动作
        onReachBottom: function() { }, //页面上拉触底事件的处理函数
        onShareAppMessage: function () { }, //用户点击右上角转发
        onPageScroll: function() { } //页面滚动触发事件的处理函数
    })
    (1) 下拉刷新 onPullDownRefresh
        监听用户下拉刷新事件，需要在app.json的window选项中或页面配置page.json中设置enablePullDownRefresh为true。当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
    (2) 上拉触底 onReachBottom
        监听用户上拉触底事件。可以在app.json的window选项中或页面配置page.json中设置触发距离onReachBottomDistance。在触发距离内滑动期间，本事件只会被触发一次。
    (3) 页面滚动 onPageScroll
        监听用户滑动页面事件，参数为 Object，包含 scrollTop 字段，表示页面在垂直方向已滚动的距离（单位px）。
    (4) 用户转发 onShareAppMessage
        只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮，在用户点击转发按钮的时候会调用，此事件需要return一个Object，包含title和path两个字段，用于自定义转发内容
        Page({
            onShareAppMessage: function () {
                return {
                    title: '自定义转发标题',
                    path: '/page/user?id=123'
                }
            }
        })
```
**21. 跳转** 
```
wx.navigateTo({ url: 'pages/detail/detail?id=1&other=abc' }) 如遇特殊字符需要采用UrlEncode后再拼接到页面URL上
    会在Page构造器的onLoad函数里作为参数传入
    Page({
        onLoad: function(option) {
                console.log(option.id)
                console.log(option.other)
        }
    })
```

**22. 页面跳转和路由 （页面层级称为页面栈，跳转一个页面多一层级）**
```
    wx.navigateTo({ url: 'pageD' }) //往当前页面栈多推入一个（跳转）
    wx.navigateBack() //退出当前页面栈的最顶上页面（回退）
    wx.redirectTo({ url: 'pageE' }) //替换当前页 当页面栈到达10层没法再新增的时候，往往就是使用redirectTo （替换）
    wx.switchTab() //只能打开Tabbar页面
    wx. reLaunch({ url: '' }) //重启小程序
```

**23. Tabbar**
```
    "tabBar": {  
    "color": "#a9b7b7",  
    "selectedColor": "#11cd6e",  
    "borderStyle": "black" ,
    "list": [{  
      "selectedIconPath": "images/avatar.jpg",  
      "iconPath": "images/avatar1.jpg",  
      "pagePath": "pages/index/index",  
      "text": "肉肉"  
    }, {  
      "selectedIconPath": "images/avatar.jpg",  
      "iconPath": "images/avatar2.jpg",  
      "pagePath": "pages/logs/logs",  
      "text": "宝贝"  
    },{  
      "selectedIconPath": "images/avatar.jpg",  
      "iconPath": "images/avatar3.jpg",  
      "pagePath": "pages/wxml/index",  
      "text": "笨蛋"  
    }
    ]  
  } 
```
**24. setData(data, callback)**
```
    this.setData({
      text: 'change data'
    }, function(){
      // 在这次setData对界面渲染完毕后触发
    })
```

**wx.request 发起网络请求**
```
wx.request({
    url: 'test.php',
    data: {},
    header: { 'content-type': 'application/json' },
    success: function(res) {
    // 收到https服务成功后返回
    console.log(res.data)
    },
    fail: function() {
    // 发生网络错误等情况触发
    },
    complete: function() {
    // 成功或者失败后触发
    }
})
```

**事件**
``` 
touchstart	        手指触摸动作开始
touchmove	        手指触摸后移动
touchcancel	        手指触摸动作被打断，如来电提醒，弹窗
touchend	        手指触摸动作结束
tap	                手指触摸后马上离开
longpress	        手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
longtap	            手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
transitionend	    会在 WXSS transition 或 wx.createAnimation 动画结束后触发
animationstart	    会在一个 WXSS animation 动画开始时触发
animationiteration	会在一个 WXSS animation 一次迭代结束时触发
animationend	    会在一个 WXSS animation 动画完成时触发
```

**事件绑定**   
事件绑定的写法和组件属性一致，以key="value"的形式key以bind或者catch开头，然后跟上事件的类型 如：  
```
bindtap、catchtouchstart 
            或 
bind:tap、catch:touchstart
bind和catch前加上 capture- 来表示捕获阶段
```
*bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡*

**界面交互反馈**
1. 触摸反馈：
```
.hover{
  background-color: gray;
}
<button hover-class="hover"> 点击button </button>
```
2. Loading
```
<button loading="{{loading}}" bindtap="tap">操作</button>
Page({
  data: { loading: false },
  tap: function() {
    // 把按钮的loading状态显示出来
    this.setData({
      loading: true
    })
  }
})
```
3. Toast和模态对话框
```
Page({
// Toast
  onLoad: function() {
    wx.showToast({ // 显示Toast
      title: '已发送',
      icon: 'success',
      duration: 1500
    })
    // wx.hideToast() // 隐藏Toast
  }
// 模态对话框
    wx.showModal({
      title: '标题',
      content: '告知当前状态，信息和解决方法',
      confirmText: '主操作',
      cancelText: '次要操作',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      }
    })
})
```

**下拉刷新**
```
//page.json
{"enablePullDownRefresh": true }

//page.js
Page({
  onPullDownRefresh: function() {
    // 用户触发了下拉刷新操作
    // 拉取新数据重新渲染界面
    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。
  }
})
```

**上拉触底**
```
//page.json
// 界面的下方距离页面底部距离小于onReachBottomDistance像素时触发onReachBottom回调
{"onReachBottomDistance": 100 }

//page.js
Page({
  onReachBottom: function() {
    // 当界面的下方距离页面底部距离小于100像素时触发回调
  }
})
```
**WXS 模块**  

wxml模版里无法调用逻辑层的方法 但可以用wxs模块，WXS 代码可以编写在 wxml 文件中的 <wxs> 标签内，或以 .wxs 为后缀名的文件内
```
<image src="{{util.size}}" />

<wxs module="util"> 
//这里不支持新特性 不支持es6语法
module.exports = {
  size: function(value){
    return value + "aa"
  }
}
</wxs>

```

**预览图片**
```
wx.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
})
```


***当然我们有些时候并不想整个页面进行滚动，而是页面中某一小块区域需要可滚动，此时就要用到宿主环境所提供的scroll-view可滚动视图组件***






