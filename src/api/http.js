/* eslint-disable func-call-spacing,prefer-promise-reject-errors */
import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://qsuas.qisu666.com/qs-uas/',
  baseURL: 'https://www.yishechina.cn/wapp/index.php/Home'
  // withCredentials: true // 跨域类型时是否在请求中协带cookie
})
export default class HttpUtil {
  static get (url) {
    return new Promise((resolve, reject) => {
      instance.get(url).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url, params = {}) {
    return new Promise((resolve, reject) => {
       
      instance.post(url, params).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
