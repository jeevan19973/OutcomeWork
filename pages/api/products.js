import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  // Handle GET and POST for products
  res.status(200).json({ message: 'Manage products' });
}