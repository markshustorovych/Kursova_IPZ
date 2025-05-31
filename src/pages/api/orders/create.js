import dbConnect from '@lib/mongoose';
import User from '@models/user';
import Order from '@models/order';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const { userId } = req.body;
  const user = await User.findById(userId);

  if (!user || !user.cart.length) {
    return res.status(400).json({ error: 'Cart is empty or user not found' });
  }

  const order = await Order.create({
    userId,
    items: user.cart,
  });

  user.cart = [];
  await user.save();

  res.status(201).json({ orderId: order._id });
}
