import NavBar from'./Components/Navbar'
import Today from'./Components/Today'
import Total from'./Components/Total'

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://covid19.th-stat.com/api/open/today")
      const responseData = await response.json();
      setData(responseData);
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <NavBar date={data? data.UpdateDate : "-"}/>
      <Today 
        newConfirmed={data? data.NewConfirmed : "-"}
        newRecovered={data? data.NewRecovered : "-"}
        newDeaths={data? data.NewDeaths : "-"}
      />

      <Total
      confirmed={data? data.Confirmed : "-"}
      recovered={data? data.Recovered : "-"}
      deaths={data? data.Deaths : "-"}
      hospitalized={data? data.Hospitalized : "-"}
      />
    </div>
  );
}

export default App;
