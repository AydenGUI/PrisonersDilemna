import background from '../assests/1203prison.jpg';
import './LoggedIn.css';
import { Link } from 'react-router-dom';

  class Item {
    constructor(title, description, imageLink, publishedDate) {
      this._title = title;
      this._description = description;
      this._imageLink = imageLink;
      this._publishedDate = publishedDate;
    }
  
    get title() {
      return this._title;
    }
  
    set title(title) {
      this._title = title;
    }
  
    get description() {
      return this._description;
    }
  
    set description(description) {
      this._description = description;
    }
  
    get imageLink() {
      return this._imageLink;
    }
  
    set imageLink(imageLink) {
      this._imageLink = imageLink;
    }
  
    get publishedDate() {
      return this._publishedDate;
    }
  
    set publishedDate(publishedDate) {
      this._publishedDate = publishedDate;
    }
  }
  
 export default Item;