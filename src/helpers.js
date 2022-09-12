import { addIndex, curry, map } from "ramda";
import update from "immutability-helper";
import React from 'react';

export const mapIndexed = addIndex(map);

export const moveElementFn = curry((setFn, dragIndex, hoverIndex) =>
  setFn((prevItems) =>
    update(prevItems, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevItems[dragIndex]],
      ],
    })
  )
);
