
<template>
    <div class="casebtn">
        <img class="titimg" :src="'https://www.yishechina.cn/attachs/'+Img" alt="">
        <div class="person">
            <div class="p_left">
                <p>{{title}}</p>
                <span>{{sub_title}}</span>
            </div>
            <div class="p_right">
                <img class="r_img" :src="'https://www.yishechina.cn/attachs/'+p_img" alt="">
            </div>
           
        </div>
         <div class="detail">
            <div class="speak">{{desidetail}}</div>
        </div>
        <div class="allimg">
            <span v-for="imgA in allimg">
                <img v-lazy="'https://www.yishechina.cn/attachs/'+imgA.photo" alt="">
            </span>
            
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
import { Lazyload} from 'vant';

export default {
    name:'casebtn',
    data(){
        return{
            id : this.$route.query.id,
            contents:'',
            Img:'',
            p_img:'',
            title:'',
            sub_title:'',
            desidetail:'',
            allimg:[]
        }
    },
    created(){
        this.c_id()
    },
    methods:{
        c_id(){
            axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/case_detail/id/" + this.id}).then(res=>{
                console.log(res)
                this.contents = res.data.intro;
                this.Img = res.data.photo;
                this.p_img = res.data.face;
                this.title = res.data.title;
                this.sub_title = res.data.fengge;
                this.desidetail = res.data.intro;
                this.allimg = res.data.imgs;
                console.log(this.contents)
            })
        }
    }
}
</script>

<style>
.casebtn {
width: 100%;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 background: white;
 overflow-x: hidden;

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
