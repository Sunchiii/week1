<template>
  <v-app>
     <app_bar/>
    <v-main>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  import app_bar from './components/app_bar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    app_bar,
  },

  // data: () => ({
  //   //
    
  // }),
  data() {
    return {
    }
  },
};
</script>
