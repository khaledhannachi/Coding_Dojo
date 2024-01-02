import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // grab the product
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      description,
    };

    axios
      .patch(`http://localhost:8000/api/products/${id}`, updatedProduct) // Using PATCH method
      .then(() => {
        navigate("/products");
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-1/2 m-auto">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <label>Title : </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label>Price : </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
        <label>Description : </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
