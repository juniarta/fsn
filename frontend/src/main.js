import Vue from 'vue';
<<<<<<< HEAD
import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';
import store from './store';
=======
import App from './App.vue';
import store from './store';
import 'bootstrap/scss/bootstrap.scss';
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda

Vue.config.productionTip = false;

new Vue({
  store,
<<<<<<< HEAD
  render: (h) => h(App),
=======
  render: h => h(App),
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
}).$mount('#app');
