import axios from 'axios';

const API_KEY = "f2871a7edbf59c4d7b6df04a6ff89175";

// const city_name = canada;


export const searchLocation = (city_name) => {
    console.log(city_name);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${API_KEY}`;
    console.log(url);
   return axios.get(url).then((response) => response.data).catch((error)=>{
    console.error('Error fetching data:', error);
    })
}



