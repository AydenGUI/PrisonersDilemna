import { Link } from 'react-router-dom';
import './Home.css';
import React, { useState } from 'react';
// const Item = require("../../models/Item");

function Item() { 
 
    return (
        <div className="Home">
        <nav>
        <i><h2><Link to="/Items" 
            style={{ textDecoration: 'none', color: 'black'}}>
              The Prisoners Dilemma
            </Link></h2></i>
            <ul class="nav-links">
            <li class="nav-item"><Link to="/">Log Out</Link></li>   
            </ul>
        </nav>

        <div class="banner">
            <ul class="nav-links">
                <li class="nav-item"><Link to="/ListItems">Get All Items</Link></li>
                <li class="nav-item"><Link to="/CreateItems">Create Items</Link></li>
                <li class="nav-item"><Link to="/UpdateItems">Update Items</Link></li>
                <li class="nav-item"><Link to="/DeleteItems">Delete Items</Link></li>
            </ul>

            {/* // stuff goes on top of the banner here */}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default Item;