import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import CardMain from './components/CardMain';
import CityCard from './components/CityCard';

function App() {
  const [city, setCity] = useState("")
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    console.log(`Lat : ${lat} Lon : ${lon}`)

  }, [lat, lon]);


  // console.log(data)

  return (
    <>
      <SearchBox city={city} setCity={setCity} />
      {city ? <CityCard city={city} /> : <></>}
      {(lat !== "" && lon !== "" && city === "") ? <CardMain lat={lat} lon={lon} /> : <h1>Loading....</h1>}



    </>
  );
}

export default App;
