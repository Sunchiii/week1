<template>
  <v-app>
     <app_bar/>
     <v-container>
     <h1 class="mt-12 ml-5">Attending Event</h1>
     <Cardgall :datacard="dataCard[0]" />
     </v-container>
     <v-container class="mt-12">
       <h1 class="ml-5">Upcoming Event</h1>
     </v-container>
     <v-container>
        <div class="scroll">
         <div v-for="item in dataCard" :key="item.id" class="item"><Cardgall :datacard="item" /></div>
        </div>
     </v-container> 
     <v-container class="mt-12">
       <h1 class="mt-12">Fab 2020</h1>
      <div class="div_bottom">
        <div class="b_item">
         <Cardgall :datacard="dataCard[0]" />
        </div>
        <div class="b_item">
       <Cardgall :datacard="dataCard[1]" />
        </div>
      </div>
     </v-container>
  </v-app>
</template>

<script>
import app_bar from '../components/app_bar.vue'
import Cardgall from '../components/Cardgall.vue'
export default {
 name:'gallery',
 data() {
   return {
     dataCard:[
        {
        id:1,
       picture:require('../assets/yy.jpg'),
       subtitle:'sun 21 june 2021',
       title:'US Alumni annaul Gathering',
       location:'Crow plaza Vientiane'
       },
       {
         id:2,
       picture:require('../assets/zz.png'),
       subtitle:'sat 20 june 2021',
       title:'Evironmental projection Atc',
       location:'Crow plaza Vientiane'
     },
     ]
   }
 },
 components:{
   Cardgall,
   app_bar
 },
}
</script>

<style scoped>
   .scroll{
     overflow: auto;
     white-space: nowrap;
     padding-bottom: 10px;
     width: 100%;
   }
   .scroll::-webkit-scrollbar{
     display: none;
   }
   .item{
     display: inline-block;
     margin-right: 100px;
   }
   .div_bottom{
     display: flex;
     flex-direction: row;
   }
   .b_item{
     display: inline;
     margin-right: 100px;
   }

@media screen and (max-width: 600px) {
   .div_bottom{
     flex-direction:column;
   }
   .b_item{
     margin-right: 0;
     margin-bottom: 20px;
   }
}
</style>