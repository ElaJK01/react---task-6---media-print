import React, {useRef} from "react";
import styled from "styled-components";
import {useReactToPrint} from "react-to-print";
import PrintButton from "./printButton";

const Root = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 4px 8px 2px rgb(0, 0, 0, 0.3);
  }

  @media print {
    box-shadow: none;
    display: block;
  }
`;

const ListContainer = ({children}) => {
    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        removeAfterPrint: true,
    });

    return (
        <div id="listWrapper">
            <PrintButton text="Print page" onClick={handlePrint}/>
            <Root ref={printRef}>{children}</Root>
        </div>
    );
};

export default ListContainer;
