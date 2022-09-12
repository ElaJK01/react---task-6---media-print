import React from "react";
import styled from 'styled-components';

const ButtonRoot = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.navbarButtonBackground};
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: center;
  padding: 2px 4px 2px 4px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.navbarButtonBackgroundHover};
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.6rem;
    height: 10%;
    line-height: 10%;
  }

  @media print {
    display: none;
  }
`

const PrintButton = ({onClick, text}) => {

    return (<ButtonRoot onClick={onClick}>{text ? text : "Print"}</ButtonRoot>)
}

export default PrintButton;