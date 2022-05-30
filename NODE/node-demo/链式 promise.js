const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('./todos.json')
    .then(status)    // 注意，`status` 函数实际上在这里被调用，0并且同样返回 promise，
    .then(json)      // 这里唯一的区别是的 `json` 函数会返回解决时传入 `data` 的 promise，
    .then(data => {  // 这是 `data` 会在此处作为匿名函数的第一个参数的原因。
        console.log('请求成功获得 JSON 响应', data)
    })
    .catch(error => {
        console.log('请求失败', error)
    })