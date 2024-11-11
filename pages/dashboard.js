import React from 'react';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>You must be logged in to view this page.</p>;

  return <div>Welcome, {session.user.name}</div>;
};

export default Dashboard;