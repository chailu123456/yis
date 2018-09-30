<template>
    <div class="decolist">
       <div class="allimg">
            <!-- <span v-for="imgA in allimg">
                <img v-lazy="'https://www.yishechina.cn/attachs/'+imgA.photo" alt="">
            </span> -->
            <van-list v-model="loading" loading-text='加载中...' :finished="finished"  @load="onLoad">
                <span v-for="imgA in allimg">
                    <img v-lazy="'https://www.yishechina.cn/attachs/'+imgA.photo" alt="">
                </span>
               
            </van-list>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Lazyload,List} from 'vant';

export default {
    name:'decorList',
    data(){
        return{
            txtIdone :4,
            txtIdtwo  :5,
            allimg:[],
            list: [],
            loading: false,
            finished: false,
            a:1
        }
    },
    created(){
        this.decote()
      
    },
    mounted () {
        // window.addEventListener('scroll', this.handleScroll,true)
    },
    methods:{
        handleScroll () {
            var scrollTop = document.getElementsByClassName("decolist")[0].scrollTop;
            // console.log(scrollTop)
            // console.log(document.documentElement.clientHeight);
            // console.log(document.body.scrollHeight)  
            var o = document.getElementsByClassName("allimg")[0];
            var h = o.offsetHeight; //高度
            if(scrollTop+document.documentElement.clientHeight>=h){
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
        decote(){
            axios({
                url:"https://www.yishechina.cn/wapp/index.php/Home/Index/sort_case/id/"+this.txtIdone+','+this.txtIdtwo}).then(res=>{
                console.log(res.data)
                var arr1 = []
                for (let i in res.data) {
                    arr1.push(res.data[i]); //属性
                    //arr.push(obj[i]); //值
                }
                this.allimg=arr1;
            })
        },
    }
}
</script>

<style scoped>
.decolist {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    overflow-x: hidden;
    text-align:left;
}
.allimg {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.allimg span {
    width: 44%;
    margin-top: 6px;
}
.allimg span img {
    width: 100%;
    height: 120px;
    
}
</style>
