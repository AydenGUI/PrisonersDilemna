import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cellItems } from './CellItems';
import Item from './Item';

const CreateItem = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    title: '',
    description: '',
    published_date: '',
    image: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

   const onSubmit = (e) => {
    e.preventDefault();
    const newItem = new Item(item.title, item.description, item.image, item.published_date);
    cellItems.push(newItem);
    console.log(newItem);
  //    axios
  //      .post('http://localhost:8082/api/items', item)
  //      .then((res) => {
  //        setItem({
  //          title: '',
  //         description: '',
  //         published_date: '',
  //         image: '',
  //       });

  //       // Push to /
  //      navigate('/');
  //     })
  //    .catch((err) => {
  //      console.log('Error in CreateItem!');
  //   });
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
    <div className='CreateItem'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/Loggedin' className='btn btn-outline-warning float-left'>
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
                  value={item.title}
                  onChange={onChange}
                />
              </div>
             

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this item'
                  name='description'
                  className='form-control'
                  value={item.description}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={item.published_date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Image of this Item'
                  name='image'
                  className='form-control'
                  value={item.image}
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

export default CreateItem;