<template >
     <v-app id="scroll-target">
        <div><v-img src="../assets/yy.jpg" width="100%" position="center" height="50vh"></v-img></div>
        <v-card id="header">
            {{begin}}
            <v-container>
                <v-row class="d-flex align-center" v-scroll:#scroll-target="onscroll">
                    <v-col sm="6" cols="12">
                        <h2>US Alumni thanksgiving 2020</h2>
                        <v-card-text>Cloud Native Bangkok 2020: The beginning of cloud native eta</v-card-text>
                    </v-col>
                    <v-col sm="6" cols="12" class="d-flex justify-end">
                        <v-btn width="30%" color="success" dark><v-icon>mdi-check</v-icon>Going</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="8">
                        <h2>Detail</h2>
                        <p>Cloud Native Bangkok 2020: The beginning of cloud native era</p>
                        <p>An evet that brins developers who are passionate about Cloud Native technology Cloud Native experiences and interesing ideas</p>
                        <v-card-text>Agenda: <br>
                        1:00 - 1:30: Registion <br>
                        1:45 - 1:50: Opening speech <br>
                        2:00 - 2:40: No more painful k8s YAML with Grafara Tanka <br>
                        By Nattapon Pondongnok (jab), Full Stack Software Engineer @ Metrabyle Cloud </v-card-text>
                        <v-card-text>2:50 - 3:30: GitOps; nextk Generation of infrastructure as Code <br> 
                        By Jirayut Nimsaeng (Dear), CEO @ Opsta</v-card-text>
                        <v-card-text>3:30 - 4:00: Simple Storing Helm Kubernetes Packages with Github <br> 
                        Container Registry <br>
                        By sirinat Paphatsirinnuti (oam), Con-founder @ KubrOps Skills</v-card-text>
                        <v-card-text>4:00 onward; After-Party(Free pizza + Soft Dring)</v-card-text>
                        <v-card-text>Location: <br>
                        Cons robotis Conpany Limited, Wiset Siri Biulding Room 303, next to Sanam pao <br>
                        BTS Station, exit 4 </v-card-text>
                        <v-card-text>Note</v-card-text>
                        <v-card-text>To complianch woth Meetup policy:</v-card-text>
                        <v-card-text>if you are unser yhe age of 12 and willing ti attent our, you must be <br>
                        accompannied by youe family.</v-card-text>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-col>
                          <v-card height="300">
                            <GoogleMap/>
                          </v-card> 
                        </v-col>
                    </v-col>
                    <v-col cols="12">
                        <div class="d-flex align-center justify-space-between">
                            <h1>Attendess</h1>
                            <a href="">See all</a>
                        </div>
                        <div class="wrpp">
                            <div class="chil">
                                <div>
                                    <v-card width="200" class="text-center pa-4 rounded-xl">
                                        <v-avatar size="100" class="rounded-circle mt-5 mb-5">
                                            <v-img src="../assets/rose.png"></v-img>
                                        </v-avatar>
                                        <h6>Rose blackping</h6>
                                        <p>YSEALI, UGRED <br> Humphray, Fulbright</p>
                                    </v-card>
                                </div>
                            </div>
                            <div class="chil">
                                <div>
                                    <v-card width="200" class="text-center pa-4 rounded-xl">
                                        <v-avatar size="100" class="rounded-circle mt-5 mb-5">
                                            <v-img src="../assets/rose.png"></v-img>
                                        </v-avatar>
                                        <h6>Rose blackping</h6>
                                        <p>YSEALI, UGRED <br> Humphray, Fulbright</p>
                                    </v-card>
                                </div>
                            </div>
                            <div class="chil">
                                <div>
                                    <v-card width="200" class="text-center pa-4 rounded-xl">
                                        <v-avatar size="100" class="rounded-circle mt-5 mb-5">
                                            <v-img src="../assets/rose.png"></v-img>
                                        </v-avatar>
                                        <h6>Rose blackping</h6>
                                        <p>YSEALI, UGRED <br> Humphray, Fulbright</p>
                                    </v-card>
                                </div>
                            </div>
                            <div class="chil">
                                <div>
                                    <v-card width="200" class="text-center pa-4 rounded-xl">
                                        <v-avatar size="100" class="rounded-circle mt-5 mb-5">
                                            <v-img src="../assets/rose.png"></v-img>
                                        </v-avatar>
                                        <h6>Rose blackping</h6>
                                        <p>YSEALI, UGRED <br> Humphray, Fulbright</p>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
         
     </v-app>
</template>

<script>
 import GoogleMap from '../components/GoogleMap.vue';

export default{
    name:"article",
    data() {
        return {
            offsetTo:0,
        }
    },
       components:{
        GoogleMap,
    }
    // methods: {
    //     onscroll(){
    //     var header = document.getElementById("myHeader");
    //     var sticky = header.offsetTop;

    //     if (window.pageYOffset > sticky) {
    //         header.classList.add("sticky");
    //     } 
    //     else {
    //         header.classList.remove("sticky");
    //      }
    //   }
    // },
    
}
</script>

<style scoped>
   .sticky{
       position: fixed;
       top: 0;
   }
   .wrpp{
     overflow: auto;
     white-space: nowrap;

   }
   .wrpp::-webkit-scrollbar {
  display: none;
   }
   .chil{
     display: inline-block;
     margin: 0 10px;
   }
</style>
