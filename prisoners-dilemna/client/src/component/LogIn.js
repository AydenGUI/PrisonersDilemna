import background from '../assests/1203prison.jpg';
import { Link, Navigate } from 'react-router-dom';
import './LoggedIn.css';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function LogIn() { 
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Might need to add async and await for this function
  const handleSubmit = (event) => {
    event.preventDefault();



    // Handle form submission

    const data = {
        email: email,
        password: password
      };
      
      axios.post('http://localhost:3001/api/login-users', data)
        .then((response) => {
          // localStorage.setItem("auth-token",response.data.token);
          // navigate("/Items");
          axios.post('http://localhost:3001/tokenIsValid', response)
            .then((response) => {
              navigate("/Items");
            })
            .catch((error) => {
              console.log(error);
            })
        })
        .catch((error) => {
          alert("Incorrect Password or Username");
          console.log(error);
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
        < label>
         Password:
            <input type="password" value={password} onChange={handlePasswordChange} required/>
         </label>
        <button type="submit">Log In</button>
        </form>
            {/* <ul class="nav-links">
                <li class="nav-item"><Link to="/Items">Items</Link></li>
                <li class="nav-item"><Link to="/CreateItems">Create Items</Link></li>
                <li class="nav-item"><Link to="/UpdateItems">Update Items</Link></li>
                <li class="nav-item"><Link to="/DeleteItems">Delete Items</Link></li>
            </ul> */}

            {/* // stuff goes on top of the banner here */}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default LogIn;