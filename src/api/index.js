import HttpUtils from './http'
import Vue from 'vue'


class Https {
  // 模板
  createIncoice = (parmas) => {
    return HttpUtils.post('web/news/website', parmas)
  }
  // 订票-猜你喜欢
  bookTicketGuess = (parmas) => {
    return HttpUtils.get('/micronetwork/encryptInfo.action', parmas)
  }
  // 通用
  setGet = (parmas) => {
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

