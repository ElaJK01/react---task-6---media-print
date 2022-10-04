import React from "react";
import styled from "styled-components";

const ToPrint = styled.h1`
  display: none;

  @media print {
    display: block;
    text-align: center;
  }
`;

const ToPrintTitle = ({ title }) => <ToPrint>{title}</ToPrint>;

export default ToPrintTitle;
