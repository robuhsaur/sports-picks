import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
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
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);  

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
      console.log('fastapi url: ', url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, [])


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup-guru" element={<SignUp/>}/>
          <Route path="/signup-user" element={<SignUpUser />} />
          <Route path="/login-guru" element={<LoginGuru />} />
        </Routes>
    </Router>
  );
}

export default App;
