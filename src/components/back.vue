<template>
    <div class="head">
        <van-nav-bar title="" left-text="返回" left-arrow  @click-left="onClickLeft"/>             
    </div>
</template>

<script>
import {List,NavBar,Lazyload } from 'vant';
export default {
    name:'back',
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
           this.$router.back(-1)
        }
    }
}
</script>

<style scoped>
.head .van-nav-bar{
    height: 50px;
    background: #63cca3;
    color: #fff !important;
}

</style>
