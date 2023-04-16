import background from '../assests/1203prison.jpg';
import './LoggedIn.css';
import { Link } from 'react-router-dom';

const cellItems = [
    {
      title: 'Item 1',
      description: 'This is the first item',
      imageLink: 'Image Link',
      publishedDate: 'YYYY-MM-DD',
    },
    {
      title: 'Item 2',
      description: 'This is the second item',
      imageLink: 'Image Link',
      publishedDate: 'YYYY-MM-DD',
    },
    {
      title: 'Item 3',
      description: 'This is the third item',
      imageLink: 'Image Link',
      publishedDate: 'YYYY-MM-DD',
    },
  ];
  
  export default cellItems;

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
  
// function Item() {
//     // return (
//     //     <div className="Home">
//     //         <nav>
//     //              <i><h2>The Prisoners Dilemna</h2></i>
//     //              <ul class="nav-links">
//     //             <li class="nav-item"><Link to="/">Log Out</Link></li>   
//     //             </ul>
//     //         </nav>
//     //     <div class="banner"></div>
//     // </div>
//     // );
// }

// export default Item;