import React from 'react'
import './App.css'
import Home from './components/Home'
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Register from './components/Register'
import Consent from './components/Consent'
import Login from './components/Login'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Register/>}/>   
        
        <Route path='/Login' element={<Login/>}/>   

        <Route path='/Home' element={<Home/>}/>      
           
        <Route path='/consentletter' element={<Consent/>}/>      

    </Routes>
    </BrowserRouter>
  )
}

export default App
