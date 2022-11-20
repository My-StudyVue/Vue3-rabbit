import axios from 'axios'

// 创建axios 实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000,
})

// 添加拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance