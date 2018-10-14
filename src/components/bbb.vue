<template>
    <div class="bu">
        <p>9875</p>
        <ul>
            <li v-for="item in selectdata.selectOptions">{{item.context}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'bbb',
    props: { 
         selectdata: {
            type: Object //传过来的必须是对象
        }
    }
}
</script>

<style>

</style>
