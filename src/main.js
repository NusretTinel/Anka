// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/default.css';
import '../src/assets/css/style.css';
import '../src/assets/css/custom.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from '@/router/router';
import VueGtag from "vue-gtag";

library.add(faPhone);




createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(VueGtag,{config:{id:"G-VRWLSVSQCV"}}).mount("#app")