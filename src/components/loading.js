import React from "react";
import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

const Spinner = styled.div`
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid greenyellow;
  border-right: 5px solid green;
  border-bottom: 5px solid yellow;
  border-left: 5px solid lightgreen;
  width: 20px;
  height: 20px;
  animation: ${spinnerKeyframes} 2s linear infinite;
`;

const Loading = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default Loading;
