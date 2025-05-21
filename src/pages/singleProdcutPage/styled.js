import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 3rem;
  background: linear-gradient(to bottom, #bdeeff, #e0f7ff);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  object-fit: cover;
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: #033d60;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #066c9e;
  margin-bottom: 1.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #044a70;
  margin-bottom: 2rem;
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
