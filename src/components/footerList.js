import React from "react";
import styled from "styled-components";
import { indexOf, map } from "ramda";
import Link from "./link";

const List = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const FooterList = ({ list }) => (
  <List>
    {list
      |> map((el) => (
        <Link key={indexOf(el, list)} href={el.link} name={el.title} />
      ))}
  </List>
);

export default FooterList;
