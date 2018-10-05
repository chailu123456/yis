<template>
    <div class="designer">
        <back></back>
        <div class="bgimg">
            <img src="../assets/img/bgs.png" alt="">
            <div class="persons">
                <img :src="'https://www.yishechina.cn/attachs/'+face" alt="">
                <p>{{name}}</p>
            </div>
        </div>
        <div class="cont">
            <van-tabs v-model="active">
                <van-tab title="标签 1">
                    <ul class="contOne">
                        <li>从业年限：{{year}}</li>    
                        <li>设计机构{{opati}}</li>    
                        <li>擅长空间{{like}}</li>    
                        <li v-html="about"></li>    
                    </ul>
                </van-tab>
                <van-tab title="标签 2">
                    <ul class="contTwo">
                        <li v-for="item in collect" @click="colct(item.case_id)">
                            <img :src="'https://www.yishechina.cn/attachs/'+item.photo" alt="">
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </van-tab>
           
            </van-tabs>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import back from '@/components/back';
import { Header,Lazyload,Tab, Tabs} from 'vant';
export default {
    name:'designer',
    data(){
        return{
            id : this.$route.query.id,
            active: 0,
            year:'',
            like:'',
            opati:'',
            about:'',
            face:'',
            collect:[],
            name:'',
          
        }
    },
    created(){
        this.desi_int()
        this.designer()
    },
    components:{
        back
    },
    methods:{
        desi_int(){
             axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/designer_detail?id=" + this.id}).then(res=>{
                console.log(res)
                this.year = res.data.year;
                this.opati = res.data.company;
                this.like = res.data.slogan;
                this.face = res.data.face;
                this.about = res.data.about;
                this.name = res.data.name;
             
            })
        },
        designer(){
             axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/designer_case?id=" + this.id}).then(res=>{
                console.log(res);
                this.collect = res.data;

            })
        },
        onClickLeft() {
           this.$router.back(-1)
        },
        colct(id){
            this.$router.push({
                path:'casebtn',
                query:{
                    id :id
                }
            })
            console.log(id)
        }
    }
}
</script>

<style scoped>
.designer {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    overflow-x: hidden;
    text-align:left;
}
.head .van-nav-bar{
    height: 50px;
    background: #63cca3;
    color: #fff;
}
.bgimg {
    width: 100%;
}
.bgimg img {
    width: 100%;
}
.persons {
    position: absolute;
    top: 14%;
    left: 30%;
    text-align: center;
}
.persons img {
    width: 40%;
    border-radius: 50%;
}
.van-tab--active {
    color: #63cca3;
}
.van-tab {
    color: #000;
}
.van-tabs__line {
    color: #63cca3;
}
.contOne {
    padding: 4%;
}
.contOne li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}
.contTwo {
    padding: 4%;
}
.contTwo li{
    width: 100%;
    padding: 2% 0;
}
.contTwo li img{
    width: 100%;
}

</style>
