<template>
    <div class="home">
        <navs>首页</navs>
        <load v-if="show"></load>
      
        <template v-else>
            <div class="banner">
                <van-swipe  :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img @click="img(image.link)" :src="'https://www.yishechina.cn/attachs/'+image.thumb" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="menu">
                <router-link to="/decortList" tag="p">
                    <img src="../assets/img/a-qq.png" alt="">
                    <span>装修案例</span>
                </router-link>
                <router-link to="/home" tag="p">
                    <img src="../assets/img/c_.png" alt="">
                    <span>找设计师</span>
                </router-link>
                <router-link to="/about" tag="p">
                    <img src="../assets/img/dec.png" alt="">
                    <span>装修攻略</span>
                </router-link>
            </div>
            <h2 class="know">装修案例</h2>
            <div class="decort">
                <ul class="deco">
                    <li v-for="(case_d, index) in caseing" :key="index" @click="casebtn(case_d.case_id)">
                        <img :src="'https://www.yishechina.cn/attachs/'+case_d.photo" alt="">
                        <span>{{case_d.title}}</span>
                    </li>
                </ul>
            </div>
            <h2 class="know">装修知识</h2>
            <div class="decort">
                <ul class="deco">
                    <li v-for="(gl_d, index) in gl" :key="index" @click="knowledge(gl_d.article_id)">
                        <img :src="'https://www.yishechina.cn/attachs/'+gl_d.thumb" alt="">
                        <span>{{gl_d.title}}</span>
                    </li>
                </ul>
            </div>
            <h2 class="know">设计师</h2>
            <div class="decort">
                <ul class="design">
                    <li v-for="(des_d, index) in des" :key="index" @click="design(des_d.uid)">
                        <img :src="'https://www.yishechina.cn/attachs/'+des_d.face" alt="">
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import api from '../api/index.js'
import navs from '@/components/navs'
import load from '@/components/load'

import { Swipe,Lazyload, SwipeItem,Loading  } from 'vant';
export default {
    name: 'home',
    data() {
        return {
            msg:'首页',
            images: [],
            show:true,
            caseing:[],
            des:[],
            gl:[]
        }
    },
    created(){
        
        // this.getdata()
        this.yishe()
    
    },
    methods:{
        img(index) {
            window.location.href=index
        },
        casebtn(id){
            console.log(id)
            this.$router.push({
                path:'casebtn',
                query:{
                    id :id
                }
            })
        },
        knowledge(id){
            this.$router.push({
                path:'decortbtn',
                query:{
                    id :id
                }
            })
        },
        design(id){
            this.$router.push({
                path:'designer_introd',
                query:{
                    id:id
                }
            })
        },
        async getdata(){
            try{
                let parmas =  {
                    pageNum:"1",
                    pageSize:"6",
                    news_type:"1"
                }
                let data = await this.$http.createIncoice(parmas);
                console.log(data)
            }catch(e){
                console.log(e)
            } 
        },
        async yishe(){
            console.log(this.defines.per.hasenter)
            if(this.defines.per.hasenter==false){
                this.$router.push({path:'login'})
            }
                var gethome = await this.$http.home()
                console.log(gethome)
                this.images = gethome['banner'];
                this.caseing = gethome['case'];
                this.des = gethome['des'];
                this.gl = gethome['gl'];
                this.show = false;
            
        }
    },
    components:{
        navs,
        load
    }
}
</script>
<style>
.home {
    width: 100%;
    height: 100%;
}
.banner {
    width: 100%;
    height: 200px;
}
.van-swipe {
    height: 100%;
}
.van-swipe img {
    width: 100%;
    height: 100%;
}
.load {
    position: absolute;
    top: 50%;
    left:46%;
}
.menu {
    width: 100%;
   
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}
.menu p {
    width: 33.333%;
    
    margin-top: 10px;
}
.menu p img {
    width: 48%;
}
.menu p span {
    display: block;
        font-size: 14px;
}
.decort {
    margin-top: 10px;
}
.deco {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.deco li {
    width: 40%;
    margin-top: 8px;
}
.deco li img {
    width: 100%;
    height: 100px;
}
.deco li span {
    font-size: 12px;
}
.know {
    margin: 10px 0;
    color: #63cca3
}
.design {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.design li {
    width: 24%;
    margin-top: 10px;
}
.design li img {
    width: 80%;
}
</style>