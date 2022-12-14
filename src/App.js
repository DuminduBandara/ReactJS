import React from 'react';
import axios from 'axios';
import SearchWeather from './components/searchWeather'

// import icons
import { BsCloudDrizzle,
  BsFillCloudFill, 
  BsFillCloudDrizzleFill, 
  BsFillCloudRainFill, 
  BsSnow2,
  BsFillCloudHazeFill
} from "react-icons/bs";

import { IoThunderstormSharp } from "react-icons/io5";


const App = () => {

  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6b118f3c4f9a96fd5fc0e4555331566e`

  const search = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    }
    let ico = null;
    if(typeof data.main != "undefined"){
      if(data.weather[0].main == "Clouds"){
        ico = <BsFillCloudFill/>
      }else if(data.weather[0].main == "Thunderstorm"){
        ico = <IoThunderstormSharp/>
      }else if(data.weather[0].main == "Drizzle"){
        ico = <BsFillCloudDrizzleFill/>
      }else if(data.weather[0].main == "Rain"){
        ico = <BsFillCloudRainFill/>
      }else if(data.weather[0].main == "Snow"){
        ico = <BsSnow2/>
      }else{
        ico = <BsFillCloudHazeFill/>
      }
    }

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month: 'long'});
    let day = d.toLocaleString("default", {weekday: 'long'});
    
    let time = d.toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
      second:  '2-digit'
    })

    

    const videopath = process.nev.PUBLIC_URL;


    
  return(

    <main>
      <div className='container'>
        <video autoplay muted loop>
          <source src={`${videopath}/images/Pexels Videos 1779202.mp4`} type='video/mp4'/>
        </video>
        <div className='date-time'>
          {day}, {month}, {date}, {year}<br/>
          {time}
        </div>
        <div className='search'>
          <input 
            type='text'
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress = {search}
          />
          </div>
          
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{((data.main.temp - 32.0) * 5/9).toFixed(2)}</h1> : null}
          </div>
          <div className='icon'>
            {ico}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>

        {data.name != undefined &&

        <div className="bottom">
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like}</p>: null}
            <p>Feel Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p>: null}
              <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.main ? <p>{data.main.wind}MPH</p>: null}
            <p>Wind</p>
          </div>
        </div>
      }
      </div>
    </main>

  );
}

export default App;