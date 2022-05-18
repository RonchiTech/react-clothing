import { useState } from 'react';
import Input from '../../inputs/input.components';
import {
  createNewAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../utils/firebase.util';

const initialInputFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  //   const { dummyInput } = dummyValue;
  const [fields, setFields] = useState(initialInputFields);
  const { displayName, email, password, confirmPassword } = fields;
  console.log(fields);
  const onChangeHandler = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!displayName || !email || !password || !confirmPassword) {
      alert('Missing inputs');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    try {
      const { user } = await createNewAuthUserWithEmailAndPassword(
        email,
        password
      );
      const newUser = await createUserDocumentFromAuth(user, {
        displayName: displayName,
      });
      console.log(newUser);
      clearUserInputs();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email is already in use');
      }
      console.log(err);
    }
  };
  const clearUserInputs = () => {
    setFields(initialInputFields);
  };
  //   const onInputChange = (event) => {
  //     const {name, value} = event.target;
  //     console.log(name, value);
  //     setDummyValue({ ...dummyValue, [name]: value });
  //   };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={onSubmitHandler}>
        <Input
          label="Display Name"
          type="text"
          name="displayName"
          id="displayName"
          required
          onChange={onChangeHandler}
          value={displayName}
        />

        <Input
          label="email"
          type="email"
          name="email"
          id="email"
          required
          onChange={onChangeHandler}
          value={email}
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          required
          onChange={onChangeHandler}
          autoComplete="new-password"
          value={password}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          onChange={onChangeHandler}
          autoComplete="current-password"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
      {/* <input
        type="text"
        onChange={onInputChange}
        name="dummyInput"
        value={dummyInput}
      /> */}
    </div>
  );
};

export default SignUpForm;
