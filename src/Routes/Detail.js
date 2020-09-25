import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const GET_MOVIE_DETAIL = gql`
  query getMovieDetail($id: Int!) {
    movieDetail(id: $id) {
      id
      title
      overview
      vote_average
      backdrop_path
      poster_path
      runtime
      release_date
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.7;
  z-index: -10;
`;

const Poster = styled.img`
  margin: 30px;
  border-radius: 5em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Content = styled.div`
  margin: 50px;
  color: white;
  text-shadow: 2px 2px 2px gray;
`;

const Title = styled.h1`
  font-size: 3.5em;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const Rating = styled.h3`
  font-size: 1em;
`;

const Overview = styled.p`
  margin: 2em 0;
  padding: 2em;
  border-radius: 2em;
  font-size: 1.25em;
  background-color: rgba(0, 0, 0, 0.2);
  line-height: 1.5;
`;

export default () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { id: parseInt(id) },
  });
  console.log(data);
  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error} />
  ) : (
    <Container>
      {data.movieDetail.backdrop_path && (
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${data.movieDetail.backdrop_path}`}
        />
      )}
      <Poster
        src={`https://image.tmdb.org/t/p/w500${data.movieDetail.poster_path}`}
      />
      <Content>
        <Title>{data.movieDetail.title}</Title>
        <SubTitle>
          {data.movieDetail.release_date.split("-")[0]} ·{" "}
          {data.movieDetail.runtime + " min"}
        </SubTitle>
        <Rating>⭐{data.movieDetail.vote_average} / 10</Rating>
        {data.movieDetail.overview && (
          <Overview>
            <SubTitle>줄거리</SubTitle>
            {data.movieDetail.overview}
          </Overview>
        )}
      </Content>
    </Container>
  );
};
