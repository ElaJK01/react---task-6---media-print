import React from "react";
import styled from "styled-components";
import error from "../assets/error.png";
import SmallImage from "./smallImage";

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

const ErrorParagraph = styled.p`
  color: red;
  width: fit-content;
`;

const ButtonError = styled.button`
  color: red;
  border-width: 1px;
  border-color: red;
  background-color: white;
  width: fit-content;
  height: 20px;
  border-radius: 5px;
  font-size: 10px;
  margin: 5px;
`;

const Error = ({ onClick }) => (
  <ErrorDiv>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <ErrorParagraph>Sorry, couldn't get what you want!</ErrorParagraph>
    <SmallImage image={error} altName="error" />
    {onClick && <ButtonError onClick={onClick}>Try again!</ButtonError>}
  </ErrorDiv>
);

export default Error;
