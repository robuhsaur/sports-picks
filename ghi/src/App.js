import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SportsList from './odds/SportsList.js';

// console.log(process.env.REACT_APP_ODDS_API_KEY);


function App() {
  // const [launch_info, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);  

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])


  return (
    <BrowserRouter>
    <div>
      {/* <ErrorNotification error={error} />
      <Construct info={launch_info} /> */}
      <Routes>
      <Route path="/sportslist" element={<SportsList />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
