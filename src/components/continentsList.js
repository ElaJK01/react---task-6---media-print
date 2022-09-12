import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import update from "immutability-helper";
import { prop } from "ramda";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";

const ListRoot = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ContinentsList = ({ list }) => {
  const [cards, setCards] = useState(list);

  useEffect(() => {
    setCards(list);
  }, [list]);

  const moveCard = useCallback(moveElementFn(setCards), []);

  const renderCard = useCallback(
    (card, index) => (
      <Card
        key={index}
        index={index}
        id={prop("code", card)}
        moveCard={moveCard}
        title={prop("name", card)}
        content={
          <p>
            Code:
            {prop("code", card)}
          </p>
        }
        link={`/continents/${prop("code", card)}`}
      />
    ),
    []
  );

  return (
    <ListRoot>{cards |> mapIndexed((card, i) => renderCard(card, i))}</ListRoot>
  );
};

export default ContinentsList;
