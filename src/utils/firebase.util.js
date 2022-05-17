import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAxoN7lUdeAhfrqub3uCGaopIi-lYhSwiw',
  authDomain: 'clothing-db-189b7.firebaseapp.com',
  projectId: 'clothing-db-189b7',
  storageBucket: 'clothing-db-189b7.appspot.com',
  messagingSenderId: '1016118808376',
  appId: '1:1016118808376:web:5e314a8e3a2b142101fbcd',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log('Error creating user', err);
    }
  }
  return userDocRef;
};
