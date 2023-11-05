import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateProduct() {

    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Category, setCategory] = useState('')
    const [Brand, setBrand] = useState('')
    const params = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        getProductDetails()
    },[])

    const getProductDetails = async ()=>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json()
        setName(result.Name)
        setPrice(result.Price)
        setCategory(result.Category)
        setBrand(result.Brand)
        

    }

const updateProduct = async ()=>{
    console.warn(Name,Price,Category,Brand);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({Name,Price,Category,Brand}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json()
    console.warn(result);
    navigate('/')



}


  return (
    <div>
       <div className='product' >
      <h1 className='alert-primary text-center'>Add Product</h1><hr/>
      <input className='inputBox' type='text' placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} value={Name}/>


      <input className='inputBox' type='number' placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} value={Price}/>


      <input className='inputBox' type='text' placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)} value={Category}/>


      <input className='inputBox' type='text' placeholder='Enter Product Brand' onChange={(e)=>setBrand(e.target.value)} value={Brand}/><br/>


      <button className='btn btn-primary' onClick={updateProduct}>Update Product</button>
      </div>

    </div>
  )
}
