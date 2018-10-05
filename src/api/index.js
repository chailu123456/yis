import HttpUtils from './http'
import Vue from 'vue'


class Https {
  // 模板
  createIncoice = (parmas) => {
    return HttpUtils.post('web/news/website', parmas)
  }
  // home
  home = () => {
    return HttpUtils.get('/Index/indexone')
  }
  // 装修样式
  d_style = () => {
    return HttpUtils.get('/Index/case_nav')
  }
  // 装修案例
  de_examp = (parmas) => {
    return HttpUtils.get('/Index/sort_case/id/'+parmas)
  }
  // 通用
  setGet = (parmas) => {
    console.log(parmas)
    return HttpUtils.get('/micronetwork/encryptInfo.action', parmas)
  }
  getHotelList = (parmas) => {
    return HttpUtils.get('/micronetwork/encryptInfo.action', parmas)
  }
  //文创产品
  getProductViewList = (parmas) => {
    return HttpUtils.get('/micronetwork/encryptInfo.action', parmas)
  }
}
Vue.prototype.$http = new Https()

