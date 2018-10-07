<template>
    <div class="appert">
        <navs>预约</navs>
        <ul>
            <li v-for="book in books">
                <img class="books" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651616864,2530638681&fm=26&gp=0.jpg" alt="">
                <p>
                     <span>名称：{{book.goodsName}}</span>
                    <span>价格：{{book.price}}</span>
                    <button @click="addcar(book)">添加</button>
                </p>
               
            </li>
        </ul>
       
    </div>
</template>
<script>
import navs from '@/components/navs'
import axios from 'axios'
import * as Types from '../store/types.js'
export default {
    name:'appert',
    data(){
        return{
            books:[]
        }
    },
    created(){
        axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods').then(res=>{
            console.log(res);
            this.books = res.data;
        
        }).catch(error=>{
            console.log(error)
        })
   
    },
    components:{
        navs
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
