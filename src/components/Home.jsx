import React, { useState, useEffect }  from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import imglogo from './images/employera.jpg'
import {AiOutlineUser }from 'react-icons/ai'
function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

 
  const handleKnowMore = () => {
    navigate('/consentletter');
  };
  return (
    <>
   <nav className={`navbar fixed-top bg-body-tertiary ${isScrolled ? 'expand' : ''}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ display: 'flex' }}>
      <img src={imglogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id="logoImgg" />
      <div className="lognme">
        <span id="logoName">Employera</span>
        <span>HR Consultancy</span>
      </div>
    </a>
    {isScrolled && (
      <div className="contact-info">
        <span>Contact: +1 234 567 890</span>
        <span>Email: info@example.com</span>
      </div>
    )}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">
         <AiOutlineUser/><span>Username</span> 
        </a>
      </li>
    </ul>
  </div>
</nav>

      <div class="row" id='homeMain'>
        <div class="col-sm-6 mb-3 mb-sm-0" style={{maxWidth:'418px',alignSelf:'center'}} >
          <div class="card" id='card1'>
          <img src="https://img.freepik.com/premium-vector/signed-contract-agreement-paper-flat-design_229280-101.jpg?w=740" class="card-img-top" alt="..." style={{maxWidth:"450px",alignSelf:'center'}} />
            <div class="card-body">
              <h5 class="card-title">Consent Letter</h5>
              <p class="card-text">The letter should include a clear statement of consect, indicating that the user agrees to the terms of the agreement.</p>
              <a href="#" class="btn btn-primary" id='conbuttons' onClick={handleKnowMore}>Know More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Home
