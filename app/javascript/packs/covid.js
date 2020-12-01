import Vue from 'vue'
import Covid from '../covid.vue'

// configure Vue to use the bootstrap-vue styling
///import 'bootstrap/dist/css/bootstrap.css'
///import 'bootstrap-vue/dist/bootstrap-vue.css'

// And import the bootstrap vue package to use
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: '#covid',
      render: h => h(Covid),
    });
  });