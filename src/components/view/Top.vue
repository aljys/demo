<template>
    <div>
        <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"> 
         <ul>
            <li v-for="(item,index) in list" :key="index"><a><img :src="item.cover"></a></li>
        </ul>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <div class="swiper-scrollbar"></div>
</div>

    </div>
</template>
<script >
import Vue from 'vue'
import {mock} from '@/api/interface.js'

import Swiper from "swiper"
export default ({
    name:'Header',
    data(){
        return {
              list:[]
        }
    },
    mounted(){
    mock({ type:'movie',sort:'recommend',page_limit:20,page_start:0,tag:'热门'}).then(res=>{
     this.list=JSON.parse(res).subjects.slice(0,5);
   });
   
  var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    }
})
</script>

<style  scoped>
@import '../../assets/css/swiper.css';
li{
list-style: none;
width: 100%;
}
img{
display: block;

float: left;
}
</style>
