import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  // all state
  const [players, setPlayers] = useState([]);
  const [countPlayers, setCountPlayers] = useState("");
  const { id } = useParams();
  // Fetch all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((allPlayers) => setPlayers(allPlayers.data))
      .catch((err) => console.log(err));
  }, []);

  // Delete
  const Delete = (id) => {
  
    axios
      .delete(`http://localhost:8000/api/players/${id}`)
      .then((res) => {
        console.log(res);
        const filteredArr = players.filter(
          (eachPlayer) => eachPlayer._id !== id
        );
        setPlayers(filteredArr);
      })
      .catch((err) => console.log(err));
  };
  //   use Navigate
  const navigate = useNavigate();
  //   Go to Edit Page
  const goToEdit = (id) => {
    navigate(`/players/${id}/edit`);
  };

  // Count all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/count")
      .then((count) => setCountPlayers(count.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-auto flex flex-col justify-items-center items-center p-40">
      <div className="flex text-center gap-5 m-auto justify-center mt-32">
        <Link to={"/players/list"}>
          <h1 className="text-left font-bold text-lg">List</h1>
        </Link>
        <Link to={"/players/addplayer"}>
          <h1 className="text-left font-bold text-lg">Add Player</h1>
        </Link>
      </div>
      <h1 className=" text-left font-bold text-lg">
        You have {countPlayers} players in your Team.
      </h1>
      <table className="w-1/2  border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Team Name
            </th>

            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Preferred Position
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {players.map((onePlayer) => {
            return (
              <tr
                key={onePlayer._id}
                className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <Link to={`/players/${onePlayer._id}`}>
                    <h2>{onePlayer.name}</h2>
                  </Link>
                </td>

                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <h2>{onePlayer.position}</h2>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell">
                  <button
                    onClick={() => goToEdit(onePlayer._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-10"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => Delete(onePlayer._id, alert(`Are you sure you wante to remove ${onePlayer.name} ?`))}
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
