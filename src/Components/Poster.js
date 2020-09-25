import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PosterLink = styled(Link)``;
const PosterImg = styled.img`
  width: 200px;
  border-radius: 1em;
`;

const Poster = ({ id, posterPath }) => (
  <PosterLink to={`/${id}`}>
    <PosterImg src={posterPath} />
  </PosterLink>
);

export default Poster;
