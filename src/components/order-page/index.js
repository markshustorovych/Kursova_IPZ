import React from "react";
import StoreHeader from "@/components/store-header";
import {
  Container,
  Content,
  Title,
  Input,
  Label,
  Section,
  Button,
} from "./styled";

export default function OrderPage() {
  return (
    <Container>
      <StoreHeader />
      <Content>
        <Title>Checkout</Title>

        <form>
          <Section>
            <Label>Full Name</Label>
            <Input type="text" placeholder="John Doe" required />
          </Section>

          <Section>
            <Label>Address</Label>
            <Input type="text" placeholder="123 Main St" required />
          </Section>

          <Section>
            <Label>City</Label>
            <Input type="text" placeholder="Kyiv" required />
          </Section>

          <Section>
            <Label>Postal Code</Label>
            <Input type="text" placeholder="01001" required />
          </Section>

          <Section>
            <Label>Card Number</Label>
            <Input type="text" placeholder="**** **** **** 1234" required />
          </Section>

          <Button type="submit">Place Order</Button>
        </form>
      </Content>
    </Container>
  );
}
