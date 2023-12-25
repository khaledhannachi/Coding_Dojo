import React from 'react';

const Display = ({ tabs }) => {
  const onClickHandler = (e, value) => {
    alert(value);
  };

  return (
    <div className='flex'>
      {tabs.map((tab, index) => (
        <div key={index} className="flex gap-5 m-auto">
          <div className="flex flex-col items-center">
            <button
              onClick={(e) => {
                onClickHandler(e, tab.content);
              }}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-40 mt-5"
            >
              Tab {index + 1}
            </button>
            <div className="border-t border-gray-300 mt-2 p-2">
              <h5 key={index}>{tab.content}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
