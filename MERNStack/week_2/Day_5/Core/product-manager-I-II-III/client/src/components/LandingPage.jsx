import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const LandingPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const createdProduct = {
      title,
      price,
      description,
    };
    axios
      .post("http://localhost:8000/api/products", createdProduct)
      .then((res) => {
        navigate("/products");
        setTitle("");
        setPrice("");
        setDescription("");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="w-1/2 m-auto">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <labe>Title : </labe>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
        <labe>Price : </labe>
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
        />
        <labe>Description : </labe>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
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
