// import background from '../assests/1203prison.jpg';
import './LoggedIn.css';
// import { Link } from 'react-router-dom';

  const mongoose = require('mongoose');

  const ItemSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    updated_Date: {
      type: Date,
      default: Date.now,
    },
  });
  const Item = mongoose.model('item', ItemSchema);
  module.exports = Item;
  // export default Item;