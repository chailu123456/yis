<template>
    <div class="login">
        <van-cell-group>
            <van-field v-model="username" label="用户名"  placeholder="请输入用户名" />
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <span v-if="hide" class="tips">请输入完整信息</span>
        <button class="go" @click="go">登  陆</button>
    </div>
</template>

<script>
import { Field } from 'vant';
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            hide:false
        }
    },
    methods:{
        go(){
            if(this.username==''&& this.password==''){
                this.hide = true
                
            }else{
                let sty = true;
                sessionStorage.setItem('mydata',JSON.stringify(sty))
                this.$router.push({path:'home'})
                console.log(this.password)
                console.log(this.defines.name)
            }
            
        }
        
    }
}
</script>

<style scoped>
.login {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 20%;
    background: #fff;
}
.van-hairline--top-bottom::after {
    border: none;
}
.van-cell {
    padding: 30px 15px;
}
.go {
    width: 70%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: none;
    background: #63cca3;
    color: #fff;
    border-radius: 20px;
    margin-top: 10%;
}
.tips {
    color: red;
}
</style>
