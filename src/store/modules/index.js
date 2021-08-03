import { moduleRollupLib, types } from './types';

export const module = {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    [types.mutations.SET_COUNTER](state, payload) {
      state.counter = payload;
    },
  },
  actions: {
    [types.actions.INCREMENT]({ commit, state }, payload) {
      commit(types.mutations.SET_COUNTER, state.counter + payload);
    },
  },
};

export const name = moduleRollupLib;
