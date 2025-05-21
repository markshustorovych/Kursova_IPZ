import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #7ed9f6, #bdeeff);
  padding: 0 30px 0 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const CenterSection = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #033d60;
  text-shadow: 1px 1px 2px white;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  color: #033d60;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
