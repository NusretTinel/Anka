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


library.add(faPhone);

library.add(faPhone);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
