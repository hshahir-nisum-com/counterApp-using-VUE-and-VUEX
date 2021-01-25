export const namespaced = true;

export const state = {
  count: 0,
};

export const mutations = {
  ADD_DATA(state) {
    state.count = state.count + 1;
  },
  DEC_DATA(state) {
    state.count = state.count - 1;
  },
};

export const actions = {
  increment(context) {
    context.commit("ADD_DATA");
  },
  decrement(context) {
    context.commit("DEC_DATA");
  },
};
