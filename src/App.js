import './App.css';
import Login from './component/Login';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Accounts from './component/Accounts';
import Registration from './component/Registration';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Registration/>} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
      </Routes>
    </div>
  );
}

export default App;
