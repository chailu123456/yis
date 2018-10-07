<template>
    <div class="decolist">
        <back></back>
        <load v-if="show"></load>
        <div class="menu">
            <van-collapse v-model="activeNames" accordion>
                <van-collapse-item :title="ads" name="1">
                    <div class="upslide">
                        <span v-for="(itemStyle,index) in styles" :id="stylesIds[index]" @click="sId(stylesIds[index],itemStyle)" class="f_style">
                            {{itemStyle}}
                        </span>
                    </div>
                </van-collapse-item>
                <van-collapse-item :title="frd" name="2">
                    <div class="upslide">
                        <span v-for="(itemStyle,index) in homestyles" :id="homestylesIds[index]" @click="homeId(homestylesIds[index],itemStyle)" class="f_style">
                            {{itemStyle}}
                        </span>
                    </div>
                </van-collapse-item>
             
            </van-collapse>
        </div>
       <div class="allimg">
            <!-- <span v-for="imgA in allimg">
                <img v-lazy="'https://www.yishechina.cn/attachs/'+imgA.photo" alt="">
            </span> -->
            <van-list v-model="loading" loading-text='加载中...' :finished="finished"  @load="onLoad">
                <span v-for="imgA in allimg" @click="godetail(imgA.case_id)">
                    <img v-lazy="'https://www.yishechina.cn/attachs/'+imgA.photo" alt="">
                </span>
            </van-list>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
import back from '@/components/back';
import {List,NavBar,Lazyload, Collapse, CollapseItem } from 'vant';
import api from '../api/index.js'
import load from '@/components/load'
export default {
    name:'decorList', 
    data(){
        return{
            txtIdone:4,
            txtIdtwo:5,
            allimg:[],
            list: [],
            loading: false,
            finished: false,
            a:0,
             show:true,
            styles:[],
            stylesIds:[],
            homestyles:[],
            homestylesIds:[],
            ads:'装饰风格',
            frd:'户型面板',
            activeNames: ['0']
        }
    },
    created(){
        this.decote()
        this.deco_style()
      
    },
    components:{
        back,
        load
    },
    mounted () {
        // window.addEventListener('scroll', this.handleScroll,true)
    },
    methods:{
        async deco_style(){
            var getstyle =await this.$http.d_style()
            console.log(getstyle)
            this.styles = getstyle[0].attr_value;
            this.stylesIds = getstyle[0].attr_value_id;
            this.homestyles = getstyle[1].attr_value;
            this.homestylesIds = getstyle[1].attr_value_id;
        },
        sId(id,val){
           this.ads = val;
           this.txtIdone = id;
           this.activeNames= ['0']
           this.decote()
        },
        homeId(id,val){
            this.frd = val;
            this.txtIdtwo = id;
            this.activeNames= ['0']
            this.decote()
        },
        handleScroll () {
            this.loading = true;
            var scrollTop = document.getElementsByClassName("decolist")[0].scrollTop;
            // console.log(scrollTop)
            // console.log(document.documentElement.clientHeight);
            // console.log(document.body.scrollHeight)  
            var o = document.getElementsByClassName("allimg")[0];
            var h = o.offsetHeight; //高度
            if(scrollTop+document.documentElement.clientHeight-h>=200){
                // this.allimg=this.lists;
                this.a++;
                console.log(this.a)
                axios({
                    url:"https://www.yishechina.cn/wapp/index.php/Home/Index/sort_case/id/"+this.txtIdone+','+this.txtIdtwo+'/num/' + this.a}).then(res=>{
                        for (let i in res.data) {
                            this.allimg.push(res.data[i]); //属性
                        }
                        this.loading = false;
                })
            }
            // console.log(h)
        },  
        godetail(id){
            console.log(id)
            this.$router.push({
                path:'casebtn',
                query:{
                    id :id
                }
            })
        },
        onLoad(){
            this.a++;
            console.log(this.a)
            axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/sort_case/id/"+this.txtIdone+','+this.txtIdtwo+'/num/' + this.a})
                .then(res=>{
                    for (let i in res.data) {
                        this.allimg.push(res.data[i]); //属性
                    }
                    this.loading = false;
            })
        },
        async decote(){
             this.show = true;
            try{ 
                let parmas  = this.txtIdone+','+this.txtIdtwo+'/num/' + this.a;
                let data = await this.$http.de_examp(parmas);
                console.log(data)
                var arr1 = []
                for (let i in data) {
                    arr1.push(data[i]); //属性
                }
                this.loading = false;
                this.allimg = arr1;
                 this.show = false;
            }catch(e){
                console.log(e)
            }
   
        },
        onClickRight() {
           consoel.log(9)
        }
        
    }
}
</script>

<style scoped>
.decolist {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    overflow-x: hidden;
    text-align:left;
     z-index: 17;
}
.allimg {  
    margin-top: 50px;
}

.van-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width:100%;
}
.allimg span {
    width: 44%;
    margin-top: 6px;
}
.van-list span img {
    width: 100%;
    height: 120px;
}
.head .van-nav-bar{
    height: 50px;
    background: #63cca3;
    color: #fff;
}
.van-nav-bar__arrow+.van-nav-bar__text {
    color: #fff !important;
}
.van-nav-bar__left .van-nav-bar .van-icon {
    color: #fff !important;
}
.menu {
    width: 100%;
    position: absolute;
    top: 50px;
    height: 50px;
    z-index: 98;
}
.menu .van-hairline--top-bottom {
    width: 100%;
    height: 50px;
}
.van-collapse-item__wrapper {
    overflow-y: hidden !important;
}
.van-collapse-item {
    width: 50%;
    float: left;
}
.upslide {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.upslide span {
    width: 44%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #63cca3;
    border-radius: 4%;
    font-size: 14px;
    display: inline-block;
    margin-top: 8px;
}
</style>
