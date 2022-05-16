import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDAipH-srQQR3hskeDgJ2tkLo8jP4sbWPA',
  authDomain: 'clothing-web-app-6e493.firebaseapp.com',
  projectId: 'clothing-web-app-6e493',
  storageBucket: 'clothing-web-app-6e493.appspot.com',
  messagingSenderId: '47743895154',
  appId: '1:47743895154:web:841fcc581129f962c664eb',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
