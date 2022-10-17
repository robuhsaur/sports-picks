import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
import SignUp from './pages/GuruSignUp';
import MyGurus from './MyGuru.js';
import SportsList from './odds/SportsList.js';
import NFLGameslist from './odds/NFLGamesList.js';
import NBAGameslist from './odds/NBAGamesList.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/guru/create" element={<GuruForm />} />
            <Route path="/guru/signup" element={<SignUp />} />
            <Route path="onlypick/myguru" element={<MyGurus />} />
            <Route path="/sportslist" element={<SportsList />} />
            <Route path="/nflgames" element={<NFLGameslist />} />
            <Route path="/nbagames" element={<NBAGameslist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
