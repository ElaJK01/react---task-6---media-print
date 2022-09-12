import React, { useCallback, useEffect, useState } from "react";
import { prop } from "ramda";
import styled from "styled-components";
import Card from "./card";
import { mapIndexed, moveElementFn } from "../helpers";

const ListContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const CountriesList = ({ list }) => {
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
        id={card.code}
        moveCard={moveCard}
        title={card.name}
        content={
          <div>
            <h4>Data</h4>
            <ul style={{ listStyleType: "none" }}>
              <li>Code: {card.code}</li>
              <li>Currency: {card.currency}</li>
              <li>
                Languages:{" "}
                <ul style={{ listStyleType: "none" }}>
                  {card.languages
                    |> mapIndexed((lang, i) => (
                      <li key={i}>{prop("name", lang)}</li>
                    ))}
                </ul>
              </li>
              <li>Emoji: {card.emoji}</li>
              <li>Capital: {card.capital}</li>
            </ul>
          </div>
        }
        link={`/countries/${card.code}`}
        color="lightseagreen"
      />
    ),
    [list]
  );

  return (
    <ListContainer>
      {cards |> mapIndexed((card, index) => renderCard(card, index))}
    </ListContainer>
  );
};

export default CountriesList;
