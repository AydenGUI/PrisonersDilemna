import background from './assests/1203prison.jpg';
import './App.css';
import Home from './component/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoggedIn from './component/LoggedIn';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/LoggedIn' element={<LoggedIn/>}/>          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
