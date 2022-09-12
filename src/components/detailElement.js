import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DetailElement = ({ element, index, moveElement, id }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "element",
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "element",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      key={index}
      style={{
        border: "1px solid blue",
        margin: 2,
        background: isDragging ? "pink" : "transparent",
      }}
      ref={ref}
    >
      {element}
    </div>
  );
};

export default DetailElement;