import React from 'react'
import { useParams } from 'react-router-dom'
const Four = () => {
    const {num}=useParams();
    console.log(useParams())
  return (
    <div className='mt-48'><h1>The number is : {num}</h1></div>
  )
}

export default Four