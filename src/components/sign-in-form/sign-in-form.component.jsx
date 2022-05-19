import { useState, useContext } from 'react';

import Input from '../inputs/input.components';
import Button from '../buttons/button.component';

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.util';

import { UserContext } from '../../context/user.context';

import './sign-in-form.styles.scss';
import '../sign-up-form/sign-up-form.styles.scss';

const initialInputField = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [inputFields, setInputFields] = useState(initialInputField);
  const { email, password } = inputFields;
  const { setCurrentUser } = useContext(UserContext);
  const resetFormField = () => {
    setInputFields(initialInputField);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return alert('Input field must not be empty');
    }

    try {
      resetFormField();
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect Email or Password');
          break;
        case 'auth/user-not-found':
          alert('Email not found');
          break;
        default:
          console.log(err);
      }
      console.log(err);

      //Check if email exists and if password is correct...
    }
  };
  const googleSignInPopUp = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
       setCurrentUser(user);
      await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <Input
          label="email"
          type="text"
          name="email"
          id="email"
          required
          onChange={onChangeHandler}
          value={email}
        />
        <Input
          label="password"
          type="password"
          name="password"
          id="password"
          required
          onChange={onChangeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={googleSignInPopUp}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
