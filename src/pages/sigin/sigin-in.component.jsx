import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase.util';

import SignUpForm from '../../components/categories/sign-up-form/sign-up-form.component';

const SignIn = () => {
  useEffect(() => {
    const initialize = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    initialize();
  }, []);

  const googleSignInPopUp = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };
  // const googleSignInRedirect = async () => {
  //   try {
  //     const { user } = await signInWithGoogleRedirect();
  //     // const userDocRef = await createUserDocumentFromAuth(user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div>
      <button onClick={googleSignInPopUp}>Sign In Google Pop Up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
