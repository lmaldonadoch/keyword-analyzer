import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import firebase from 'firebase/app';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.use(Chartkick.use(Chart));

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyA9_02q49mK_0aA7f2l1Pn782z2wmKrlb8',
  authDomain: 'keyword-analyzer-bdbea.firebaseapp.com',
  databaseURL: 'https://keyword-analyzer-bdbea.firebaseio.com',
  projectId: 'keyword-analyzer-bdbea',
  storageBucket: 'keyword-analyzer-bdbea.appspot.com',
  messagingSenderId: '951749095257',
  appId: '1:951749095257:web:a0f54b55d83d1f5c82e648',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
