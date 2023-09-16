import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import imageclg from './images/clgback.jpg';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');


  const handleRegister = (event) => {
    event.preventDefault();

    // Validate form values
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      setPasswordError('');
      return;
    }
    if (password.length < 8) {
      setEmailError('');
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    if (username.length < 3) {
      setEmailError('');
      setPasswordError('');
      setUsernameError('Username must be at least 3 characters long.');
      return;
    }

    // Perform registration logic here

    // Simulating a successful registration
    // Redirect to Login.jsx
    navigate('/Login');

    event.preventDefault();
  
    // Create an object with the registration data
    const registrationData = {
      email: email,
      username: username,
      password: password
    };
  
    // Make a POST request to the server API using axios
    axios.post('http://localhost:3001/reguser', registrationData)
      .then(response => {
        // Handle the response
        if (response.status === 200) {
          // Registration successful
          // Perform any necessary actions (e.g., show success message, redirect, etc.)
          console.log('Registration successful');
          navigate('/Login'); // Redirect to Login.jsx or any other desired action
        } else {
          // Registration failed
          // Handle the error (e.g., show error message)
          console.log('Registration failed');
        }
      })
      .catch(error => {
        // Error occurred during the request
        // Handle the error (e.g., show error message)
        console.log('Error:', error);
      });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

 

  

  return (
    <div>
      <div className="mainform-container">
        <div className="col-md-6">
          <img src={imageclg} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="col-md-4" id="cardcont">
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="error">{usernameError}</p>}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                Already have an account?
                <span id="loginlink" onClick={() => navigate('/Login')}>
                  Login
                </span>
              </small>
            </p>
            <div className="mb-3" style={{ textAlignLast: 'center' }}>
              <button
                className="btn btn-success"
                onClick={handleRegister}
                role="button"
                id='signupbtn'
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
