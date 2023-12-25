import React from "react";

const Display = (props) => {
  const { box } = props;
  return (
    <div className="flex justify-center gap-20 m-10">
      {box.map((onebox, index) => (
        <div key={index} style={onebox}></div>
      ))}
    </div>
  );
};

export default Display;
