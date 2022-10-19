import { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
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
import LoginUser from './pages/LoginUser';
import Subscribe from './subscribe';
import Gurus from './pages/Gurus';
import { AuthProvider, useToken } from './Auth'

function GetToken() {
  // Get token from JWT cookie (if already logged in)
  useToken();
  return null
}



function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <GetToken />
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/guru/create" element={<GuruForm />} />
              <Route path="/sportslist" element={<SportsList />} />
              <Route path="/nflgames" element={<NFLGameslist />} />
              <Route path="/signup-user" element={<SignUpUser />} />
              <Route path="/login-user" element={<LoginUser />} />
              <Route path="/signup-guru" element={<SignUp />} />
              <Route path="/login-guru" element={<LoginGuru />} />
              <Route path="/gurus/:guru_id" element={<Subscribe name={"poop"} />} />
              <Route path="/gurus" element={<Gurus />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
