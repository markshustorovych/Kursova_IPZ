import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  justify-content: flex-start;
  background: linear-gradient(to right, #e0f7ff, #f6fdff);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 80px; /* assumes header height is 80px */
  z-index: 900;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const CategoryButton = styled.button`
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  background: #ffffffcc;
  border: 2px solid #7ed9f6;
  color: #066c9e;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #7ed9f6;
    color: #033d60;
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;
