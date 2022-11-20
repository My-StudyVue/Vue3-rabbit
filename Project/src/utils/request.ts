import axios, { type Method } from "axios";

export const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";

// 创建axios 实例
const instance = axios.create({
  baseURL: baseURL,
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
  }
);

// 添加响应器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
);

export default instance






// 后端返回的接口数据格式
interface ApiRes<T = unknown> {
  msg: string;
  result: T;
}

/**
 * axios 二次封装，整合 TS 类型
 * @param url  请求地址
 * @param method  请求类型
 * @param submitData  对象类型，提交数据
 */

export const http = <T>(method: Method, url: string, submitData?: object) => {
  return instance.request<ApiRes<T>>({
    url,
    method,
    // 🔔 自动设置合适的 params/data 键名称，如果 method 为 get 用 params 传请求参数，否则用 data
    [method.toUpperCase() === "GET" ? "params" : "data"]: submitData,
  })
}