<template>
  <div id="app">
    <tab></tab>
   	<div class="main">
      <transition name="fade">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="fade">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
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
  position: relative;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.main {
  position: absolute;
  width: 100%;
	height: 100%;
  padding-bottom: 80px;
}
.navs {
  color: #ffffff
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
