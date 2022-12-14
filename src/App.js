import React from 'react';
import axios from 'axios';
import video1 from "./assets/videos/Clouds.mp4"
import video2 from "./assets/videos/Drizzle.mp4"
import video3 from "./assets/videos/misty.mp4"
import video4 from "./assets/videos/Rain.mp4"
import video5 from "./assets/videos/Snow.mp4"
import video6 from "./assets/videos/Thunderstorm.mp4"
import video7 from "./assets/videos/Clear.mp4"
import video8 from "./assets/videos/Default.mp4"


// import icons
import { BsCloudDrizzle,
  BsFillCloudFill, 
  BsFillCloudDrizzleFill, 
  BsFillCloudRainFill, 
  BsSnow2,
  BsFillCloudHazeFill,
  BsSun,
} from "react-icons/bs";

import { IoThunderstormSharp } from "react-icons/io5";


const App = () => {
  // const videoPath = process.nev.PUBLIC_URL;
  

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
    let vid = '';

    if(typeof data.main != "undefined"){
      if(data.weather[0].main == "Clouds"){
        ico = <BsFillCloudFill/>
        vid = video1;
      }else if(data.weather[0].main == "Thunderstorm"){
        ico = <IoThunderstormSharp/>
        vid = video6;
      }else if(data.weather[0].main == "Drizzle"){
        ico = <BsFillCloudDrizzleFill/>
        vid = video2;
      }else if(data.weather[0].main == "Rain"){
        ico = <BsFillCloudRainFill/>
        vid = video4;
      }else if(data.weather[0].main == "Snow"){
        ico = <BsSnow2/>
        vid = video5;
      }else if(data.weather[0].main == "Clear"){
        ico = <BsSun/>
        vid = video7;
      }else{
        ico = <BsFillCloudHazeFill/>
        vid = video3;
      }
    }else{
      vid = video8
    }

    // setVideos(prevVideo => "sjkdhjks")

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

    


    
  return(

    <main>
      <div className='container-fluid m-0 p-0'>
        <div class="card text-bg-dark m-0 p-0 position-relative">
          <video src={vid} autoPlay muted loop type='video/mp4'/>
          <div class="card-img-overlay">
            <div className='date-time m-2 text-center'>
              {day}, {month}, {date}, {year}
              <br/>
              {time}
            </div>
            <div className='search d-flex justify-content-center'>
              <input 
                type='text'
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress = {search}
                className="p-3 rounded-5 border-0"
                placeholder='Search City....'
              />
            </div>
            <div className='top text-center p-2'>
              <div className='location d-flex justify-content-center'>
                {data.weather? <h2>{data.name}</h2>: null}
                {data.weather? <h2>, {data.sys.country}</h2>: null}
              </div>
              <div className='temp'>
                {data.main ? <h1>{((data.main.temp - 32.0) * 5/9).toFixed(2)} &deg;C</h1> : null}
              </div>
              <div className='icon'>
                {ico}
              </div>
              <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p>: null}
              </div>
            </div>

            {data.name != undefined &&
              <div className="bottom  p-3 d-block d-md-flex justify-content-center text-center overlay-bottom">
                <div className='feels mr-5'>
                  {data.main ? <p>{((data.main.feels_like - 32.0) * 5/9).toFixed(2)} &deg;C</p>: null}
                  <p className="bottom-txt">Feel Like</p>
                </div>
                <div className='humidity mx-5'>
                  {data.main ? <p>{data.main.humidity}%</p>: null}
                  <p className="bottom-txt">Humidity</p>
                </div>
                <div className='wind'>
                  {data.main ? <p>{data.wind.speed}MPH</p>: null}
                  <p className="bottom-txt">Wind</p>
                </div>
              </div>
            }
            
          </div>
        </div>
        {/* <img src={process.env.PUBLIC_URL + "./images/m1.jpg"}/> */}
      </div>
    </main>

  );
}

export default App;