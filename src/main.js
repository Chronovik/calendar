import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import VueValidator from 'vue-validator';
require('script!jquery');
require('script!jquery.maskedinput/src/jquery.maskedinput.js');
require('script!air-datepicker/dist/js/datepicker.js');
require('script!air-datepicker/dist/js/i18n/datepicker.en.js');
require('air-datepicker/dist/css/datepicker.css');

Vue.use(VueValidator);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store,
  components: { App },
});

Vue.validator('date', function (val) {
  return /\d\d.\d\d.\d\d\d\d/.test(val);
});

Vue.directive('date-picker', {
  bind() {
    $(this.el)
    .datepicker({
      dateFormat: 'dd.mm.yyyy',
    });
  },
});
