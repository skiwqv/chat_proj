
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import "../node_modules/vuetify/dist/vuetify.min.css";
import VueResource from 'vue-resource';
import router from './routes/router';
import firebase from 'firebase';
import 'firebase/firestore'
import store from './store';
import '@mdi/font/css/materialdesignicons.css'


const firebaseConfig = {
  apiKey: "AIzaSyDFKGpRaawwPph8zgHjUL8TU4kzS2DTAA0",
  authDomain: "chat-ef3de.firebaseapp.com",
  databaseURL: "https://chat-ef3de-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-ef3de",
  storageBucket: "chat-ef3de.appspot.com",
  messagingSenderId: "22542600410",
  appId: "1:22542600410:web:13bb93ea029709c0e2bde3",
  measurementId: "G-Y7MJN29H20"
};


Vue.use(VueResource)
Vue.use(Vuetify)


export default new Vuetify({
  icons: {
    defaultSet: 'mdi',
  },
  theme:{dark:true}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  store,
  VueResource,
  components: { App },
  created(){
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
  },
  template: '<App/>',
})

