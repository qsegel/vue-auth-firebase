import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWSU2dbwTuWUx2iGtQBaSzx95CzxiBeB8',
  authDomain: 'vue-auth-5a031.firebaseapp.com',
  projectId: 'vue-auth-5a031',
  storageBucket: 'vue-auth-5a031.appspot.com',
  messagingSenderId: '908905666571',
  appId: '1:908905666571:web:dcaaecfdcbbc8a2d024f0e',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
