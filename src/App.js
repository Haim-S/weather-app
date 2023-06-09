import React, {useState, useRef} from 'react';
import { searchLocation } from './data/service.data';


function App() {
const [data, setData] = useState(null);
// const [location, setLocation] = useState('');
const locationRef = useRef(null);

const searchInput = ()=> {
    searchLocation(locationRef.current.value).then(responseData => {
      setData(responseData)
    })
    locationRef.current.value= '';
  }
  console.log(data);
// const searchInput = () => {

//     let p = axioSearch(location);
//     setData(p);

//   setLocation('')
// }
// console.log(data);
  return (
    <div className="app">
      <div className='search'>
        {/* <input
         value={location}
         onChange={event => setLocation(event.target.value)}
         onKeyDown={(event)=> {event.key === "Enter" && searchInput()}}
         placeholder='Enter Location'
         type="text"
        /> */}
        <input
        ref={locationRef}
        onKeyDown={(event)=> {event.key === "Enter" && searchInput()}}
        type="text"
        placeholder='Enter Location'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data?.name}</p>
        </div>
        <div className='temp'>
          {/* {data?.main ?  <h1>{data.main.temp}°F</h1> : ""} */}
          <h1>{data?.main.temp.toFixed()}°F</h1>
        </div>
        <div className='description'>
          <p>{data?.weather[0].main}</p>
        </div>
        </div>
      </div>
{data?.name != undefined &&
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>{data?.main?.feels_like.toFixed()}°F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>{data?.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>{data?.wind.speed.toFixed()} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
}

    </div>
  );
}

export default App;
