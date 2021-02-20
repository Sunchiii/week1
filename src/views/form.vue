<template>
  <v-app>
    <v-container class="mt-12">
      <v-card class="pa-10">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" sm="12">
                     <v-text-field 
                     v-model="event_title" 
                     :rules="Stringrules" 
                     label="Event Title" 
                     :counter="10" 
                     outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                    v-model="date"
                    :rules="Stringrules"
                    label="Date"
                    outlined
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                  :rules="Stringrules"
                  label="Time"
                  outlined
                  ></v-text-field>
                 </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                  :rules="stringrules"
                  label="Location name"
                  outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                   elevation="4"
                   :rules="stringrules"
                   label="Location"
                   outlined
                  ></v-text-field>
                </v-col>
                <v-col height="300" cols="12">
                 <GoogleMap/>
                </v-col>
                <v-col cols="12">
                  <vue-editor></vue-editor>
                </v-col>
                <v-col cols="12" class="d-flex justify-end">
                     
                   <v-btn outlined class="mr-5">close</v-btn>
                   <v-btn color="primary">Save</v-btn>
                </v-col>
            </v-row>
        </v-form>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
 import GoogleMap from '../components/GoogleMap.vue';
export default {
   name:"form",
   components:{
      GoogleMap,
   },
   data() {
       return {
           valid:false,
           event_title:"",
           date:"",
           firstname:"",
           lastname:"",
           Stringrules:[
             v => !!v || 'please Required',
             v => v.length <= 10 || 'must be less then 10 strings',
           ],
       }
   }
   
}

 </script>

<style lang="css" scoped>
   @import "~vue2-editor/dist/vue2-editor.css";
</style>