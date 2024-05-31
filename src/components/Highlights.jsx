import { TbUvIndex, TbWind } from "react-icons/tb";
import { BsCloudRainFill } from "react-icons/bs";
import { FaCloud, FaTachometerAlt } from "react-icons/fa";
import { MdDewPoint } from "react-icons/md";

function Highlights(props) {
   
    
  return (
    <div className="w-4/7 m-10 grid-cols-3 bg-white border border-gray-200 rounded-xl shadow dark:bg-myGray3 dark:border-gray-800">
      <h1 className=" flex m-7  text-xl text-center">Today's Highlights</h1>
      <div className=" grid grid-cols-1">
        <HighlightsMap {...props} />
      </div>
    </div>
  );
}

function HighlightsMap(props) {
    var AQI = props.aqi?.["us-epa-index"];
  const itemsToRender = [
    {
      name: "UV Index",
      key: "uv",
      icon: <TbUvIndex size={70} color="yellow" />,
    },
    {
      name: "Wind Status",
      key: "wind_kph",
      icon: <TbWind size={70} color="#0096FF" />,
    },
    {
      name: "Precipitation",
      key: "precip_mm",
      icon: <BsCloudRainFill size={70} color="#0096FF" />,
    },
    {
      name: "Cloud",
      key: "cloud",
      icon: <FaCloud size={70} color="#dde7ee" />,
    },
    {
      name: "Air Quality",
      key: "us-epa-index",
      icon: <FaTachometerAlt size={70} color={ AQI>=3? AQI>=4? 'red':'orange' : AQI>1?'yellow':'green'} />,
    },
    {
      name: "Dew Point",
      key: "dewpoint_c",
      icon: <MdDewPoint size={70} color="#D7EDE8" />,
    },
  ];

  return (
    <div className="grid grid-cols-3 px-8 ">
      {itemsToRender.map((item, index) => (
        <div
          key={index}
          className="dark:bg-myGray2 dark:border-gray-800 rounded-xl flex flex-col justify-center items-center w-1/5  px-20 m-10"
        >
          <p className="py-3 mx-3 whitespace-nowrap">{item.name}</p>
          <div>{item.icon}</div>
          <p className="p-2">{item.key in props ? props[item.key] : null}{props.aqi && item.key in props.aqi ? props.aqi[item.key] : null}</p>
       
        </div>
      ))}
    </div>
  );
}

export default Highlights;
