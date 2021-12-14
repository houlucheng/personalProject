import api from './index'

/**
 * 登录
 */
const loginRequest = (option) => api.get('/h5/home/login', option)
/**
 * 注册
 */
const registerRequest = (option) => api.post('/h5/home/register', option)