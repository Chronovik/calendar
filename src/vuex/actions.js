export function setDateModal({ dispatch }, date) {
  dispatch('SET_DATE', date);
};

export function setDateStringModal({ dispatch }, dateString) {
  dispatch('SET_DATE_STRING', dateString);
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

export function showModal({ dispatch }) {
  dispatch('SHOW_MODAL');
};

export function hideModal({ dispatch }) {
  dispatch('HIDE_MODAL');
};

export function addEvent({ dispatch }, event) {
  dispatch('ADD_EVENT', event);
};

export function removeEventByDate({ dispatch }, date) {
  dispatch('REMOVE_EVENT', date);
};

export function setFound({ dispatch }, foundArr) {
  dispatch('SET_FOUND', foundArr);
};

export function setSearchText({ dispatch }, searchText) {
  dispatch('SET_SEARCH_TEXT', searchText);
};
