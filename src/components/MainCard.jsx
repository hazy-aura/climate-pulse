import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillSunsetFill,BsFillSunriseFill } from "react-icons/bs";

function MainCard() {
  const [weatherData, setWeatherData] = useState([]);
  const somedependency = false;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=7126e91d17b34e038b0133451231209&q=dehradun&days=5&hour=12&alerts=yes&aqi=yes"
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
  ) : (
    <>
      <div className=" m-10 max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-900 dark:border-gray-700">
        <div className="flex">
          <div className="m-2 bg-white text-black inline-block py-1 px-2 text-sm rounded-3xl">
            {weatherData.location?.name}
          </div>
          <div className="flex p-2 pl-36">
            <p>{weatherData.location?.localtime}</p>
          </div>
        </div>

        <div className="flex mt-10 ml-7">
          {weatherData?.current?.condition?.icon && (
            <img
              src={`https:${weatherData?.current?.condition?.icon}`}
              className="inline-block pl-5 "
            />
          )}

          <div className="flex p-5 text-xl dark:text-gray-500">{weatherData.current?.condition?.text}</div>
        </div>

        <div className="p-5">
          <div className="inline-block ml-10">
            <h1 className="mb-2 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              {weatherData.current?.temp_c}
              <sup className="text-xl align-super">°C</sup>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Pressure
            <div className="flex-col text-white ">
              {weatherData.current?.pressure_mb}mb
            </div>
          </div>
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Humidity
            <div className="flex-col text-white">{weatherData.current?.humidity}%</div>
          </div>
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Visibility
            <div className="flex-col text-white">{weatherData.current?.vis_km}km</div>
          </div>
        </div>

        <div className="dark:bg-gray-800 dark:border-gray-800 rounded-xl w-4/5 ml-9 m-3">
          <div className="p-3">
            <BsFillSunriseFill size={50} color="rgb(251 191 36)" />
            <p className="dark:text-gray-400">Sunrise</p>
            <p>{weatherData.forecast?.forecastday[0].astro.sunrise}</p>
          </div>
        </div>

        <div className="dark:bg-gray-800 dark:border-gray-800 rounded-xl w-4/5 ml-9 m-5 mb-10">
          <div className="p-3">
            <BsFillSunsetFill size={50} color="rgb(217 119 6)" />
            <p className="dark:text-gray-400">Sunrise</p>
            <p>{weatherData.forecast?.forecastday[0].astro.sunrise}</p>
          </div>
        </div>

      </div>
    </>
  );
}
export default MainCard;
