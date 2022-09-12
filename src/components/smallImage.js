import React from "react";

const SmallImage = ({ image, altName }) => (
  <img src={image} alt={altName} width={50} height={50} />
);

export default SmallImage;
