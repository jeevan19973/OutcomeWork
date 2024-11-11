import { signIn } from 'next-auth/react';
import React from 'react';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Button variant="contained" onClick={() => signIn('google')}>Log in with Google</Button>
    </div>
  );
};

export default Login;