import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { cellItems } from './CellItems';
//import Item from './Item';

const CreateItem = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [updated_Date, setUpdated_Date] = useState('');
 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleUpdated_DateChange = (event) => {
    setUpdated_Date(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

    const data = {
        title: title,
        description: description,
        image: image,
        updated_Date: updated_Date
      };
      
      axios.post('http://localhost:3001/api/items/create-item', data)
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
                 <i><h2>The Prisoners Dilemma</h2></i>
                 <ul class="nav-links">
                <li class="nav-item"><Link to="/">Log Out</Link></li>   
                </ul>
            </nav>
    <div class="banner">
    <div className='CreateItem'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/ListItems' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Item</h1>
            <p className='lead text-center'>Create new item</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Item'
                  name='title'
                  className='form-control'
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
             

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this item'
                  name='description'
                  className='form-control'
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='updated_Date'
                  name='updated_Date'
                  className='form-control'
                  value={updated_Date}
                  onChange={handleUpdated_DateChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Image of this Item'
                  name='image'
                  className='form-control'
                  value={image}
                  onChange={handleImageChange}
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

export default CreateItem;