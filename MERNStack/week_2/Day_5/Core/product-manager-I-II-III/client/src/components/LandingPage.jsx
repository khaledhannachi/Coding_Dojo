import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const LandingPage = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  const [product, setProduct] = useState({})

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // const createdProduct = {
    //   title,
    //   price,
    //   description,
    // };
    axios
      .post("http://localhost:8001/api/products", product)
      .then((res) => {
        console.log(res)
        navigate("/products");
        setProduct({})
      })

      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
    console.log(e.target)
  }

  return (
    <div className="w-1/2 m-auto">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <labe>Title : </labe>
        <input
        name="title"
          value={product.title}
          onChange={handleChange}
          type="text"
        />
        <labe>Price : </labe>
        <input
        name="price"
          value={product.price}
          onChange={handleChange}
          type="number"
        />
        <labe>Description : </labe>
        <input
        name="description"
          value={product.description}
          onChange={handleChange}
          type="text"
        />
        <button>Submit</button>
      </form>
      <br />
      <Products />
    </div>
  );

};

export default LandingPage;
