<template>
<div>
    <p>9009</p>
    <p class="select-box" @click="changeStatus"></p>
 
    <ul class="select-options" v-show="selectData.selectStatus">
        <li></li>
        <li class="select-option-item" @click="EmitchangeOption(index)" v-for="(item,index) in selectData.selectOptions" :class="{'select-option-active':selectData.defaultIndex===index}">{{ selectData.selectOptions[index].context }}</li>
        <li><p class="arrow-top"></p></li>
    </ul>   
    </transition>
</div>

</template>
<script>
export default{
    name: 'slide',
    props:{ // 子组件接收父组件传过来的值，使用props
        selectData: {
            type: Object //传过来的必须是对象
        }
    },
    methods:{
        EmitchangeOption(index){
            this.$emit('changeOption',index); 
            //changeOption为父组件中绑定的属性名字，一定要一致
            //改变选择的索引之后,传递个父组件
            //记住，子组件传数据给父组件使用 $emit
        },
        changeStatus(){
            this.selectData.selectStatus = !this.selectData.selectStatus
            //取反，来改变当前this.selectData的值
        }
    }
}
</script>
<style scoped>
.select-box{
    position: relative;
    max-width: 250px;
    line-height: 35px;
    margin: 50px auto;
}
.select-title{
    position: relative;
    padding: 0 30px 0 10px;
    border: 1px solid #d8dce5;
    border-radius: 5px;
    transition-duration: 300ms;
    cursor: pointer;
}
.select-title:after{
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-top: 6px solid #d8dce5;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    right: 9px;
    top: 0;
    bottom: 0;
    margin: auto;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}
.select-title-active{
    border-color: #409eff;
}
.select-title-active:after{
    transform: rotate(-180deg);
    border-top-color: #409eff;
}
.select-options{
    position: absolute;
    padding:10px 0;
    top: 45px;
    border:1px solid #d8dce5;
    width: 100%;
    border-radius: 5px;
}
.select-option-item{
    padding:0 10px;
    cursor: pointer;
    transition-duration: 300ms;
}
.select-option-item:hover,.select-option-active{
    background: #f1f1f1;
    color: #409eff;
}
.arrow-top{
    position: absolute;
    height: 0;
    width: 0;
    top: -7px;
    border-bottom: 7px solid #d8dce5;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 99;
}
.arrow-top:after{
    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    border-bottom: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    left: -6px;
    top: 1px;
    z-index: 99;
}
 
.slide-down-enter-active,.slide-down-leave{
    transition: all .3s ease-in-out;
    transform-origin:0 top;
    transform: scaleY(1);
}
.slide-down-enter{
    transform: scaleY(0);
}
.slide-down-leave-active{
    transition: all .3s ease-in-out;
    transform-origin:0 top;
    transform: scaleY(0);
}
</style>
