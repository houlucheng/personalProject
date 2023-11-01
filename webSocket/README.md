### 使用
```javascript
// WebSocket构造函数，创建WebSocket对象
let ws = new WebSocket('ws://localhost:8888')

// 连接成功后的回调函数
ws.onopen = function (params) {
  console.log('客户端连接成功')
  // 向服务器发送消息
  ws.send('hello')
};

// 从服务器接受到信息时的回调函数
ws.onmessage = function (e) {
  console.log('收到服务器响应', e.data)
};

// 连接关闭后的回调函数
ws.onclose = function(evt) {
  console.log("关闭客户端连接");
};

// 连接失败后的回调函数
ws.onerror = function (evt) {
  console.log("连接失败了");
};


// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，这样服务端会抛异常。
window.onbeforeunload = function() {
    ws.close();
}  
```

### 属性
1. readyState 属性返回实例对象的当前状态
> CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

示例
```javascript
switch (ws.readyState) {
  case WebSocket.CONNECTING:	// 也可以用0
    // do something
    break;
  case WebSocket.OPEN:			// 也可以用1
    // do something
    break;
  case WebSocket.CLOSING:		// 也可以用2
    // do something
    break;
  case WebSocket.CLOSED:		// 也可以用3
    // do something
    break;
  default:
    // this never happens
    break;
}
```
### 封装好的 WebSocket 代码（包括心跳机制）
<b>情景：</b>前端使用 WebSocket 的时候，后端长时间没有推送数据，导致 WebSocket 连接经常断开，后端也会报错。

<b>解决方法：</b>通过 心跳机制 让前端和后端始终保持连接。

<b>代码：</b>
```javascript
// WebSocket心跳检测
var ws_heartCheck = {
    timeout: 5000,			// 5秒一次心跳
    timeoutObj: null,		// 执行心跳的定时器
    serverTimeoutObj: null,	// 服务器超时定时器
    reset: function(){		// 重置方法
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    },
    start: function(){		// 启动方法
        var self = this;
        this.timeoutObj = setTimeout(function(){
            // 这里发送一个心跳信息，后端收到后，返回一个消息，在onmessage拿到返回的心跳（信息）就说明连接正常
            ws.send("check");
			// 如果超过一定时间还没重置，说明后端主动断开了
            self.serverTimeoutObj = setTimeout(function(){
				// 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                ws.close();
            }, self.timeout);
        }, this.timeout);
    }
}

```

<b>使用方法：</b>
```javascript
// WebSocket
var ws = null;
// WebSocket连接地址
var ws_url = 'ws://localhost:8888'

// 创建WebSocket
ws_create(ws_url);

// 创建WebSocket
function ws_create(url) {
	 try{
		// 判断是否支持 WebSocket
        if('WebSocket' in window){
			// 连接WebSocket
            ws = new WebSocket(url);
			// 初始化WebSocket事件(WebSocket对象, WebSocket连接地址)
			ws_event(ws, url);
        }
    }catch(e){
		// 重新连接WebSocket
        ws_recontent(url);
        console.log(e);
    }
}

// WebSocket 事件创建
function ws_event(ws, url) {
	ws.onopen = function (event) {
		// 心跳检测重置
		ws_heartCheck.reset().start();
		console.log("WebSocket已连接");
	};

	ws.onclose = function (event) {
		// 重新连接WebSocket
        ws_recontent(url);
		console.log("WebSocket连接已关闭");
	};

	ws.onerror = function (event) {
		// 重新连接WebSocket
        ws_recontent(url);
		console.log("WebSocket错误：", event);
	};

	ws.onmessage = function (event) {
		// 只要有数据，那就说明连接正常
		ws_heartCheck.reset().start();

		// 处理数据，只处理非心跳检测的数据
		if (event.data != 'check') {
		  // 处理数据
		}
	};
}

// 重新连接websocker(WebSocket连接地址)
function ws_recontent(url) {
	// 延迟避免请求过多
	setTimeout(function () {
		ws_create(url);
	}, 2000);
}

// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，这样服务端会抛异常。
window.onbeforeunload = function() {
    ws.close();
} 

// WebSocket心跳检测
var ws_heartCheck = {
    timeout: 5000,			// 5秒一次心跳
    timeoutObj: null,		// 执行心跳的定时器
    serverTimeoutObj: null,	// 服务器超时定时器
    reset: function(){		// 重置方法
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    },
    start: function(){		// 启动方法
        var self = this;
        this.timeoutObj = setTimeout(function(){
            // 这里发送一个心跳信息，后端收到后，返回一个消息，在onmessage拿到返回的心跳（信息）就说明连接正常
            ws.send("check");
			// 如果超过一定时间还没重置，说明后端主动断开了
            self.serverTimeoutObj = setTimeout(function(){
				// 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                ws.close();
            }, self.timeout);
        }, this.timeout);
    }
}

```


>参考文档：https://blog.csdn.net/qq_17627195/article/details/128559926
>官方文档：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket
