// src/pages/Auth.tsx
import React, { useState } from 'react';
import { Container, TextField, Button } from '@fluentui/react';
import { auth } from '../firebaseConfig';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).catch(error => {
      console.error("Error signing up", error);
    });
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      console.error("Error logging in", error);
    });
  };

  return (
    <Container>
      <TextField label="Email" value={email} onChange={(e, newValue) => setEmail(newValue || '')} />
      <TextField label="Password" type="password" value={password} onChange={(e, newValue) => setPassword(newValue || '')} />
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Button onClick={handleLogin}>Log In</Button>
    </Container>
  );
};

export default Auth;
