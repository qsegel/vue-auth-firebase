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
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('user not found');
            break;
          case 'auth/wrong-password':
            alert('Wrong password');
            break;
          default:
            alert('Something went wrong');
        }
        return;
      }

      commit('SET_USER', auth.currentUser);
      router.push('/');
    },
    async register({ commit }, details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('email already in use');
            break;
          case 'auth/invalid-email':
            alert('invalid email');
            break;
          case 'auth/operation-not-allowed':
            alert('Operation not allowed');
            break;
          case 'auth/weak-password':
            alert('Weak password');
            break;
          default:
            alert('Something went wrong');
        }
        return;
      }

      commit('SET_USER', auth.currentUser);
      router.push('/');
    },
    async logout({ commit }) {
      await signOut(auth);

      commit('CLEAR_USER');
      router.push('/login');
    },
  },
});
