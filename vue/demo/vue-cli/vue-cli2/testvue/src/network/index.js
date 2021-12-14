/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import QS from 'qs'
let serviceConfig = 'http://192.168.31.69:8080'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = serviceConfig // 'api'
    //   axios.defaults.baseURL = 'api'
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = serviceConfig
    //   axios.defaults.baseURL = '/api'
}

// 请求超时时间
axios.defaults.timeout = 2000

// post请求头
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // config.withCredentials = true
        // const token = store.state.token
        // token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 404:
                    console.log('网络请求不存在');
                    break
                // 其他错误，直接抛出错误提示
                default:
                    console.log(error.response.data.message);
            }
            return Promise.reject(error.response)
        }
    }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const get = (url, ...params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const post = (url, ...params) => {
    return new Promise((resolve, reject) => {
        axios //QS.stringify(params)关于这个函数会输出什么结果大家可以自行尝试一下，结果会让你惊喜，也可以自己单独传一个对象进去测试一下
            .post(url, QS.stringify(...params))
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

export default { get, post }