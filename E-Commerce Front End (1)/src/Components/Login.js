import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [Email, setEmail] = useState('')
    const [Password,setPassword]=useState('')
    const navigate = useNavigate()


    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }

    })

    const handleLogin = async ()=>{

        let result = await fetch('http://localhost:5000/login',{
            method : 'POST',
            body : JSON.stringify({Email,Password}),
            headers : {
                'Content-Type':'application/json'
            }
        });


        result = await result.json();
        console.warn(result);
        if(result.Name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')

        }else{
            alert("Please Enter Correct Details")
        }

    }

    const showPassword =()=>{
      var pass = document.getElementById("password");
      if(pass.type==="password")
      {
        pass.type="text"
      }else{
        pass.type="password";
      }

    }
      return (
    <>
    <div className="container-fluid ">
    <div className="row">
      <div className="slider col-xl-6 p-0 ">


       
     
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="500">
      <img src="https://wallpapers.com/images/hd/e-commerce-1900-x-1118-wallpaper-r2k1ldol65vss423.jpg" class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item"  data-bs-interval="500">
      <img src="https://wallpapers.com/images/hd/e-commerce-1500-x-990-wallpaper-zl7g6onffp2fmtn0.jpg" class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item">
      <img src="https://miro.medium.com/v2/resize:fit:611/1*2xDw2q-lef-BiBrM_EHr_g.jpeg" class="d-block w-100" alt="..."/>
    
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
        </div>
    
      
      
  
      <div className="col-xl-6">
      <div className="login">
        <h1>Login Page</h1>
<div className="mt-3">
 <h5> Enter Your Email : </h5>
      <input value={Email} onChange={(e)=>setEmail(e.target.value)} className="inputBox" type="email" placeholder="Enter Your Email"
        />
</div>
<div className="mt-3">
<h5>Enter Your Password :</h5>
      <input id="password" value={Password} onChange={(e)=>setPassword(e.target.value)} className="inputBox" type="password" placeholder="Enter Your Password"/>
      <label><input type="checkbox" id="checkbox" onClick={showPassword}/>Show Password</label>
</div>

    
      <button className="btn btn-success mt-2" onClick={handleLogin}>Login</button>&nbsp;&nbsp;&nbsp;
      <Link to='/signup'>New User</Link>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}
