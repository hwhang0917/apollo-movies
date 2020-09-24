import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Size */
  padding: 10vh 0;
  width: 100%;
  height: 100%;

  /* Imported from loading.io/css */
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #eeaeca;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const Loading = () => (
  <Loader>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </Loader>
);

export default Loading;
