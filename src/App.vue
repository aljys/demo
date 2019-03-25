<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <Top/>
  </div>
</template>

<script>
import  Top from './components/view/Top'
import {query,mock,upload} from './api/interface'
export default {
  name: 'App',
  components:{
      Top
  },
  data(){
     return {
       a:1
     }
  },
  methods:{
      
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
