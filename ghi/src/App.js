import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
import SignUp from './pages/GuruSignUp';
// import Nav from './Nav';
import MyGurus from './pages/MyGuru.js';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/guru/create" element={<GuruForm />} />
            <Route path="/guru/signup" element={<SignUp />} />
            <Route path="onlypick/myguru" element={<MyGurus />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
