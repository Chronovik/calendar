import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './modules/calendar';
import modal from './modules/modal';
import fn from '../functions';

Vue.use(Vuex);
Vue.config.debug = true;

const state = {
  events: {},
};

const mutations = {
  ADD_EVENT(state, event) {
    const dateRaw = event.date;
    const year = dateRaw.getFullYear();
    const month = dateRaw.getMonth();
    const day = dateRaw.getDate();
    const path = `y${year}_m${month}_d${day}`;

    state.events = fn.createPathFromDateObject(path, state.events);
    state.events[`y${year}`][`m${month}`][`d${day}`] = event;
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
