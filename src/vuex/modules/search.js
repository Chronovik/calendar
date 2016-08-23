const state = {
  found: [],
  searchText: '',
};

const mutations = {
  SET_FOUND(subThree, foundArr) {
    state.found = foundArr;
  },
  SET_SEARCH_TEXT(subThree, searchText) {
    state.searchText = searchText;
  },
};

export default {
  state,
  mutations,
};
