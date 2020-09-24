import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 5vh 50px;
  user-select: none;
`;

const ErrorTitle = styled.h1`
  margin: 0.25em;
`;

const ErrorContact = styled.p`
  margin: 0.8em;
  opacity: 0.8;
`;

const ContactLink = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
`;

const Error = ({ message }) => (
  <Container>
    <img
      src="https://res.cloudinary.com/dgggcrkxq/image/upload/v1592437592/noticon/yucvpr6jzidhqlja5zxq.png"
      alt="error-logo"
      width="100px"
    />
    <ErrorTitle>오류가 발생하였습니다!</ErrorTitle>
    <h5>[오류 메세지]</h5>
    <p>{message}</p>
    <ErrorContact>
      <small>
        관리자에게{" "}
        <ContactLink href="https://github.com/hwhang0917/apollo-movies/issues">
          문의
        </ContactLink>{" "}
        부탁 드립니다.
      </small>
    </ErrorContact>
  </Container>
);

export default Error;
