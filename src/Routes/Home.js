import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    popularMovies {
      id
      title
      poster_path
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    data.popularMovies.map((m) => <h3 key={m.id}>{m.title}</h3>)
  );
};
