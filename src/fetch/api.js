import axios from 'axios'
import qs from 'qs'
import * as _ from '../util/tool'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '/api/Ajax'
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  _.toast('错误的传参', 'fail')
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  _.toast('网络异常', 'fail')
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
        .then(response => {
          let resData = response.data
          if (resData['S'] === 0) {
            resolve(response.data)
          } else if (resData['S'] === 101) {
            _.alert('登录超时', 'fail')
            _.timeOut()
          }
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
  })
}
export default {
  postAjax (params) {
    return fetch('', params)
  }
}
