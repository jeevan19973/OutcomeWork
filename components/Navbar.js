import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => (session ? signOut() : signIn('google'))}> {session ? 'Logout' : 'Login'} </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;