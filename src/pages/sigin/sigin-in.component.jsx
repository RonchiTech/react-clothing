import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,

} from '../../utils/firebase.util';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/buttons/button.component';

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
      <Button buttonType="google" onClick={googleSignInPopUp}>
        Sign In Google Pop Up
      </Button>
      {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
        Sign In Google Redirect
      </Button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
