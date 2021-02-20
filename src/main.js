import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue2Editor from 'vue2-editor';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load:{
    key:"REPLACE-THIS-WITH-YOUR-KEY-ABOVE",
    libraies: "places"
  }
});
Vue.use(Vue2Editor);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
