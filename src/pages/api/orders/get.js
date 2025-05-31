import clientPromise from '@lib/mongodb';
import dbConnect from '@lib/mongoose';
import Order from '@models/order';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  await dbConnect();

  const { userId } = req.query;

  const orders = await Order.find({ userId }).sort({ createdAt: -1 });

  res.status(200).json(orders);
}
