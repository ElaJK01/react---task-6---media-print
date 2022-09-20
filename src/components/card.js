import React, { useRef } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import { useReactToPrint } from "react-to-print";
import CardButton from "./cardButton";
import PrintButton from "./printButton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.3);
  }
  :active {
    border: 1px solid blue;
    box-shadow: 0 4px 8px 2px white;
  }
  :focus {
    border: 1px solid deeppink;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-basis: 80%;
    width: 100%;
    margin: 5px;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-basis: 30%;
  }

  @media screen and (min-width: 1201px) {
    flex-basis: 30%;
    margin: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media print {
    box-shadow: none;
    border: 1px solid lightgray;
    break-inside: avoid;
    width: 80%;
    margin: 10px auto;
    justify-content: center;
  }
`;

const CardContent = styled.div`
  padding: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;
  background-color: whitesmoke;
  color: ${({ theme }) => theme.cardText};
  &:hover {
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex: 3;
  }

  @media screen and (min-width: 1201px) {
    flex: 2;
  }
`;

const ImgContainer = styled.div`
  margin: 10px;
  width: 200px;
  height: 200px;
  background: ${({ color, img }) => (color && !img ? color : !img && !color ? "pink" : img)};
  &:hover {
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.3);;
  }
`;

const CardTitle = styled.h4`
  margin: 0.5em;
  padding: 0;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1rem;
  }
`;

const Card = ({ img, link, color, content, title, id, index, moveCard }) => {
  const ref = useRef(null);
  const [{ handlerId, isOver }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  const backgroundColor = isOver ? "lightblue" : "transparent";
  drag(drop(ref));

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <CardContainer
      ref={ref}
      style={{ opacity, backgroundColor }}
      data-handler-id={handlerId}
    >
      <ImgContainer color={color} img={img} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {content}
        <CardButton to={link} />
      </CardContent>
      <PrintButton onClick={handlePrint} text="Print Card" />
    </CardContainer>
  );
};

export default Card;
