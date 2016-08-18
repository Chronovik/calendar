export function setDateModal({ dispatch }, date) {
  dispatch('SET_DATE', date);
};

export function setEventModal({ dispatch }, event) {
  dispatch('SET_EVENT', event);
};

export function setNamesModal({ dispatch }, names) {
  dispatch('SET_NAMES', names);
};

export function setDescriptionModal({ dispatch }, description) {
  dispatch('SET_DESCRIPTION', description);
};

export function showModal({ dispatch }, data) {
  dispatch('SHOW_MODAL', data);
};

export function hideModal({ dispatch }) {
  dispatch('HIDE_MODAL');
};

export function addEvent({ dispatch }, event) {
  dispatch('ADD_EVENT', event);
};
