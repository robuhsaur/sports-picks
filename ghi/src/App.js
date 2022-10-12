import { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import GuruForm from './pages/GuruForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/GuruSignUp';

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
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/guru/create" element={<GuruForm />} />
            <Route path="/guru/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
