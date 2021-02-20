<template>
  <v-app>
     <v-container>
       <h1>Today's Event</h1>
       <CardManage :datain="dataIn[0]" />
     </v-container>
     <v-container class="d-flex">
         <h1>Upcoming Event</h1>
          <v-spacer></v-spacer>
         <v-btn color="primary">add Event</v-btn>
     </v-container>
        <div class="scroll">
         <div v-for="item in dataIn" :key="item.id" class="item"><CardManage :datain="item" /></div>
        </div>

        <v-container>
          <h3>Feb 2020</h3>
            <v-col cols="4"><CardManage :datain="dataIn[0]" /></v-col>
        </v-container>
  </v-app>
</template>

<script>
    import CardManage from '../components/CardManage.vue';
export default {
  name:'manage',
  data() {
      return {
          dataIn:[
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
      CardManage
  }
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
     margin-left: 100px;
   }
</style>