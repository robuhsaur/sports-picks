import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
import SignUp from './pages/GuruSignUp';
import MyGurus from './pages/MyGuru.js';
import Login from './pages/LoginGuru';
import Home from './pages/Home'

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/guru/create" element={<GuruForm />} />
            <Route path="/guru/signup" element={<SignUp />} />
            <Route path="/guru/login" element={<Login />} />
            <Route path="onlypick/myguru" element={<MyGurus />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
