import React, {useCallback, useEffect, useRef, useState} from "react";
import {prop} from "ramda";
import styled from "styled-components";
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
`;

const LanguagesList = ({list}) => {
    const [cards, setCards] = useState(list);

    useEffect(() => {
        setCards(list);
    }, [list]);

    const printRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

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
        <div>
            <PrintButton text="Print page" onClick={handlePrint}/>
            <ListRoot ref={printRef}>
                {cards |> mapIndexed((card, index) => renderCard(card, index))}
            </ListRoot>
        </div>
    );
};

export default LanguagesList;
