import data from '../../../data/seed_data.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data.products);
  }
  // Admin specific operations can go here...
}