<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {query,mock,upload} from './api/interface'
export default {
  name: 'App',
  data(){
     return {
       a:1
     }
  },
  mounted(){
   query({subject_id:27622447}).then(res=>{
     console.log(res)
   });

  mock({ type:'movie',sort:'recommend',page_limit:20,page_start:0,tag:'热门'}).then(res=>{
     console.log(res)
   });
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
