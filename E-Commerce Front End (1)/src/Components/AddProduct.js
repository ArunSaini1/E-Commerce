import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Brand, setBrand] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const addProduct = async () => {
    console.warn(!Name);
    if (!Name || !Price || !Category || !Brand) {
      setError(true);
      return false;
    }

    console.warn(Name, Price, Category, Brand);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ Name, Price, Category, Brand, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate('/')
    
  };

  return (
    <div className="w-[50vw] h-[80vh]">
      <div className="product">
        <h1 className="alert-primary text-center">Add Product</h1>
        <hr />
        <label>
          {" "}
          Enter Product Name :
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
        </label><br/>
        {error && !Name && (
          <span className="invalid-input">Enter Valid Name</span>
        )}

        <label>
          {" "}
          Enter Product Price :{" "}
          <input
            className="inputBox"
            type="number"
            placeholder="Enter Product Price"
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
          />
        </label><br/>
        {error && !Price && (
          <span className="invalid-input">Enter Valid Price</span>
        )}

        <label>
          Enter Product Category :
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Product Category"
            onChange={(e) => setCategory(e.target.value)}
            value={Category}
          />
        </label><br/>
        {error && !Category && (
          <span className="invalid-input">Enter Valid Category</span>
        )}

        <label>
          {" "}
          Enter Product Brand :
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Product Brand"
            onChange={(e) => setBrand(e.target.value)}
            value={Brand}
          />
        </label>
        <br />
        {error && !Brand && (
          <span className="invalid-input">Enter Valid Brand</span>
        )}

        <button className="btn btn-success" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
