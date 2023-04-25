import { Link } from 'react-router-dom';
import './ListItems.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
function getItems() {
    axios.get('http://localhost:3001/api/items/get-all')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
});
}*/

function ListItems () {
    
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/items/get-all')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItems = () => {
    return items.map((item) => (
      <div className="card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <img src={item.image} alt={item.updated_Date} />
      </div>
    ));
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
            {renderItems()}
            </div>
        </div>
    );
};

export default ListItems;
