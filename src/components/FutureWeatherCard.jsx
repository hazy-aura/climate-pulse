export const formatDate = (dateString)=> {
  const [year,month,date]= dateString.split('-');
  const futuredate = new Date();
  futuredate.setFullYear(year);
  futuredate.setMonth(month-1);
  futuredate.setDate(date);
 

  return futuredate.toLocaleDateString('en-US',{
    month:'short',
    day:'2-digit'
    
  });

  
}

function FutureWeatherCard(props) {

    const getDay =(dateStr) =>{
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US',{ weekday:'long'});

    };
    


    

  return (
    <div className=" md:w-4/7 m-10  bg-white border  border-gray-200 rounded-xl shadow dark:bg-myGray3 dark:border-gray-800 overflow-auto">
        <h1 className=" flex m-7 text-xl text-center">Daily Weather</h1>
      <div className="flex ">
        {props.forecastday && props.forecastday.length > 0 ? (
          props.forecastday.map((item, index) => (
            <div key={index} className="flex flex-col carousel-item items-center m-5 dark:bg-myGray2 dark:border-gray-800 rounded-xl md:w-1/6  sm:gap-2">
                <div className=" m-2 text-xl"><p>{getDay(item.date)}</p></div>
                <div> { formatDate(item.date) } </div>
                
              {item.hour[0].condition?.icon && (
                <img src={`https:${item.hour[0].condition?.icon}`} alt="weather icon" className="mb-2" />
              )}
              
              <p className="text-center text-xl">{item.hour[0].temp_c}°C</p>
              <p className="text-center mb-3 text-sm">{item.hour[0].condition?.text}</p>
            </div>
          ))
        ) : (
          <p>No forecast data available</p>
        )}
      </div>
    </div>
  );
}

export default FutureWeatherCard;
