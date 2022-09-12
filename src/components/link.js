import React from "react";
import styled from "styled-components";

const LinkRoot = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.footerLinkColor};
  :hover {
    color: ${({ theme }) => theme.footerLinkColorHover};
  }
`;

const Link = ({ href, name }) => <LinkRoot href={href}>{name}</LinkRoot>;

export default Link;
