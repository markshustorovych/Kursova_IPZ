import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 800px;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  color: #033d60;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #066c9e;
  margin: 0.5rem 0 1rem 0;
`;

export const AddButton = styled.button`
  background: rgba(126, 217, 246, 0.8);
  color: #033d60;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #7ed9f6;
    transform: scale(1.05);
  }
`;
