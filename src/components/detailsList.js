import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import DetailElement from "./detailElement";
import { mapIndexed, moveElementFn } from "../helpers";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsList = ({ list }) => {
  const [items, setItems] = useState(list);

  useEffect(() => setItems(list), [list]);

  const moveElement = useCallback(moveElementFn(setItems), []);

  const renderElement = (element, index) => (
    <DetailElement
      element={element.tag}
      index={index}
      key={index}
      id={element.id}
      moveElement={moveElement}
    />
  );

  return (
    <Container>
      {items |> mapIndexed((item, index) => renderElement(item, index))}
    </Container>
  );
};

export default DetailsList;
