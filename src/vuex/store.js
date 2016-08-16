import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './modules/calendar';


Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
  modules: {
    calendar,
  },
});
