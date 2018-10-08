<template>
    <div class="appert">
        <navs>预约</navs>
        <load v-if="show"></load>
        <template v-else>
        <ul>
            <li v-for="book in books">
                <img class="books" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651616864,2530638681&fm=26&gp=0.jpg" alt="">
                <p>
                     <span>名称：{{book.goodsName}}</span>
                    <span>价格：{{book.price}}</span></br>
                    <button @click="addcar(book)">添加</button>
                </p>
               
            </li>
        </ul>
        </template>
    </div>
</template>
<script>
import navs from '@/components/navs'
import axios from 'axios'
import load from '@/components/load'
import * as Types from '../store/types.js'
export default {
    name:'appert',
    data(){
        return{
            books:[],
            show:true
        }
    },
    created(){
        axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods').then(res=>{
            console.log(res);
            this.books = res.data;
             this.show = false;
        }).catch(error=>{
            console.log(error)
        })
   
    },
    components:{
        navs,
        load
    },
    methods: {
       addcar(book){
           this.$store.commit(Types.ADD_CART,book)
       }


    }
}
</script>
<style scoped>
.appert {
    width: 100%;
    height: 100%;
}
ul li {
    width: 100%;
    height: 150px;
    margin: 16px 0;
}
.books {
    width: 40%;
    float: left;
}
ul li p {
    width: 60%;
    float: left;
    margin-top: 10%;
}
</style>
