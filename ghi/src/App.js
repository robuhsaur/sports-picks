import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
// import Nav from './Nav';
import MyGurus from './MyGuru.js';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="onlypick/myguru" element={<MyGurus/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
