import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {prop} from "ramda";
import Card from "./card";
import {mapIndexed, moveElementFn} from "../helpers";
import {useReactToPrint} from "react-to-print";
import PrintButton from "./printButton";

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

  @media print {

  }
`;

const ContinentsList = ({list}) => {
    const [cards, setCards] = useState(list);

    const refList = useRef()
    const handlePrint = useReactToPrint({
        content: () => refList.current,
    });

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
        <div>
            <PrintButton onClick={handlePrint} text="Print page"/>
            <ListRoot ref={refList}>{cards |> mapIndexed((card, i) => renderCard(card, i))}</ListRoot>
        </div>
    );
};

export default ContinentsList;
