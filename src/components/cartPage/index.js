import React from "react";
import StoreHeader from "@components/storeHeader";
import {
  Container,
  Content,
  Title,
  CartItem,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemImage,
  Button,
  TotalAmount,
} from "./styled";

export default function CartPage({ cartItems, onCheckout }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <StoreHeader />
      <Content>
        <Title>Your Cart</Title>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    ${item.price} × {item.quantity}
                  </ItemPrice>
                </ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
              </CartItem>
            ))}
            <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
            <Button onClick={onCheckout}>Proceed to Checkout</Button>
          </>
        )}
      </Content>
    </Container>
  );
}
