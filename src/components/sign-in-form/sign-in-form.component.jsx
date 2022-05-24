import { useState } from 'react';

import Input from '../inputs/input.components';
import Button, {BUTTON_TYPE_CLASSES} from '../buttons/button.component';

import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.util';

import './sign-in-form.styles.scss';
import '../sign-up-form/sign-up-form.styles.scss';

const initialInputField = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [inputFields, setInputFields] = useState(initialInputField);
  const { email, password } = inputFields;

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
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect Email or Password');
          break;
        case 'auth/user-not-found':
          alert('Email not found');
          break;
        default:
          alert(err);
      }
  

      //Check if email exists and if password is correct...
    }
  };
  const googleSignInPopUp = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (err) {
      alert(err);
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
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={googleSignInPopUp}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
