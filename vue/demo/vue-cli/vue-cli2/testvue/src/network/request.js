import axios from 'axios'

export function request(config) {
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000/",
      timeout: 5000
    })
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