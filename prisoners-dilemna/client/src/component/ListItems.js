import { Link } from 'react-router-dom';
import './Home.css';
import React, { useState } from 'react';

function ListItems () {
    return (
        <div className="Home">
            <nav>
                <i><h2>The Prisoners Dilemna</h2></i>
                <ul class="nav-links">
                <li class="nav-item"><Link to="/">Log Out</Link></li>   
                </ul>
            </nav>
            <div class="banner">
            </div>
        </div>
    );
}
export default ListItems;
