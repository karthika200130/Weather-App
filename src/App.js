import { Weather } from './components/weather';
import './App.css'
import searchicon from './Images/search img.jpg'
import cloudy from './Images/cloudy sun.avif'
import rainy from './Images/rain images.jpg'
import snow from './Images/snow img.png'
import sun from "./Images/9055356.png"
import night from "./Images/night.png"
import haze from "./Images/haze.png"
import { useEffect, useState } from 'react';




function App() {
  const [text, setText] = useState("chennai")
  const [logo, setLogo] = useState(sun);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("CHENNAI");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [winds, setWind] = useState(0);
  const [humids, setHumid] = useState(0);
  const [load, setLoad] = useState(false);
  const [citynot, setCitynot] = useState(false);
  const weatherIconMap = {
    "01d": sun,
    "01n": night,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d":snow,
    "04n": snow,
    "09d": rainy,
    "09n": rainy,
    "10d": rainy,
    "10n": rainy,
    "50d": haze,
    "50n": haze,

  }
  const api = "b0b59255057d05dbe2641e78911ee011"
  const search = async () => {
    setLoad(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api}&units=Metric`;
    try {

      let res = await fetch(url);
      let data = await res.json()
      console.log(data)
      if (data.cod === "404") {
        console.log("City Not Found");
        setCitynot(true);
        setLoad(false)
        return;
      }
      setHumid(data.main.humidity);
      setWind(data.wind.speed);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setCountry(data.sys.country);
      setCity(data.name)
      setTemp(Math.round(data.main.temp))
      const weatherCode = data.weather[0].icon;
      setLogo(weatherIconMap[weatherCode] || rainy);
      setCitynot(false)



    }
    catch (error) {
      console.log("show the error message", error.message)
    }
    finally {
      setLoad(false)
    }


  }
  const handleText = (event) => {
    setText(event.target.value);
  }
  const handleKey = (e) => {
    if (e.key === "Enter") {
      search();
    }
  }
  const handleClick = () => {
    search();
  }
useEffect(()=>{
  search();
},[])

   return (
    <div>
      <div className='container'>
        <div className='input-container'>
          <input type='text' placeholder='search city' className='cityinput transparent' value={text}
            onChange={handleText} onKeyDown={handleKey}

          />
          <div onClick={handleClick}>
            <img src={searchicon} alt='img' className='img-size' />
          </div>
        </div>
       
         {load &&<div className='load'>Loading...</div>}
         {citynot &&<div className='city'>City not Found</div>}
         {!load && !citynot && <Weather logo={logo} temp={temp} city={city} country={country} lat={lat} lon={lon}
          humids={humids} winds={winds} />}
      </div>
      


    </div>
  );
}

export default App;
