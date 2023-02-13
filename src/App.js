import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import PgFOF from './Components/PgFOF';
import Cart from './Components/Cart';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/userprofile" element={<Profile/>} />
    <Route path="*" element={<PgFOF />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
