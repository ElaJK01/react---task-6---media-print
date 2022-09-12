import React from "react";
import styled from "styled-components";
import { slice } from "ramda";
import FooterList from "./footerList";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  background: ${({ theme }) => theme.navbarFooterBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: auto;
  overflow: hidden;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
`;

const Footer = ({ linksList }) => {
  const firstFooterColumn = linksList |> slice(0, 3);
  const secondFooterColumn = linksList |> slice(3, Infinity);

  return (
    <FooterDiv>
      <FooterList list={firstFooterColumn} />
      <FooterList list={secondFooterColumn} />
    </FooterDiv>
  );
};

export default Footer;
