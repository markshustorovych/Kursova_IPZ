import React from 'react';
import {
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton
} from './styled';

export default function ProductCard() {
  return (
    <Card>
      <ProductImage src={"https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/7ac192b0-7cb2-4f23-a8af-8c6c79ff29c5.png"} alt="Product" />
      <ProductTitle>Product Name</ProductTitle>
      <ProductPrice>$19.99</ProductPrice>
      <AddButton>Add to Cart</AddButton>
    </Card>
  );
}
