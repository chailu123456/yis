<template>
  <div id="app">
    <tab></tab>
   	<div class="main">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.main {
	height: 100%;
  padding-bottom: 80px;
}
.navs {
  color: #ffffff
}
</style>
