import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import { navButtonList } from "../constants";

const HeaderRoot = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  color: black;
  width: 100%;
`;

const HeaderTitle = styled.div`
  position: absolute;
  height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 4px -3px 5px rgba(37, 41, 41, 0.59);

  @media screen and (min-width: 320px) and (max-width: 768px) {
    top: 35%;
  }
`;

const HeaderH1 = styled.h1`
  font-size: xx-large;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 35px;
  }
`;

const ImgDiv = styled.div`
  background-image: url("../assets/map.jpg");
  background-position: -200px -700px;
  width: 100%;
  height: 100px;
`;

const Header = () => (
  <HeaderRoot>
    <HeaderContainer>
      <ImgDiv />
      <HeaderTitle>
        <HeaderH1>Countries and Languages</HeaderH1>
      </HeaderTitle>
      <Navbar navButtonList={navButtonList} />
    </HeaderContainer>
  </HeaderRoot>
);

export default Header;
