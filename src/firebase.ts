import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyFkJAcO6U0riik4Suful4eMs3nuXaTn4',
  authDomain: 'touch-typing-sim.firebaseapp.com',
  projectId: 'touch-typing-sim',
  storageBucket: 'touch-typing-sim.appspot.com',
  messagingSenderId: '496994230425',
  appId: '1:496994230425:web:1fb1a7ac52b6c5d0549808',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
