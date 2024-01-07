import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  const { word, textcolor, backg } = useParams();

  const dynamicStyles = {
    backgroundColor: backg,
    color: textcolor
  };

  return (
    <div style={dynamicStyles}>
      <h1>The Word is: {word}</h1>
    </div>
  );
};

export default Color;
