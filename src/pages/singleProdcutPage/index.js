import React from 'react';
import {
  PageWrapper,
  ProductContainer,
  ProductImage,
  InfoSection,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  AddButton
} from './styled';

export default function SingleProductPage() {
  return (
    <PageWrapper>
      <ProductContainer>
        <ProductImage src="/product-placeholder.jpg" alt="Product" />
        <InfoSection>
          <ProductTitle>Product Name</ProductTitle>
          <ProductPrice>$19.99</ProductPrice>
          <ProductDescription>
            This is a beautifully crafted retro-inspired product with high-quality materials, perfect for collectors and design enthusiasts.  
            <br /><br />
            • High gloss finish  
            • Limited edition  
            • Environmentally friendly packaging  
          </ProductDescription>
          <AddButton>Add to Cart</AddButton>
        </InfoSection>
      </ProductContainer>
    </PageWrapper>
  );
}
