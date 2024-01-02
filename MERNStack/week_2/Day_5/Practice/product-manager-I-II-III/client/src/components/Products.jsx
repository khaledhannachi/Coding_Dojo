import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((allProducts) => setProducts(allProducts.data))
      .catch((err) => console.log(err));
  }, []);

// Delete
const onDeleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        const filteredArr = products.filter((eachProduct) => eachProduct._id !== id);
        setProducts(filteredArr);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>All Products</h1>
      {products.map((oneProduct) => {
        return (
          <div key={oneProduct._id}>
            <Link to={`/products/${oneProduct._id}`}>
              <h2>{oneProduct.title}</h2>
            </Link>
            <button className="btn btn-blue"><Link to={`/products/${oneProduct._id}/edit`}>Edit</Link></button>
            <button className="btn btn-amber" onClick={() => onDeleteProduct(oneProduct._id)} >Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
