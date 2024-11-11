import data from '../../data/seed_data.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // Handle content creation logic
  }
}