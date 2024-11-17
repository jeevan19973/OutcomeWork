import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  // Admin: Manage products
  res.status(200).json({ message: 'Admin product management' });
}