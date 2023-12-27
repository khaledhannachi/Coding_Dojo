import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import DisplayPeople from './DisplayPeople';
// import Displayplanets from './Displayplanets';
const Form = () => {

  const [selected, setSelected] = useState("people");
  const [Id, setId] = useState(1);
  const navigate = useNavigate();

  const handleSelect = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/${selected}/${Id}`);
  };




return (
<div className="flex w-96 m-auto justify-items-center align-baseline mt-20">
<form onSubmit={handleSubmit} className="flex justify-items-center align-baseline ">
    <label className='w-20'>Search For:</label>
    <select onChange={handleSelect} 
		className=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option>people</option>
		<option>planets</option>
	</select>
    

   
    <div className="flex ">
        <h2 className='mr-5 ml-5'>ID:</h2>
        <input onChange={(e) => {
            setId(e.target.value);}} type="number" 
			className="w-1/3 md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			/>
    </div>
    <div className="flex">
        <button type="submit" className="bg-sky-500 w-50 h-10 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
  
</form>



</div>


)
}



export default Form