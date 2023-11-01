#### 1. 安装qiankun
``` javascript
yarn add qiankun 或 npm i qiankun -S
```
#### 2. 在主应用中注册微应用
```javascript
import { registerMicroApps, loadMicroApp, start } from 'qiankun';

registerMicroApps(
  [
    {
      name: 'react app',
      entry: '//localhost:7100', // 也可为 ‘/bs-er-base/’ 微应用的入口路径
      container: '#yourContainer', //放微应用的容器
      activeRule: '/yourReactApp', // 激活路由
      loader: (loading) => { // 可选参数 loading 状态发生变化时会调用的方法。
        // 可这样操作
        return (
          <>
            {loading && <h4 className="subapp-loading">Loading...</h4>}
            <div id="yourContainer" />
          </>
        );
      }
    },
    // ......
  ],
  { // 生命周期
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
    afterMount: (app) => console.log('before load', app.name),
    beforeUnmount: [(app) => console.log('before mount', app.name)],
    afterUnmount: (app) => console.log('before load', app.name),
  }
)

// 如果微应用不是直接跟路由关联的时候，你也可以选择手动加载微应用的方式：
loadMicroApp({
  name: 'app',
  entry: '//localhost:7100',
  container: '#yourContainer',
})

// 启动
start();

```
> 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。

#### 3. 微应用导出相应的生命周期钩子
```javascript
// 在子应用入口文件导出钩子函数

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
	// render(props)
  // ......
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
	const { container } = props
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
	console.log('update props', props)
}

```

#### 4. 配置微应用的打包工具
除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置：
```javascript
const packageName = require('./package.json').name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

#### API

##### 1. setDefaultMountApp
> 设置主应用启动后默认进入的微应用
```javascript
import { setDefaultMountApp } from 'qiankun';


// 设置主应用启动后默认进入的微应用
setDefaultMountApp('/yourReactApp')

```

##### 2. runAfterFirstMounted
> 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
```javascript
import { runAfterFirstMounted } from 'qiankun';

runAfterFirstMounted(() => startMonitor());
```

##### 3. prefetchApps(apps, importEntryOpts?)
> apps - AppMetadata[] - 必选 - 预加载的应用列表
importEntryOpts - 可选 - 加载配置
手动预加载指定的微应用静态资源。仅手动加载微应用场景需要，基于路由自动激活场景直接配置 prefetch 属性即可。
```javascript
import { prefetchApps } from 'qiankun';

prefetchApps([
  { name: 'app1', entry: '//localhost:7001' },
  { name: 'app2', entry: '//localhost:7002' },
]);
```

###### 4. initGlobalState(state)
* 用法:
    定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法。
* 返回
  * MicroAppStateActions
    * onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
    * setGlobalState: (state: Record<string, any>) => boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
    * offGlobalStateChange: () => boolean，移除当前应用的状态监听，微应用 umount 时会默认调用
* 示例
  ```javascript
  // 主应用
  
  import { initGlobalState, MicroAppStateActions } from 'qiankun';

  // 初始化 state
  const actions: MicroAppStateActions = initGlobalState(state);

  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  actions.setGlobalState(state);
  actions.offGlobalStateChange();

  // 微应用
  
  // 从生命周期 mount 中获取通信方法，使用方式和 master 一致
  export function mount(props) {
    props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
    });

    props.setGlobalState(state);
  }
  ```