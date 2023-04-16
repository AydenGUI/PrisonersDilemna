import background from '../assests/1203prison.jpg';
import './LoggedIn.css';
import { Link } from 'react-router-dom';

function Item() {
    return (
        <div className="Home">
            <nav>
                 <i><h2>The Prisoners Dilemna</h2></i>
                 <ul class="nav-links">
                <li class="nav-item"><Link to="/">Log Out</Link></li>   
                </ul>
            </nav>
        <div class="banner"></div>
    </div>
    );
}

export default Item;