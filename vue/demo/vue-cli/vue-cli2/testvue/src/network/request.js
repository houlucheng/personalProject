import axios from 'axios'

export function request(config) {
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000/",
      timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
      // console.log(config);
      // 必须 return 要不然请求无法完成
      return config
    }, err => {})

    // 响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    }, err => {})

    return instance(config)
}


// export function request() {
//   return new Promise((resolve, reject)=> {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000/",
//       timeout: 5000
//     })
//     instance({
//       url: "home/multidata",
//       method: "get"
//     }).then((res)=> {
//       resolve(res)
//     }).catch((err)=> {
//       reject(err)
//     })
//   })
// }