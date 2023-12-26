import React, { useState } from "react";

const Display = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onClickHandler = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="flex flex-col">
      <div  className="flex m-auto justify-center">
      <button onClick={() => onClickHandler(0)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-40 mt-5">
        Tab 1
      </button>
      <button onClick={() => onClickHandler(1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-40 mt-5">
        Tab 2
      </button>
      <button onClick={() => onClickHandler(2)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-40 mt-5">
        Tab 3
      </button>
      </div>
      <div className="flex gap-5 m-auto">
            <h5>{tabs[selectedTab].content}</h5>
      </div>
    </div>
  );
};

export default Display;
