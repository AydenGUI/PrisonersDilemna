import background from './assests/1203prison.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <i><h2>The Prisoners Dilemna</h2></i>
        <ul class="nav-links">
          <li class="nav-item"><a href="#">Login</a></li>                             
          <li class="nav-item"><a href="#">Create Account</a></li>    
        </ul>
      </nav>
      <header className="App-header">
        <img src={background} className="Background" alt="prison" />
      </header>
    </div>
  );
}

export default App;
