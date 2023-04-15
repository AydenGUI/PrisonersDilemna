import background from '../assests/1203prison.jpg';
import './Home.css';

function LoggedIn() { 
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><a href="/">Login</a></li>                             
            <li class="nav-item"><a href="/">Create Account</a></li>    
            </ul>
        </nav>

        <div class="banner">
          <h1>LOGGED IN</h1>
            {/* // stuff goes on top of the banner here */}
        </div>

        {/* <header className="App-header">      */}
        {/* </header> */}
        </div>
    );
}

export default LoggedIn;