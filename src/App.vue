<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MobilePage v-if="!isPc" />
    <PCPage v-if="isPc" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MobilePage from './components/mobile/MobilePage';
import PCPage from './components/pc/PCPage';

export default {
  name: 'app',
  components: {
    // HelloWorld
    MobilePage,
    PCPage
  },
  data(){
    let isMoblie = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    return {
      isPc: !isMoblie
    }
  },
  created(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
