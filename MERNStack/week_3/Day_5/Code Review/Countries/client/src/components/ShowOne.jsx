import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ShowOne = () => {
  const {id} = useParams();
  const [country, setCountry] = useState({});
  useEffect(()=>{
      axios.get("http://localhost:8000/api/countries/" + id)
      .then ((oneCountry) => {
        return (setCountry(oneCountry.data)
        , console.log(oneCountry.data))
        })
      
      .catch((err) => console.log(err));
  },[id]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-h-screen flex flex-col items-center justify-center">
       <Link to={`/countries`}>
          <h1 className="text-left font-bold text-lg mt-20">Home</h1>
        </Link>
    {country && (
      <div>
          <h1>{country.name}</h1>
          <h1>{country.flag}</h1>
          <h1>{country.isIndependent}</h1>
          </div>
      )}
    </div>
    </div>
  )
}

export default ShowOne




