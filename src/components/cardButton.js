import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  background: ${({ theme }) => theme.cardBtn};
  border-style: none;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 25px;
  max-width: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  :hover {
    background: ${({ theme }) => theme.cardBtnHover};
    color: ${({ theme }) => theme.text};
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.6rem;
    width: 50%;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 0.6rem;
    width: 35%;
  }
  @media screen and (min-width: 1201px) {
    width: 50%;
    font-size: 0.8rem;
  }
`;

const CardButton = ({ to }) => (
  <Button to={to}>
    <span>More Info</span>
  </Button>
);

export default CardButton;
