// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import  upperFirst from '../node_modules/lodash.upperfirst/index';
import  camelCase from '../node_modules/camelCase/index';

Vue.config.productionTip = false
const component = require.context('./components', false, /\.vue$/);
component.keys().forEach(fileName => {
  const componentConfig = component(fileName)
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
