import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPwZef6pAINbxjP8ZnGMC9neHzH_Q7Y7Y",
  authDomain: "apinasa-f80a2.firebaseapp.com",
  projectId: "apinasa-f80a2",
  storageBucket: "apinasa-f80a2.appspot.com",
  messagingSenderId: "234246343172",
  appId: "1:234246343172:web:1b61000c1f08d922b38351",
  measurementId: "G-B6NXMBWTYB"
};

firebase.initializeApp(firebaseConfig);

