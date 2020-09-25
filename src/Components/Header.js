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

const Title = styled.h1`
  /* Font Style */
  font-size: 3em;
`;

const Subtitle = styled.p`
  /* Font Style */
  font-size: 1em;
`;

const Header = () => (
  <StyledHeader>
    <Title>Apollo Movies 2020</Title>
    <Subtitle>ReactJS + GraphQL ♥ </Subtitle>
  </StyledHeader>
);

export default Header;
