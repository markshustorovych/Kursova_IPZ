import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ItemName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ItemPrice = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const TotalAmount = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: right;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #7ed9f6, #b1ecff);
  color: #033d60;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  display: block;
  margin: 2rem auto 0;

  &:hover {
    background: linear-gradient(135deg, #6ecfee, #a3e1fa);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
