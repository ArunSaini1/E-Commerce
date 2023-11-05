import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };


  const deleteProduct = async(id)=>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:"DELETE"
    });
    result = await result.json()
    if(result)
    {
        getProducts()
    }
  }

  const searchHandle = async (e)=>{
    let key = e.target.value;
    if(key)
    {
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        if(result)
        {
            setProducts(result)
        }
    }else{
        getProducts() 
    }
    

  }

  return (
    <div>
      <h2 className="alert-primary text-center">Product List</h2>
      <hr />
      <input type="text" placeholder="Search Product" className="inputBox" onChange={searchHandle}/>
      <Link to='/add'><button className=" btn btn btn-success mt-2">Add Products</button></Link><br/>
      <b>Total Products : {Products.length}</b>
      <table className="table">
        <thead>
            <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {Products.length>0 ? Products.map((ob,index)=><tr key={ob._id}>
                <td>{index+1}</td>
                <td>{ob.Name}</td>
                <td>{ob.Price}</td>
                <td>{ob.Category}</td>
                <td>{ob.Brand}</td>
                <td>
                    <button onClick={()=>deleteProduct(ob._id)} className="btn btn-danger">Delete</button>&nbsp;&nbsp;
                    <Link to={'/update/'+ob._id}><button className="btn btn-primary">Edit</button></Link>&nbsp;&nbsp;
              <Link to='/cart'><button className="btn btn-success">Add To Cart</button></Link>
                </td>
            </tr>)
            : <h2 className="alert-danger">No Result Found</h2>
            }
        </tbody>
      </table>
      
    </div>
  );
}
