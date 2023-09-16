import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from './images/loginimg.jpg';
import './Login.css'
function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');


  const handleRegister = (event) => {
    event.preventDefault();

    // Validate form values
 
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
    navigate('/Home');
  };


  return (
    <div>
       <div className="mainform-container">
        <div className="col-md-6">
          <img src={loginimg} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="col-md-4" id="cardcont">
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
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
                Don't have an account?
                <span id="loginlink" onClick={() => navigate('/')}>
                  signup
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
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
