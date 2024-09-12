import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const apiKey = "574f16c9fb32a205a7281e1278f33bfe";
  const [inpCity, setInputCity] = useState("")
  const [data, setData] = useState(0)

  const getWeatherAPI = (cityNme) => {

    if(!cityNme) return

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNme + "&appid=" + apiKey;

    axios.get(apiURL).then((res) =>{
      // console.log(res);
      setData(res.data);
    }).catch((err) => {
      console.log("err", err);
    })
  }

  const handleInput = (e) =>{
    setInputCity(e.target.value);
  }

  const handleSearch = () =>{
    getWeatherAPI(inpCity);
  }

  return (
    <>
      <div className="weather_bg">
        <div className="content">
          <h1>Weather App</h1>

          <div className="search_form">
            <input className="input_field" type="text" value={inpCity} onChange={handleInput} placeholder="Search here..." />
            <button type="button" className="search_button" onClick={handleSearch}>Search</button>
          </div>


        </div>
      </div>

      {Object.keys(data).length > 0 &&
      
      <div className="weather_result">
        <h1>Weather In {data.name}</h1>
        <div className="weather_info">
          <p className="temperature">{((data?.main?.temp) - 273.15).toFixed(0)}°C</p>
          <p className="location">{data.name}, {data.sys.country}</p>
        </div>
      </div>

      }

    </>
  )
}

export default App
