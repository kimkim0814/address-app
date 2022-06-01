import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDeQzBl1NeyIY9fV8eNNJdifx8OeRPwjKU",
  authDomain: "my-address-pj-240ec.firebaseapp.com",
  projectId: "my-address-pj-240ec",
  storageBucket: "my-address-pj-240ec.appspot.com",
  messagingSenderId: "568172005014",
  appId: "1:568172005014:web:6ec54fe1752065393c24b7",
  measurementId: "G-S658N5V563"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
