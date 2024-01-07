import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  // all state
  const [countries, setCountries] = useState([]);
  // const [countCountries, setCountCountries] = useState("");
  const { id } = useParams();
  // Fetch all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/countries")
      .then((allCountries) => setCountries(allCountries.data))
      .catch((err) => console.log(err));
  }, []);

  // Delete
  const Delete = (id) => {
    axios
      .delete(`http://localhost:8000/api/countries/${id}`)
      .then((res) => {
        console.log(res);
        const filteredArr = countries.filter(
          (eachCountry) => eachCountry._id !== id
        );
        setCountries(filteredArr);
      })
      .catch((err) => console.log(err));
  };
  //   use Navigate
  const navigate = useNavigate();
  //   Go to Edit Page
  const goToEdit = (id) => {
    navigate(`/countries/${id}/edit`);
  };

  // // Count all
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/countries/count")
  //     .then((count) => setCountCountries(count.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="m-auto flex flex-col justify-items-center items-center p-40">
      <h1 className="text-left font-bold text-lg">Countries List</h1>
      <Link to={`/countries/${id}/new`}>
      <button type="button" class="focus:outline-none text-w
hite bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><h1 className="text-left font-bold text-lg">New Country</h1></button>
        
      </Link>
      {/* <h1 className=" text-left font-bold text-lg">We have quotes by {countAuthors}:</h1> */}
      <table className="w-1/2  border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Author
            </th>

            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Flag
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Independent
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Action Available
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {countries.map((oneCountry) => {
            return (
              <tr
                key={oneCountry._id}
                className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <Link to={`/countries/${oneCountry._id}`}>
                    <h2>{oneCountry.name}</h2>
                  </Link>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell items-center justify-center">
                 <img class="object-contain h-10 flex " src={oneCountry.flag} alt="{oneCountry.flag}"/>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                 { oneCountry.isIndependent ? <h2>Yes</h2> : <h2>No</h2>}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell">
                  <button
                    onClick={() => goToEdit(oneCountry._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-10"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => Delete(oneCountry._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p></p>
    </div>
  );
};

export default Dashboard;
