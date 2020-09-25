import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  /* Size */
  height: 20vh;

  /* Gridbox */
  display: grid;
  place-items: center;

  /* Background Gradiation  */
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  /* Font colors */
  color: #fff;
  user-select: none;
`;

const HeaderTitle = styled.h1`
  /* Font Style */
  font-size: 3em;
`;

const HeaderSubTitle = styled.p``;

const Header = () => (
  <StyledHeader>
    <HeaderTitle>Apollo Movies 2020</HeaderTitle>
    <HeaderSubTitle>ReactJS + GraphQL ♥ </HeaderSubTitle>
  </StyledHeader>
);

export default Header;
