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
  var urlLink;
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
      <div class="cardHolder">
        <div className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.updated_Date} />
          <script>
          {urlLink = `/UpdateItems/${item.title}`}
          </script>
          <a class="link"><Link to= {urlLink} >Update Item</Link></a>
        </div>
      </div>
    ));
  }

    return (
        <div className="ListItems">
            <nav>
            <i><h2><Link to="/Items" 
            style={{ textDecoration: 'none', color: 'black'}}>
              The Prisoners Dilemma
            </Link></h2></i>
                <ul class="nav-links">
                <li class="nav-item"><Link to="/">Log Out</Link></li>   
                </ul>
            </nav>
            <div class="listBanner">
            {renderItems()}
            </div>
        </div>
    );
};

export default ListItems;
