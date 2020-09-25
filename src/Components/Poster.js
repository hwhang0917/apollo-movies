import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PosterLink = styled(Link)`
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const PosterImg = styled.img`
  width: 100%;
  border-radius: 1em;
`;

const Poster = ({ id, posterPath }) => {
  return (
    <PosterLink to={`/${id}`}>
      <PosterImg src={posterPath} />
    </PosterLink>
  );
};

export default Poster;
