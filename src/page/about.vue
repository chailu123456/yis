<template>
    <div class="about">
         <navs>关于我们</navs>
        <bbb :selectdata="selectData"></bbb>
   
          <!-- <button @click="$store.commit('add')">+</button>
          <p>{{$store.state.count}}-\\{{count}}</p>
          <button @click="reduce">-</button> -->
          <ok :data="settingBottomBtn" :width="widthdata"></ok>
          <ul>
              <li v-for="(l,i) in carList">
                <img class="books" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651616864,2530638681&fm=26&gp=0.jpg" alt="">
                 <p>书名：{{l.goodsName}}</p> 
                 <button @click="add(l)">+</button>
                 <button @click="reduce(l)">-</button>
                 <button @click="remove(l)">删除</button>
                 <p>数量：{{l.bookCount}}</p>
                 <p>小计：{{l.bookCount*l.price}}</p>
              </li>
              <li>共计{{count}}本 ||| 共计{{allmoney}}元 <br> 清空购物车<button @click="clear">清空</button> </li>
          
          </ul>
          
    </div>
</template>
<script>
import navs from '@/components/navs'
import api from '../api/hello'
import ok from '@/components/ok'
import slide from '@/components/slide'
import bbb from '@/components/bbb'
// import store from '@/vuex/store'
// import { mapState,mapMutations,mapGetters } from 'vuex'
import * as Types from '../store/types.js'
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    name:'about',
    data(){
        return{
            msg:'关于我们',
            settingBottomBtn:[
                {text:"首页门户设计",id:"portalSettings",img:"fa fa-university",imgType:"fontIcon"},
                {text:"更多设置",id:"moreSetting",img:"fa fa-paper-plane-o",imgType:"fontIcon"},
                {text:"重置",id:"restSetting",img:"../../svg/reset.svg",imgType:"svg"},
                {text:"关闭",id:"closeSettingPanel",img:"../../svg/closeBtn.svg",imgType:"svg"}
            ],
            widthdata:'100px',
            selectData: {
                defaultIndex: 0,//默认显示索引值
                selectStatus: false,//下拉框是否出现
                selectOptions: [ //下拉框中的数据
                    {
                        name: 'time',
                        context: '按时间排序'
                    },
                    {
                        name: 'view',
                        context: '按浏览量排序'
                    },
                    {
                        name: 'like',
                        context: '按点赞数排序'
                    },
                    {
                        name: 'reply',
                        context: '按回复数排序'
                    },
                    {
                        name: 'reward',
                        context: '按打赏数排序'
                    }
                ]
            }
        }
    },
    created(){
        console.log(api.school)
    },
    mounted: function () {   
        this.reqMovieDetail();
    },
    // store,
    // computed:{
    //     ...mapState(['count']),
    //     ...mapGetters(['count'])
    //     // count(){
    //     //     return this.$store.getters.count;
    //     // }

    // },
    components:{
        navs,
        ok,
        slide,
        bbb
    },
    computed:{
        ...mapState(['carList']),
        ...mapGetters(['count','allmoney'])
    },
     methods: {
         reqMovieDetail(){
             alert('我最先执行，只执行一次')
         },
       add(book){
           this.$store.commit(Types.ADD_CART,book)
       },
       reduce(book){
           this.$store.commit(Types.REDUCE,book)
       },
       findPosition(id){
           // findIndex查找目标元素，找到返回元素的下标，找不到返回-1
            return this.carList.findIndex(item=>{
                return item.goodsId==id
             })
        },
       remove(book){
           var i=this.findPosition(book.goodsId);
           console.log(i)
           this.$store.commit(Types.REMOVE,i)
       },
       clear(){
           this.$store.commit(Types.CLEAR)
       }
       
    }
    // methods:mapMutations(['add','reduce'])
}
</script>
<style scoped>
.about {
    width: 100%;
    height: 100%;
}
button {
    width: 60px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
}
ul li {
    width: 100%;
    height: 150px;
    margin-top: 30px;
    
}
.books {
    width: 40%;
    float: left;
}
ul li p {
    width: 60%;
    float: left;
    margin-top: 4%;
}
</style>