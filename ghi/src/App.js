import { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
import * as GuruSignUp from './pages/GuruSignUp';
import MyGurus from './MyGuru.js';
import SportsList from './odds/SportsList.js';
import NFLGameslist from './odds/NFLGamesList.js';
import SignUp from './pages/SignUp.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUpUser from './pages/SignUpUser.js';
import Home from './pages/Home.js';
import LoginGuru from './pages/LoginGuru.js';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/guru/create" element={<GuruForm />} />
            <Route path="/guru/signup" element={<GuruSignUp />} />
            <Route path="onlypick/myguru" element={<MyGurus />} />
            <Route path="/sportslist" element={<SportsList />} />
            <Route path="/nflgames" element={<NFLGameslist />} />
            <Route path="/" element={<Home/>} />
            <Route path="/signup-guru" element={<SignUp/>}/>
            <Route path="/signup-user" element={<SignUpUser />} />
            <Route path="/login-guru" element={<LoginGuru />} />
          </Routes>
        </div>
      </Router>
    </div>
   
  );
}

export default App;
