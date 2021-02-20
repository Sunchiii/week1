<template>
  <v-app>
      <v-main 
    class="mx-auto"
    ><div class="mm">
            <v-form v-model="valid" href="form"
          >
            <v-card
             elevation="5"
             width="600"
            >
              <v-col
               cols="12"
               sm="10"
               class="mx-auto"
              >
               <h3 style="text-align:center;margin-top:25px;">login to connect with Us Alumni of Laos</h3>
                <v-text-field
                style="border-radius:10px;margin-top:40px;"
                v-model="value"
                label="Alumni ID or Email Adress"
                outlined
                required
            ></v-text-field>
                <v-text-field
                style="border-radius:10px;"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>
            <v-btn
           elevation="3"
           style="width:60%;"
           :style="{left:'50%',transform:'translateX(-50%)'}"
           depressed
           color="primary"
          >LOGIN</v-btn>
            <v-container><router-link to="/" style="color:#666666;">Forgot password?</router-link></v-container>
            <p
              style="text-align:center; color:#666666;"
            >Are you and alumnus. Email us <a style="text-decoration:none;" href="https://www.facebook.com/phout74688" target="_blank">my-mail</a> to get access</p>
              </v-col>
            
            </v-card>
          </v-form>
        </div>
    </v-main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
};
</script>
<style >
  .mm{
    margin:120px;
  }
</style>


