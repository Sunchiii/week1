<template>
        <div>
         <v-card max-width="350" class="rounded-xl pb-5">
                    <v-img height="15vh" :src="datacard.picture"></v-img>
                 <div>
                     <v-card-subtitle>{{datacard.subtitle}}</v-card-subtitle>
                     <h3 class="ml-5">{{datacard.title}}</h3>
                     <v-card-text>{{datacard.location}}</v-card-text>
                     <div class="d-flex justify-end" style="width:90%;"><v-btn color="primary">Detail</v-btn></div>
                 </div>
         </v-card>
      </div>
</template>

<script>
export default {
    name:'Card',
  data() {
      return {

      }
  },
  props:{
      datacard:Array
  }

}
</script>

<style>

</style>