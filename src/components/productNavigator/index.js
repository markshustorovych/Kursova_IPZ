import React from 'react';
import { NavbarWrapper, CategoryButton } from './styled';

export default function ProductNavigator({ products }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavbarWrapper>
      {products.map((p) => (
        <CategoryButton key={p._id} onClick={() => scrollTo(p._id)}>
          {p.title}
        </CategoryButton>
      ))}
    </NavbarWrapper>
  );
}
