import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ShowOne = () => {
    const {id} = useParams();
    const [product, setProduct]= useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then (oneProduct => setProduct(oneProduct.data))
        .catch((err) => console.log(err));
    },[id]);

  return (
    <div>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h2>{product.description} DT</h2>
    </div>
  )
}

export default ShowOne