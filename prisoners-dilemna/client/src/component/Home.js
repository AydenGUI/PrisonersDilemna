import background from '../assests/1203prison.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() { 
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><Link to="/LoggedIn">Login</Link></li>                             
            <li class="nav-item"><Link to="/LoggedIn">Create Account</Link></li>    
            </ul>
        </nav>

        <div class="banner">
            {/* // stuff goes on top of the banner here */}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default Home;
