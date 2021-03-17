/* 一次性注册多个组件 */
const obj = {}

obj.install = function() {
  console.log(require.context);
  let requireAll = require.context("./content/goods", true, /\.vue$/)
  // console.log(requireAll.keys());
  requireAll.keys().forEach((item)=> {
    console.log(requireAll(item));
  })
}

export default obj