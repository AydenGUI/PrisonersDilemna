import background from '../assests/1203prison.jpg';
import { Link } from 'react-router-dom';
import './LoggedIn.css';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const bcrypt = require('bcryptjs');

function SignUp() { 
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hash the password
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        console.error(err);
        return;
      }
      const data = {
        email: email,
        password: hash
      };
      // Make a POST request to the server
      axios.post('http://localhost:3001/api/create-users', data)
        .then((response) => {
          console.log(response);
          if (response.status == 409)
            prompt(response);
        })
        .catch((error) => {
          if (error.response == 409) {
            console.log("User already exsists");
          } else {
            console.log(error);
          }
      });

      navigate('/LogIn');
    });
  };
    
  return (
    <div className="Home">
      <nav>
        <i><h2>The Prisoners Dilemma</h2></i>
        <ul class="nav-links">
          <li class="nav-item"><Link to="/">Log Out</Link></li>   
        </ul>
      </nav>

      <div class="banner">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required/>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required/>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
