import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase.util';

const SignIn = () => {
  const googleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={googleSignIn}>Sign In Google</button>
    </div>
  );
};

export default SignIn;
