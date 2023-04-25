import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteItem = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

   const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

      axios.delete('http://localhost:3001/api/items/delete-item', {params: {title: title}})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
    });
    navigate('/Items');
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
    <div className='DeleteItem'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/ListItems' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Delete Item</h1>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Item'
                  name='title'
                  className='form-control'
                  value={title}
                  onChange={onChange}
                />
              </div>
              

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default DeleteItem;