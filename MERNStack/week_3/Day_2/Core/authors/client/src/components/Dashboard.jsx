import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Dashboard = () => {
// all state
  const [authors, setAuthors] = useState([]);
const {id}=useParams();
// Fetch all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((allAuthors) => setAuthors(allAuthors.data))
      .catch((err) => console.log(err));
  }, []);

  // Delete
  const Delete = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        const filteredArr = authors.filter((eachAuthors) => eachAuthors._id !== id
        );
        setAuthors(filteredArr);
      })
      .catch((err) => console.log(err));
  };
//   use Navigate
const navigate = useNavigate();
//   Go to Edit Page
const goToEdit = (id) =>{
    navigate(`/authors/${id}/edit`)
};


  return (
    <div className="m-auto flex flex-col justify-items-center items-center p-40">
      <Link to={`/authors/${id}/new`}>
      <h1 className="text-left font-bold text-lg">Add An Author</h1>
      </Link>
      <h1 className=" text-left font-bold text-lg">We have quotes by:</h1>
      <table className="w-1/2  border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Author
            </th>
      
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Action Available
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group" >
            {authors.map((oneAuthor) => {
              return (
                <tr key={oneAuthor._id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">

                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <Link to={`/authors/${oneAuthor._id}`}>
                    <h2>{oneAuthor.name}</h2>
                    </Link>
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell">
                    <button onClick={() => goToEdit(oneAuthor._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-10">
                      Edit
                    </button>
                    <button
                      onClick={() => Delete(oneAuthor._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                    >
                      Delete
                    </button>
                  </td>
                  </tr>
              )
            })}
            
          
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
