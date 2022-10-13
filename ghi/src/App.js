import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SportsList from './odds/SportsList.js';
import NFLGameslist from './odds/NFLGamesList.js';

// console.log(process.env.REACT_APP_ODDS_API_KEY);


function App() {
  return (
    <BrowserRouter>
    <div>
  
      <Routes>
      <Route path="/sportslist" element={<SportsList />} />
      <Route path="/nflgames" element={<NFLGameslist />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
