// 项目中有一个专门用来写 请求的文件；
import  axios  from  "axios";

// axios配置默认的请求路径；
// 路径会默认拼到这个地址的后面；
axios.defaults.baseURL = "http://localhost:3000";

// axios 拦截；
// 当axios数据请求成功之后执行；它可以统一处理数据；
// 每一个请求，都会触发这个中间件中的函数；
axios.interceptors.response.use(function (res) {
    return  res.data;
});

// 获取轮播图数据；
export  let  getSlider = ()=>{
  // axios默认发送的是异步的请求；
  return  axios.get("/sliders");
};
// 获取热门图书；
export  let  getHot = ()=>{
  return axios.get("/hot")
}
// 获取所有的图书；
export let  getAll = ()=>{
  return axios.get("/books")
}

export  let  deleteBook=(id)=>{
  return axios.get("/delete?id="+id)
}
