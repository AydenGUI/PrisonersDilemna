import background from '../assests/1203prison.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

function PageNotFound() { 
    return (
        <div className="Home">
        <nav>
        <i><h2><Link to="/" 
            style={{ textDecoration: 'none', color: 'black'}}>
              The Prisoners Dilemma
            </Link></h2></i>
            <ul class="nav-links">
            <li class="nav-item"><Link to="/LogIn">Login</Link></li>                             
            <li class="nav-item"><Link to="/SignUp">Create Account</Link></li>    
            </ul>
        </nav>

        <div class="banner">
            {<h1>404: Page Not Found</h1>}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default PageNotFound;
