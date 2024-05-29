import { useEffect, useState } from "react";
import axios from 'axios';

function MainCard() {
    const [weatherData, setWeatherData]= useState([]);
    const somedependency = false;

    useEffect(()=>{
        async function fetchData() {
            try{
                const res = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=dehradun&days=5&hour=12&alerts=yes&aqi=yes');
                setWeatherData(res.data);
                console.log(res.data);

            }
            catch(error){
                console.error("An error occurred while fetching data:", error);
            }  
        }
        fetchData();
    } ,[]);

   
  
  return (
    !weatherData ? (<h1>Loading...</h1>):
    <>
      <div>Location_Name: {weatherData.location.name}</div>
      <div>
        <p>{weatherData.location.localtime}</p>
      </div>

      <div>{weatherData.current.condition.text}</div>

      <div>
        <h1>{weatherData.current.temp_c}</h1> <p>C</p>
      </div>

      <div>Pressure: {
        weatherData.current.pressure_mb
        
        }</div>

      <div>humidity:{weatherData.current.humidity}</div>

      <div>Visibility:{weatherData.current.vis_km}</div>
    </>
  );
}
export default MainCard;
