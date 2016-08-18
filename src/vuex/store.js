import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './modules/calendar';
import modal from './modules/modal';

Vue.use(Vuex);
Vue.config.debug = true;

const state = {
  events: {},
};

const mutations = {
  ADD_EVENT(state, event) {
    console.log(event);
    const date = event.date.split('.');
    const dateRaw = new Date(date[2], date[1], date[0]);
    const year = dateRaw.getFullYear();
    const month = dateRaw.getMonth();
    const day = dateRaw.getDate();

    state.events[`d_$(year)_d_$(month)_d_$(day)`] = event;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    calendar,
    modal,
  },
});
