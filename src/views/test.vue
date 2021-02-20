 
 <template>
  <v-app>

      
      <v-main>
        <v-container>

            <v-row no-gutters class="hidden-sm-and-up">
                <v-col color="blue" cols="6" md="4">
                    <v-btn block color="yellow lineten-2" outlined
                    >1</v-btn>
                </v-col>

                 <v-spacer></v-spacer>

                <v-col cols="6" md="4" 
                >
                    <v-btn block outlined color="yellow lineten-2"
                    >2</v-btn>
                </v-col>

                <v-col cols="12" md="4"
                >
                    <v-btn block outlined color="yellow lineten-2"
                    >3</v-btn>
                </v-col>
            </v-row>



            <v-row no-gutters class="hidden-xs-only">
                <v-col color="blue" cols="6" md="4">
                    <v-btn block color="blue lineten-2" outlined
                    >1</v-btn>
                </v-col>

                 <v-spacer></v-spacer> 

                <v-col cols="6" md="4" 
                >
                    <v-btn block outlined color="blue lineten-2"
                    >2</v-btn>
                </v-col>

                <v-col cols="12" md="4"
                >
                    <v-btn block outlined color="blue lineten-2"
                    >3</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-group prepend-icon="mdi-account-circle">
                            <template v-slot:active>
                                <v-list-item-content>
                                        <v-list-item-title>Group</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-group value="true" no-action sub-group>
                                <template v-slot:active>
                                    <v-list-item-content>
                                        <v-list-item-title>action</v-list-item-title>
                                    </v-list-item-content>
                                </template>
                                <v-list-item link>
                                    hello
                                </v-list-item>
                                <v-list-item link>
                                    hey
                                </v-list-item>
                            </v-list-group>
                        </v-list-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>

      </v-main>
      <div>
          <div class="google-map" ref="googleMap"></div>
      </div>
  </v-app>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>