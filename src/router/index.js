import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
    	path:'/',
      redirect: '/home',
      meta:{title:'首页'},
    },
    {
      path:'/home',
      name:'home',
      meta:{keepAlive:true,title:'首页'},
      component:(resolve) => require(['@/page/home'],resolve)
    },
    {
      path:'/about',
      name:'about',
      meta:{title:'关于'},
      component:(resolve) =>require(['@/page/about'],resolve)
    },
    {
      path:'/appert',
      name:'appert',
      meta:{title:'预约'},
      component:(resolve) =>require(['@/page/appert'],resolve)
    },
    {
      path:'/navs',
      name:'name',
      component:(resolve)=>require(['@/components/navs'],resolve)
    },
    {
      path:'/load',
      name:'load',
      component:(resolve)=>require(['@/components/load'],resolve)
    },
    {
      path:'/back',
      name:'back',
      component:(resolve)=>require(['@/components/back'],resolve)
    },
    {
      path:'/ok',
      name:'ok',
      component:(resolve)=>require(['@/components/ok'],resolve)
    },
    {
      path:'/bbb',
      name:'bbb',
      component:(resolve)=>require(['@/components/bbb'],resolve)
    },
    {
      path:'/casebtn',
      name:'casebtn',
      component:(resolve)=>require(['@/page/casebtn'],resolve)
    },
    {
      path:'/decortbtn',
      name:'decortbtn',
      component:(resolve)=>require(['@/page/decortbtn'],resolve)
    },
    {
      path:'/decortList',
      name:'decortList',
      component:(resolve)=>require(['@/page/decortList'],resolve)
    },
    {
      path:'/designer_introd',
      name:'designer_introd',
      component:(resolve)=>require(['@/page/designer_introd'],resolve)
    },
    {
      path:'/login',
      name:'login',
      meta:{title:'登陆'},
      component:(resolve)=>require(['@/page/login'],resolve)
    }
  ]
})
