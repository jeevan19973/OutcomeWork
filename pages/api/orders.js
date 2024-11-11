import data from '../../data/seed_data.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data.orders);
  }
  // Handle other methods for order management...
}