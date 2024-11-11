import React from 'react';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session.user.name}</h2>
    </div>
  );
};

export default Dashboard;