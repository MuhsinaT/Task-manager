import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
     <Header/>

     <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      

     </Routes>

     <Footer/>

     <ToastContainer/>
    </>
  )
}

export default App
