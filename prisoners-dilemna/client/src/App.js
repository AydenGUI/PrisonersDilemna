import background from './assests/1203prison.jpg';
import './App.css';
import Home from './component/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoggedIn from './component/LoggedIn';
// import Item from './component/Item';
import UpdateItemInfo from './component/UpdateItemInfo';
import CreateItem from './component/CreateItem';
import DeleteItem from './component/DeleteItem';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/LoggedIn' element={<LoggedIn/>}/>          
        {/* <Route exact path='/Items' element={<Item/>}/> */}
        <Route exact path='/CreateItems'element={<CreateItem/>}/>
        <Route exact path='/UpdateItems' element={<UpdateItemInfo/>}/>
        <Route exact path='/DeleteItems' element={<DeleteItem/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
