import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './modules/calendar';
import modal from './modules/modal';
import search from './modules/search';
import fn from '../functions';

Vue.use(Vuex);
Vue.config.debug = true;

const state = {
  events: {},
};

const mutations = {
  ADD_EVENT(state, event) {
    var stringDate = fn.convertDateObjToString(event.date);
    state.events[stringDate] = event;
  },
  REMOVE_EVENT(state, eventDate) {
    var stringDate = fn.convertDateObjToString(eventDate);
    delete state.events[stringDate];
  },
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    calendar,
    modal,
    search,
  },
});
