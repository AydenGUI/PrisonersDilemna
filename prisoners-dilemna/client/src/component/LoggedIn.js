import background from '../assests/1203prison.jpg';
import { Link } from 'react-router-dom';
import './LoggedIn.css';
import React, { useState } from 'react';
import axios from 'axios';

function LoggedIn() { 
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

    const data = {
        email: email,
        password: password
      };
  
      axios.post('/api/insert', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
    });
  };

    
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><Link to="/">Log Out</Link></li>   
            </ul>
        </nav>

        <div class="banner">
            <form onSubmit={handleSubmit}>
        <label>
         Email:
         <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      < label>
         Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
         </label>
        <button type="submit">Submit</button>
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

export default LoggedIn;