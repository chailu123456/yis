<template>
    <div class="appert">
        <navs>预约</navs>
        <div class="list">
            <van-list v-model="loading" loading-text='加载中...' :finished="finished"  @load="onLoad">
                <p v-for="item in list" :key="item" >{{item}}</p>
               
            </van-list>
        </div>
    </div>
</template>
<script>
import navs from '@/components/navs'
import { List } from 'vant';
export default {
    name:'appert',
    data(){
        return{
            msg:'预约',
            list: [],
            loading: false,
            finished: false,
            a:1
        }
    },
    components:{
        navs
    },
    methods: {
        onLoad() {
        // 异步更新数据
            
            console.log(this.a++)
            setTimeout(() => {
                for (let i = 0; i < 30; i++) {
                    
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                // if (this.list.length >= 40) {
                // this.finished = true;
                // }
            }, 500);
        }
    }
}
</script>
<style scoped>
.appert {
    width: 100%;
    height: 100%;
}
</style>
