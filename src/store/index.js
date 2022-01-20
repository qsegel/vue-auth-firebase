import { createStore } from 'vuex';
import router from '../router';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    // async login({ commit }, details) {},
    // async register({ commit }, details) {},
    // async logout({ commit }) {},
  },
});
