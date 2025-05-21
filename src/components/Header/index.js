import React from 'react';
import {
  HeaderContainer,
  Logo,
  Title,
  LoginButton,
  RightSection,
  CenterSection,
  LeftSection,
} from './styled';

export default function StoreHeader() {
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src={"https://i.pinimg.com/736x/b9/68/ee/b968ee908ef150e3c4b2f82ccaed351f.jpg"} alt="Logo" />
      </LeftSection>
      <CenterSection>
        <Title>retrodream</Title>
      </CenterSection>
      <RightSection>
        <LoginButton>Login / Register</LoginButton>
      </RightSection>
    </HeaderContainer>
  );
}
