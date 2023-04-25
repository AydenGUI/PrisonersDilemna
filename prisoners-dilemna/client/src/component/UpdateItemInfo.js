 import React, { useState, useEffect } from 'react';
 import { Link, useParams, useNavigate } from 'react-router-dom';
 import axios from 'axios';
import './Home.css'

function UpdateItemInfo() { //props
    const [item, setItem] = useState({
      title: '',
      description: '',
      published_date: '',
      image: '',
    });

    
    const { title } = useParams();
    const navigate = useNavigate();
    if (title !== undefined) {
    item.title = title;
    }
    const putUrl = `http://localhost:3001/api/items/update-item/${item.title}`;
    const getUrl = `http://localhost:3001/api/items/show-item/${item.title}`;
  
    // console.log("Put and get urls");
    // console.log(putUrl)
    // console.log(getUrl)
    useEffect(() => {
      if (item.title !== undefined && title !== undefined) {
      axios
        .get(getUrl)
        .then((res) => {
          setItem({
            title: res.data.title,
            description: res.data.description,
            published_date: res.data.published_date,
            image: res.data.image,
          });
        })
        .catch((err) => {
          alert("Error: Title not found");
        });
      }
      }, [title]);

    const onChange = (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      const data = {
        title: item.title,
        description: item.description,
        published_date: item.published_date,
        image: item.image,
      };
      if (data.title !== undefined) {
      axios
        .put(putUrl, data)
        .then((res) => {
          navigate(`/Items`);
        })
        .catch((err) => {
          alert("Error: Title not found");
        });
      } //if
    navigate("/Items");
    return data;
    };
    return (
        <div className = 'Home'>
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
      <div className='UpdateItemInfo'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <a class="goitem"><Link to='/ListItems' className='btn btn-outline-warning float-left'>
                Show Item List
              </Link></a>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Edit Item</h1>
              <p className='lead text-center'>Update Item's Info</p>
            </div>
          </div>
  
          <div className='col-md-8 m-auto'>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
              {/* <label htmlFor='title'>Title</label>  */}
                <input
                  type='text'
                  placeholder='Title of the Item'
                  name='title'
                  className='form-control'
                  value={item.title}
                  onChange={onChange}
                />
              </div>
              <br />
  
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea
                  type='text'
                  placeholder='Description of the Item'
                  name='description'
                  className='form-control'
                  value={item.description}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <label htmlFor='description'>Item</label>
                <textarea
                  type='text'
                  placeholder='Item image'
                  name='image'
                  className='form-control'
                  value={item.image}
                  onChange={onChange}
                />
              </div>
              <br />
  
              <div className='form-group'>
                {/* <label htmlFor='published_date'>Published Date</label> */}
                <input
                  type='text'
                  placeholder='Published Date'
                  name='published_date'
                  className='form-control'
                  value={item.published_date}
                  onChange={onChange}
                />
              </div>
              <br />
  
              <button
                type='submit'
                className='btn btn-outline-info btn-lg btn-block'
              >
                Update Item
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  
}

export default UpdateItemInfo;
