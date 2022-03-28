const state = () => ({
  selected: null
});

const getters = {
  getSelected (state) {
    return state.selected
  }
};

const mutations = {
  setSelected (state, selection) {
    state.selected = selection;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};