import React, {useState, useRef} from 'react';
import { searchLocation } from './data/service.data';


function App() {
const [data, setData] = useState({});
// const [location, setLocation] = useState('');
const locationRef = useRef(null);

const searchInput = ()=> {
    searchLocation(locationRef.current.value).then((res)=> {
      setData(res);
    });
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
            <p>Dallas</p>
        </div>
        <div className='temp'>
          <h1>60°F</h1>
        </div>
        <div className='description'>
          <p>Clouds</p>
        </div>
        </div>
      </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
    </div>
  );
}

export default App;
