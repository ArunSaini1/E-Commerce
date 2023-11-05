import React from 'react'
import Nav from './Components/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import PrivateComponent from './Components/PrivateComponent'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import ProductList from './Components/ProductList'
import UpdateProduct from './Components/UpdateProduct'
export default function App() {

 
  
  return (
    <>
    <div >
    <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
                <Route path='/logout' element={<h2>Log Out Component</h2>} />
        <Route path='/profile' element={<h2>Profile Component</h2>} />
        </Route>


        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   
    </div>
    {/* <Footer/>  */}

        </>
  )
}
