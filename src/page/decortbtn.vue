
<template>
    <div class="decortbtn">
        <div class="box">
             <h4 class="title">{{title}}</h4>
            <p class="where">来源：时间{{dateline}}浏览：{{look}}</p>
            <p>{{sub_title}}</p>
            <div class="cont">
                <p v-html="contents"></p>
            </div>
            
        </div>
       
    </div>    
</template>

<script>
import axios from 'axios';
import { Lazyload} from 'vant';

export default {
    name:'decortbtn',
    data(){
        return{
            id : this.$route.query.id,
            contents:'',
            dateline:'',
            title:'',
            sub_title:'',
            desidetail:'',
            look:''
        }
    },
    created(){
        this.c_id()
    },
    methods:{
        c_id(){
            axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/gl_det/id/" + this.id}).then(res=>{
                console.log(res)
                this.contents = res.data[0].content;
                this.look = res.data[0].views;
                this.title = res.data[0].title;
                this.sub_title = res.data[0].desc;
                 this.dateline=this.$options.methods.toDate(res.data[0].dateline)
            })
        },
        //时间戳转换时间  
        toDate: function(number){  
            console.log(9090)
            var n= number * 1000;  
            var date = new Date(n);  
            var Y = date.getFullYear() + '/';  
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';  
            var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();  
            return(Y+M + D)
        },
      
    }
}
</script>

<style>
.decortbtn {
width: 100%;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 background: white;
 overflow-x: hidden;
text-align:left;
}
.box {
    padding: 4%;
}
.title {
    padding: 2% 0;
    color: black;
}
.where {
    font-size: 12px;
    color: #999;
    padding: 2% 0;
}
.cont p {
    width: 100%;
}
.cont p img {
    width: 100%;
}
.titimg {
    width: 100%;
}
.person {
    width: 100%;
    height: 70px;
    margin-top: 14px;
    overflow: hidden;
}
.p_left {
    width: 64%;
    float: left;
    text-align: left;
    padding-left: 6%;
}
.p_left p{
    font-size: 16px;
    font-weight: 700;
} 
.p_left span{
    font-size: 12px;
    margin-top: 6px;
    display: block;
} 
.p_right {
    width: 30%;
    float: right;
}
.p_right img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}
.detail {
    width: 92%;
    padding: 2% 4%;
    text-align: left;
    font-size: 14px;
}
.allimg {
    padding: 2% 4%;
    width: 92%;
}
.allimg span {
    width: 100%;
}
.allimg span img{
    width: 100%;
}
</style>
