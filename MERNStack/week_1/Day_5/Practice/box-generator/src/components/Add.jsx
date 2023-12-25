import { useState } from "react";
const Add = ({boxes, setBoxes}) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [background, setBackground] = useState("");

  const handleSubmit= (e) => {
    e.preventDefault();
    const newBox ={
      height,
      width,
      background,
  };
   setBoxes([...boxes,newBox]);
   setHeight("");
   setWidth("");
   setBackground("");
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-10">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          PLAY WITH BOXES
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Color</span>
              <input
              onChange={(e)=>{setBackground(e.target.value)}}
              value={background}
                type="text"
                className="
                  w-1/2 
                  px-3
                  py-2
                  mt-2
                  border 
                  border-blue-500 
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
            </label>
          </div>
          <div className="mb-2  gap-20">
            <label>
              <span className="text-gray-700">Width</span>
              <input
              onChange={(e)=>{setWidth (e.target.value)}}
              value={width}
                type="text"
                className="
                  w-1/2 
                  px-3
                  py-2
                  mt-2
                  border 
                  border-blue-500 
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
            </label>
          </div>
          <div className="mb-2  gap-20">
            <label>
              <span className="text-gray-700">Height</span>
              <input
              onChange={(e)=>{setHeight(e.target.value)}}
              value={height}
                type="text"
                className="
                  w-1/2 
                  px-3
                  py-2
                  mt-2
                  border 
                  border-blue-500 
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
