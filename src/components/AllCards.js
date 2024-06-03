// components/AllCards.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/slices/locationSlice";  // Correct import path
import MainCard from "./MainCard";
import FutureWeatherCard from "./FutureWeatherCard";
import Highlights from "./Highlights";

function AllCards() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.location.data);  // Corrected state access
  const weatherStatus = useSelector((state) => state.location.status);
  const weatherError = useSelector((state) => state.location.error);

  useEffect(() => {
    dispatch(fetchWeatherData("dehradun"));
  }, [dispatch]);

  if (weatherStatus === "loading") {
    return <h1>Loading...</h1>;
  } else if (weatherStatus === "failed") {
    return <h1>An error occurred: {weatherError}</h1>;
  }

  return weatherData ? (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <MainCard
          locationName={weatherData.location?.name}
          locationRegion={weatherData.location?.region}
          locationCountry = {weatherData.location?.country}
          localtime={weatherData.location?.localtime}
          icon={weatherData?.current?.condition?.icon}
          conditionText={weatherData.current?.condition?.text}
          currentTemp={weatherData.current?.temp_c}
          pressure={weatherData.current?.pressure_mb}
          humidity={weatherData.current?.humidity}
          visibility={weatherData.current?.vis_km}
          sunrise={weatherData.forecast?.forecastday[0].astro.sunrise}
          sunset={weatherData.forecast?.forecastday[0].astro.sunset}
          feelslike={weatherData.current?.feelslike_c}
        />
      </div>
      <div className="col-span-2 grid-rows-2">
        <FutureWeatherCard {...weatherData.forecast} />
        <Highlights {...weatherData.current} aqi={weatherData.current?.air_quality} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default AllCards;
