import background from '../assests/1203prison.jpg';
import { Link } from 'react-router-dom';
import './LoggedIn.css';

function LoggedIn() { 
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><Link to="/">Log Out</Link></li>   
            </ul>
        </nav>

        <div class="banner">
            <ul class="nav-links">
                <li class="nav-item"><Link to="/Items">Items</Link></li>
                <li class="nav-item"><Link to="/UpdateItems">Update Items</Link></li>
            </ul>

            {/* // stuff goes on top of the banner here */}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default LoggedIn;