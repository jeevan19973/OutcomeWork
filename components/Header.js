import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>MyApp</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;