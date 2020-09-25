import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Loading from "../Components/Loading";
import Poster from "../Components/Poster";
import Error from "../Components/Error";

const GET_MOVIES = gql`
  query {
    popularMovies {
      id
      poster_path
    }
  }
`;

const GirdContainer = styled.div`
  /* Grid box */
  padding: 4em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1em;

  /* Color styles */
  background: #f5f6fa;
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error} />
  ) : (
    <GirdContainer>
      {data.popularMovies.map(({ id, poster_path: posterPath }) => (
        <Poster
          key={id}
          id={id}
          posterPath={`https://image.tmdb.org/t/p/w500${posterPath}`}
        />
      ))}
    </GirdContainer>
  );
};
