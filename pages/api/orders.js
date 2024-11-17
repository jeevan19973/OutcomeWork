import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  // Handle orders
  res.status(200).json({ message: 'Manage orders' });
}