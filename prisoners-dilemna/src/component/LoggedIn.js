import background from '../assests/1203prison.jpg';
import './Home.css';

function LoggedIn() { 
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><a href="/">Log Out</a></li>   
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

export default LoggedIn;