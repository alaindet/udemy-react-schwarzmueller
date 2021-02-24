import React, { useState } from 'react';

import './sign-up.style.scss';
import { auth, createUserProfileDocument } from '../../core/firebase/utils';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';

export const SignUp = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit');
    // TODO
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
        <form onSubmit={handleOnSubmit}>

        <FormInput
          name="display-name"
          label="Display name"
          type="text"
          value={displayName}
          handleChange={e => setDisplayName(e.target.value)}
        />

        <FormInput
          name="email"
          label="Email"
          type="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
        />

        <FormInput
          name="confirm-password"
          label="Confirm password"
          type="password"
          value={passwordConfirm}
          handleChange={e => setPasswordConfirm(e.target.value)}
        />

        <Button type="submit">
          Sign Up
        </Button>

      </form>
    </div>
  );
};
