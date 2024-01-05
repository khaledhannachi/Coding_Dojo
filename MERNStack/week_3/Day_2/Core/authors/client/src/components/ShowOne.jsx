import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ShowOne = () => {
  const {id} = useParams();
  const [author, setAuthor] = useState({});
  useEffect(()=>{
      axios.get("http://localhost:8000/api/authors/" + id)
      .then ((oneAuthor) => {
        return (setAuthor(oneAuthor.data)
        , console.log(oneAuthor.data))
        })
      
      .catch((err) => console.log(err));
  },[id]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-h-screen flex flex-col items-center justify-center">
       <Link to={`/authors`}>
          <h1 className="text-left font-bold text-lg mt-20">Home</h1>
        </Link>
    {author && (
          <h1>{author.name}</h1>
      )}
    </div>
    </div>
  )
}

export default ShowOne




