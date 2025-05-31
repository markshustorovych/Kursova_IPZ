import React from 'react';
import {
  Wrapper,
  Image,
  Title,
  Price,
  Description,
  BuyButton
} from './styled';
import StoreHeader from '@/components/store-header';

export default function ProductDetails({ product }) {
  const { title, price, description, imageUrl } = product;

    const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch('/api/cart/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id, quantity: 1 })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Product added to cart!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('An error occurred while adding to cart.');
    }
  };

  return (
    <>
      <StoreHeader />
      <Wrapper>
        <Image src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Price>${price.toFixed(2)}</Price>
        <Description>{description}</Description>
        <BuyButton onClick={handleAddToCart}>Купити</BuyButton>
      </Wrapper>
    </>
  );
}
