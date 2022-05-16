import { signInWithGooglePopUp } from '../../utils/firebase.util';

const SignIn = () => {
  const googleSignIn = async () => {
    try {
      const response = await signInWithGooglePopUp();
      console.log(response);
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
