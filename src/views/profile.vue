<template>
  <v-app>
    <v-img
         src="../assets/yy.jpg"
         height="40vh"
         width="100%"
         elevation="3"
        ></v-img>
      
      <v-card>
          <v-container>
            <v-row no-gutters>
              <v-col class="relati" cols="12" sm="6">
                <v-avatar size="150" style="box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1); border:2px solid #fff;" class="profile_pic">
                  <v-img
                  src="../assets/rose.png"
                 alt="rose"
                 ></v-img>
                </v-avatar>
                <h2 light>Roseanne Park (Rose)</h2>
                <h3 light>General Manager, ABC Company Co,Ltd</h3>
                <span><v-icon>mdi-linkedin</v-icon>Roseanne park<v-icon>mdi-email</v-icon>Roseblink@usealumni.la</span>
              </v-col>
              <v-col cols="12" md="6" class="d-flex flex-column-reverse flex-md-column align-end">
                <v-col cols="12" md="6" class="d-flex flex-column-reverse flex-md-column align-end">
                  <v-btn
                  color="primary"
                  outlined
                  cols="4"
                ><v-icon>mdi-account-edit</v-icon> Edit Profile
                </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex flex-column align-start align-md-end">
                  <p ><v-icon>mdi-cake</v-icon>27 march 2020</p>
                  <p ><v-icon>mdi-crosshairs-gps</v-icon>Nongbone, xaysettha, veintaine capital</p>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        
        <v-container class="mt-12">
          <v-row>
            <v-col cols="12" sm="8">
               <v-col class="d-flex">
                 <h1>Program</h1>
                 <v-spacer></v-spacer>
                 <v-btn color="primary" class="d-none d-sm-flex" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Program</v-btn>
               </v-col>
               <v-col v-for="item in dataCardWidth" :key="item.id"><CardWidth :dataCW="item" /></v-col>
                <v-container><v-btn color="primary" width="100%" class="d-flex d-sm-none" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Program</v-btn></v-container>


               <v-col class="d-flex mt-10">
                 <h1>Career & Experience</h1>
                 <v-spacer></v-spacer>
                 <v-btn color="primary" class="d-none d-sm-flex" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Experience</v-btn>
               </v-col>
               <v-col>
                 <CardWidth :dataCW="dataCardWidth[1]" />
               </v-col>
               <v-container><v-btn color="primary" width="100%" class="d-flex d-sm-none" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Experience</v-btn></v-container>


               <v-col class="d-flex mt-10">
                 <h1>Education</h1>
                 <v-spacer></v-spacer>
                 <v-btn color="primary" class="d-none d-sm-flex" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Educate</v-btn>
               </v-col>
               <v-col>
                 <CardWidth :dataCW="dataCardWidth[1]" />
               </v-col>
               <v-container><v-btn color="primary" width="100%" class="d-flex d-sm-none" outlined><v-icon>mdi-plus-circle-outline</v-icon> Add Educate</v-btn></v-container>
             </v-col>


            <v-col cols="12" sm="4">
               <v-col>
                 <h1 class="text-center">Attending Even</h1>
                 <Cardgall :datacard="dataCard[1]"/>
                 <div class="d-flex justify-end"><a href="">See all</a></div>
               </v-col>

               <v-col class="mt-12">
                 <h1>Project</h1>
                 <Cardgall :datacard="dataCard[1]"/>
               </v-col>

               <v-col class="mt-12">
                 <h1>Article</h1>
                 <Cardgall :datacard="dataCard[1]"/>
               </v-col>
            </v-col>
          </v-row>
        </v-container>
  </v-app>
</template>

<script>
import CardWidth from '../components/CardWidth.vue'
import Cardgall from '../components/Cardgall.vue'
export default {
  name:'profile',
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
       picture:require('../assets/yy.jpg'),
       subtitle:'sat 20 june 2021',
       title:'Evironmental projection Atc',
       location:'Crow plaza Vientiane'
     },
     ],
     dataCardWidth:[
       {
         id:1,
         CW_title:'Global Undergraduate Exchange',
         CW_Address:'Old Dominion University',
         CW_location:'Norfolk ,Vaginia,USA',
         CW_Datetime:'20 Aug 2018-12 Dec 2018'
       },{
         id:2,
         CW_title:'YSEALI Seeds for the future',
         CW_Address:'',
         CW_location:'Norfolk ,Vaginia,USA',
         CW_Datetime:'20 Aug 2018-12 Dec 2018'
       },{
         id:3,
         CW_title:'YSEALI Seeds for the future',
         CW_Address:'',
         CW_location:'Norfolk ,Vaginia,USA',
         CW_Datetime:'20 Aug 2018-12 Dec 2018'
       },
     ]
    }
  },
  components:{
    Cardgall,
    CardWidth
  }
}
</script>

<style scoped>
  .relati{
    position: relative;
    padding-top:85px;
  }
  .profile_pic{
    position: absolute;
    top: -75px;
    left: 10px;
  }
</style>
