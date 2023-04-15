import background from './assests/1203prison.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <i><h2>The Prisoners Dilemna</h2></i>
        <ul class="nav-links">
          <li class="nav-item"><button className = "btn"><a href="#">Login</a></button></li>                             
          <li class="nav-item"><button className = "btn"><a href="#">Create Account</a></button></li>    
        </ul>
      </nav>
      <header className="App-header">
        <img src={background} className="Background" alt="prison" />
      </header>
    </div>
  );
}

export default App;
