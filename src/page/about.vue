<template>
    <div class="about">
         <navs>关于我们</navs>
          <!-- <button @click="$store.commit('add')">+</button>
          <p>{{$store.state.count}}-\\{{count}}</p>
          <button @click="reduce">-</button> -->

          <ul>
              <li v-for="l in carList">
                <img class="books" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651616864,2530638681&fm=26&gp=0.jpg" alt="">
                 <p>书名：{{l.goodsName}}</p> 
                 <p>数量：{{l.bookCount}}</p>
                 <p>小计：{{l.bookCount*l.price}}</p>
              </li>
              <li>共计{{count}}本</li>
          </ul>
    </div>
</template>
<script>
import navs from '@/components/navs'
// import store from '@/vuex/store'
// import { mapState,mapMutations,mapGetters } from 'vuex'

import {mapState,mapGetters} from 'vuex'
export default {
    name:'about',
    data(){
        return{
            msg:'关于我们'
        }
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
        navs
    },
    computed:{
        ...mapState(['carList']),
        ...mapGetters(['count'])
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