import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const[name, setName] = useState("");
  const[errors, setErrors] = useState([]);
  // FrontEnd Error
  const [nameError, setNameerror] = useState("");

  const navigate = useNavigate();

   // grab the element
   useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updated = {
      name,
    };

    axios
      .patch(`http://localhost:8000/api/authors/${id}`, updated) // Using PATCH method
      .then(() => {
        navigate("/authors");
        setName("");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })            
  };
  const goToHome = () =>{
    navigate(`/authors`)
};
   //**********FrontEnd Error
  const checkLength = (value) =>{
    setName(value);
        if (value.length <3){
            setNameerror("Field must be at least 3 characters")
        } else {setNameerror("")};}
        // 
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-h-screen flex flex-col items-center justify-center">
        <Link to={`/authors`}>
          <h1 className="text-left font-bold text-lg mt-20">Home</h1>
        </Link>
        <form
          onSubmit={submitHandler}
          className="bg-gray-300 p-8 rounded-lg shadow-lg w-96 mt-10"
        >
          
          <h1 className="text-xl font-semibold mb-4">Add A New Author</h1>
          {errors.map((err, index) =>
          <p key={index} className="text-red-600 mb-6">{err}</p>)}
          <div className="mb-4">
          <h1 className="text-left font-bold text-lg mt-20">Name :</h1>
          <p className="text-red-600 mb-6">{nameError}</p>
            <input
              onChange={(e) => checkLength(e.target.value)}
              value={name}
              name="name"
              type="text"
          
              className="text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
            />
            
          </div>
      <div className="flex justify-around gap-5">
          <button onClick={() => goToHome()} className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
            Cancel
          </button>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Save
          </button>
          </div>
        </form> 

      </div>
    </div>
  )
}

export default Update