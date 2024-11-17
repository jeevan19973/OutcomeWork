import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  // Admin: Manage users
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Admin user management' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}