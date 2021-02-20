<template>
  <div>
         <v-card max-width="350" class="rounded-xl pb-5">
                    <v-img height="15vh" :src="datain.picture"></v-img>
                 <div>
                     <v-card-subtitle>{{datain.subtitle}}</v-card-subtitle>
                     <h3 class="ml-5">{{datain.title}}</h3>
                     <v-card-text>{{datain.location}}</v-card-text>
                     <div class="d-flex justify-end" style="width:90%;"><v-btn class="mr-2" color="primary" outlined>Edit</v-btn><v-btn color="primary">Manage</v-btn></div>
                 </div>
         </v-card>
      </div>
</template>

<script>
export default {
  name:'CardManage',
  data() {
      return {
          
      }
  },
  props:{
      datain:Array
  }
}
</script>

<style>

</style>