import axios from "axios";
import MainCard from "./MainCard";
import { useState, useEffect } from "react";

function AllCards() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=mussoorie&days=5&hour=12&alerts=yes&aqi=yes"
        );
        setWeatherData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return !weatherData ? (
    <h1>Loading...</h1>
  ) : !weatherData ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <MainCard
        locationName={weatherData.location?.name}
        localtime={weatherData.location?.localtime}
        icon={weatherData?.current?.condition?.icon}
        conditionText ={weatherData.current?.condition?.text}
        currentTemp = {weatherData.current?.temp_c}
        pressure = {weatherData.current?.pressure_mb}
        humidity ={weatherData.current?.humidity}
        visibility ={weatherData.current?.vis_km}
        sunrise ={weatherData.forecast?.forecastday[0].astro.sunrise}
        sunset ={weatherData.forecast?.forecastday[0].astro.sunset}



      />
    </>
  );
}

export default AllCards;
