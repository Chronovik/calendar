const state = {
  show: false,
  data: {
    date: null,
    eventName: '',
    names: '',
    description: '',
  },
};

const mutations = {
  SHOW_MODAL() {
    state.show = true;
  },
  HIDE_MODAL() {
    state.show = false;
  },
  SET_DATE(subthree, date) {
    state.data.date = date;
  },
  SET_EVENT(subthree, eventName) {
    state.data.eventName = eventName;
  },
  SET_NAMES(subthree, names) {
    state.data.names = names;
  },
  SET_DESCRIPTION(subthree, description) {
    state.data.description = description;
  },
  DATA_TO_MODAL(subthree, data) {
    state.data.eventName = data.eventName;
    state.data.names = data.names;
    state.data.description = data.description;
    state.data.date = data.date;
  },
};

export default {
  state,
  mutations,
};
