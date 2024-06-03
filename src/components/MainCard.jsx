import { BsFillSunsetFill,BsFillSunriseFill } from "react-icons/bs";



function formatTime(timeString) {
  const [datePart, timePart] = timeString.split(' ');
  const [hours, minutes] = timePart.split(':');
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date.toLocaleTimeString('en-US',{
    hour:'numeric',
    minute:'numeric',
    hour12: true

  });

}

function formatDate(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [year,month,date]= datePart.split('-');
  const futuredate = new Date();
  futuredate.setFullYear(year);
  futuredate.setMonth(month-1);
  futuredate.setDate(date);
 

  return futuredate.toLocaleDateString('en-US',{
    year:'2-digit',
    month:'short',
    day:'2-digit'
    
  });

  
}

function MainCard(props) {

  

  return(
    
      <div className=" sm:w-3/4 md:w-3/7 m-10 max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-myGray dark:border-gray-700 overflow-auto">
        <div className="flex justify-between">
          <div className="m-2 bg-white text-black inline-block py-1 px-2 text-sm rounded-3xl">
            {props.locationName}, {props.locationRegion}, {props.locationCountry}
          </div>
          <div className="flex p-2 ">
            <p>{formatTime(props.localtime)}, {formatDate(props.localtime)}</p>

          </div>
        </div>

        <div className="flex mt-10 ml-7">
          {props.icon && (
            <img
              src={`https:${props.icon}`}
              className="inline-block pl-5 "
            />
          )}

          <div className="flex p-5 text-xl dark:text-gray-500">{props.conditionText}</div>
        </div>

        <div className="p-5">
          <div className="inline-block ml-10">
            <h1 className="mb-2 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.currentTemp}
              <sup className="text-xl align-super">°C</sup>
            </h1>
          </div>
        </div>
        
        <div>
          <p className="ml-16"> Feels Like: {props.feelslike}°</p>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Pressure
            <div className="flex-col text-white ">
              {props.pressure}mb
            </div>
          </div>
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Humidity
            <div className="flex-col text-white">{props.humidity}%</div>
          </div>
          <div className="flex flex-col p-3 justify-center items-center dark:text-gray-500">
            Visibility
            <div className="flex-col text-white">{props.visibility}km</div>
          </div>
        </div>

        <div className="dark:bg-myGray2 dark:border-gray-800 rounded-xl w-4/5 ml-9 m-3">
          <div className="p-3 pl-5">
            <BsFillSunriseFill size={50} color="rgb(251 191 36)" />
            <p className="dark:text-gray-400">Sunrise</p>
            <p>{props.sunrise}</p>
          </div>
        </div>

        <div className="dark:bg-myGray2 dark:border-gray-800 rounded-xl w-4/5 ml-9 m-5 mb-10">
          <div className="p-3 pl-5">
            <BsFillSunsetFill size={50} color="rgb(217 119 6)" />
            <p className="dark:text-gray-400">Sunset</p>
            <p>{props.sunset}</p>
          </div>
        </div>

      </div>
    
  );
}
export default MainCard;
