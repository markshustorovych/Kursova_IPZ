import dbConnect from '@lib/mongoose';
import User from '@models/user';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ message: 'Missing userId or productId' });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const initialCartLength = user.cart.length;

  user.cart = user.cart.filter(item => item.productId !== productId);

  if (user.cart.length === initialCartLength) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  await user.save();

  res.status(200).json({ message: 'Item removed from cart' });
}
