import React from "react";
import styled from "styled-components";
import Sun from "./sun";
import Moon from "./moon";

const Button = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.themeTogglerBtn};
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  margin: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.themeTogglerBtnHover};
  }
`;

const ThemeToggler = ({ toggleTheme, theme }) => (
  <Button onClick={toggleTheme}>
    {theme === "light" ? <Moon /> : <Sun />}
  </Button>
);

export default ThemeToggler;
