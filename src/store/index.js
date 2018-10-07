import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


//状态
let state = {
    carList:[]
}
import mutations from './mutations'
import getters from './getters'
export default new Vuex.Store({
    state,
    mutations,
    getters,
    strict:true
})