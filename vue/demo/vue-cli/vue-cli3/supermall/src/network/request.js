import axios from 'axios'

export function request(config) {
    const instance = axios.create({
      // baseURL: "http://123.207.32.32:8000/",
      baseURL: "http://152.136.185.210:7878/api/m5/",
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
