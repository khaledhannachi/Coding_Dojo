import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ShowOne = () => {
  const {id} = useParams();
  const [player, setPlayer] = useState({});
  useEffect(()=>{
      axios.get("http://localhost:8000/api/players/" + id)
      .then ((onePlayer) => {
        return (setPlayer(onePlayer.data)
        , console.log(onePlayer.data))
        })
      
      .catch((err) => console.log(err));
  },[id]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-h-screen flex flex-col items-center justify-center">
       <Link to={`/players/list`}>
          <h1 className="text-left font-bold text-lg mt-20">Home</h1>
        </Link>
    {player && (
      <div>
          <h1>{player.name}</h1>
          <h1>{player.position}</h1>
          </div>
      )}
    </div>
    </div>
  )
}

export default ShowOne




