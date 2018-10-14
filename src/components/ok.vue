<template>
    <div>
        <button>确认选择</button>
        <ul>
            <li :style="{height:width}" v-for="item in data">{{item.text}}</li>
        </ul>
        <p class="ww">{{width}}</p>
        
    </div>
</template>

<script>
export default {
    name:'ok',
     props: {
        data:Array,
        width:String
    },
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
    p.ww {
        color: red;
    }
    ul li {
        border: 1px solid #ccc;
    }
</style>
