<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {query} from './api/interface'
export default {
  name: 'App',
  data(){
     return {
       a:1
     }
  },
  mounted(){
    // console.log(install)
   query({start:0}).then(res=>{
     console.log(res)
   })
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
