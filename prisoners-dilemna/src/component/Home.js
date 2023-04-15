import background from '../assests/1203prison.jpg';
import './Home.css';

function Home() { 
    return (
        <div className="Home">
        <nav>
            <i><h2>The Prisoners Dilemna</h2></i>
            <ul class="nav-links">
            <li class="nav-item"><a href="/LoggedIn">Login</a></li>                             
            <li class="nav-item"><a href="/LoggedIn">Create Account</a></li>    
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
