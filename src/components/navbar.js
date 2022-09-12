import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { indexOf, map } from "ramda";

const NavbarRoot = styled.nav`
  background: ${({ theme }) => theme.navbarFooterBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 40px;
  height: 50px;
  gap: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    height: 100px;
    line-height: 90px;
    gap: 2px;
  }
`;

const NavButton = styled(Link)`
  height: 70%;
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
`;

const Navbar = ({ navButtonList }) => (
  <NavbarRoot>
    {navButtonList
      |> map((el) => (
        <NavButton key={indexOf(el, navButtonList)} to={el.link}>
          {el.title}
        </NavButton>
      ))}
  </NavbarRoot>
);

export default withRouter(Navbar);
