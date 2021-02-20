<template>
  <div>
      <v-card>
          <v-card-title>{{dataCW.CW_title}}</v-card-title>
          <v-row class="mt-1 pa-3">
              <v-col v-if="checkAddr()" cols="12" sm="4"><v-icon>mdi-redhat</v-icon>{{dataCW.CW_Address}}</v-col>
              <v-col v-if="checkLoca()" cols="12" sm="4"><v-icon>mdi-crosshairs-gps</v-icon>{{dataCW.CW_location}}</v-col>
              <v-spacer></v-spacer>
              <v-col v-if="checkDt()" cols="12" sm="4"><v-icon>mdi-calendar-month-outline</v-icon>{{dataCW.CW_Datetime}}</v-col>
          </v-row>
      </v-card>
  </div>
</template>

<script>
export default {
  name:'CardWidth',
  data() {
      return {
      }
  },
  props:{
      dataCW:Array
  },
  methods: {
      checkAddr(){if (this.dataCW.CW_Address.trim() === '') {return false} else {return true}},
      checkLoca(){if (this.dataCW.CW_location.trim() === '') {return false} else {return true}},
      checkDt(){if (this.dataCW.CW_Datetime.trim() === '') {return false} else {return true}}
  },
}
</script>

<style>

</style>