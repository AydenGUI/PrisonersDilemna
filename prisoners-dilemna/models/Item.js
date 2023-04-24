// import background from '../assests/1203prison.jpg';
// import './LoggedIn.css';
// import { Link } from 'react-router-dom';

  const mongoose = require('mongoose');

  const ItemSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    updated_Date: {
      type: Date,
      default: Date.now,
    },
  });
  module.exports = Item = mongoose.model('item', ItemSchema);
  
  // export default Item;
