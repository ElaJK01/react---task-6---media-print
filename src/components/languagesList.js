import React, { useCallback, useEffect, useState } from "react";
import { prop } from "ramda";
import styled from "styled-components";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";
import ListContainer from "./listContainer";
import ToPrintTitle from "./toPrintTitle";

// const ToPrint = styled.h1`
//   display: none;
//
//   @media print {
//     display: block;
//     text-align: center;
//   }
// `;

const LanguagesList = ({ list }) => {
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
        title={prop("name", card)}
        content={
          <div>
            <p>
              Code:
              {prop("code", card)}
            </p>
          </div>
        }
        moveCard={moveCard}
        link={`/languages/${prop("code", card)}`}
        color="lightgreen"
      />
    ),
    [list]
  );
  return (
    <ListContainer>
      <ToPrintTitle title={"Title: Languages list"} />
      {cards |> mapIndexed((card, index) => renderCard(card, index))}
    </ListContainer>
  );
};

export default LanguagesList;
