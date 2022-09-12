import React from "react";
import styled from "styled-components";

const SectionRoot = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-top: 50px;
  box-sizing: border-box;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SectionText = styled.p`
  display: inline;
  text-align: justify;
  margin: 10px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 5px;
  }
`;

const Section = ({ title, text, children }) => (
  <SectionRoot>
    <SectionTitle>{title}</SectionTitle>
    <SectionText>{text}</SectionText>
    {children}
  </SectionRoot>
);

export default Section;
