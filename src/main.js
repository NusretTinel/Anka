import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/default.css'
import '../src/assets/css/style.css'
import '../src/assets/css/custom.css'
import Multiselect from 'vue-multiselect'
import LazyTube from "vue-lazytube";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false
Vue.component('multiselect', Multiselect)
Vue.use(LazyTube);
Vue.use(BootstrapVue)

new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
