<template>
  <v-app>
    <v-img 
    max-height="40vh"
    width="100%"
    src="../assets/yy.jpg"
    prominent
    elavation="3"
   ></v-img>

    <v-main>
     <v-container>
       <v-card
       style="margin-top:50px;border-radius:10px; padding:5% 5% 2% 5%"
       elevation="5"
       class="ff"
     >
         <div 
         class="text-center"
         >
         <h1>{{title[0]}}</h1>
         <h1>{{title[1]}}</h1>
       </div><br>
       <p
        style="margin:10px 0;"
       >Dear Tala</p><br>
       <v-container>
         <v-row >
            <p style="text-indent:30px;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores rerum eos incidunt, assumenda velit fugiat voluptatem eum quam a minus, esse accusamus maiores amet minima beatae iure at aliquam animi, reprehenderit cum repellendus consequuntur consectetur. Voluptatum corporis amet, assumenda explicabo cupiditate, dolore tempore quis laborum possimus reiciendis consequuntur voluptatem!</p>
            <v-row>

              <v-cols>
                <p>Contact <a href="">rachan@gmail.com</a> for further information.</p>
                <p>To reserve yor spot please kindly click RSVP and login with these credentials</p>
               <span>
               <p>Your lao US Alumni ID: <b>{{id}}</b>
               <br> Password: <b>{{psswd}}</b></p>
               </span>
              </v-cols>
                <v-spacer></v-spacer>
              <v-img
              src="../assets/duck.png"
              max-height="150"
              max-width="150"
             ></v-img>
                <v-spacer></v-spacer>
            </v-row>
            <p class="mt-8"><b>Importent*:</b> Do not share your Password with anyone and consider changing it after you logged in is highly recommened</p>
       </v-row>
       <v-spacer></v-spacer>
        <v-row class="justify-center">
          <v-col cols="6"><v-btn block color="primary" >RSVP Your Spot > </v-btn></v-col>
        </v-row>
       </v-container>
     </v-card>
     </v-container>
  </v-main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      title:["You are invited to join US Alumni Thanks Giving","@US Ambassadir House 2020"],
      id:"USLAO001",
      psswd:"AxAlso091",
    }
  },
}
</script>

<style scoped>
   .ff{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
   }
   .iitem{
     display: flex;
     justify-content: space-between;
     width: 80%;
   }
</style>
