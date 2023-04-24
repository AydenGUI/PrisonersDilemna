import { Link } from 'react-router-dom';
import './Home.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function getItems() {
    axios.get('http://localhost:3001/api/items/get-all')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
});
}

function ListItems () {
    useEffect(() => {
        getItems();
      }, []);

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
};

export default ListItems;
