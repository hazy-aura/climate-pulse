// components/SearchBar.js
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/slices/locationSlice"; 
import {fetchLocationSuggestions} from '../redux/slices/suggestionSlice';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const suggestions =useSelector((state)=> state.suggestions.suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(location));
    setShowSuggestions(false);
  };

  const handleChange =(e)=>{
    setLocation(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(fetchLocationSuggestions(e.target.value));
      setShowSuggestions(true); 
    }else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick =(suggestion)=>{
    setLocation(suggestion.name);
    dispatch(fetchWeatherData(suggestion.name));
    setShowSuggestions(false); 
  };
  
  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100); // Add a slight delay to allow click event to register
  };

  const handleFocus = () => {
    if (location.length > 2) {
      setShowSuggestions(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          value={location}  // Ensured value is controlled
          onChange={handleChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Location"
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
        >
          <CiSearch />
        </button>
      </div>
      {
       showSuggestions && suggestions.length>0 &&(
          <ul className="absolute bg-black border-gray-300 rounded-lg mt-1 z-40 w-auto">
            {
              suggestions.map((suggestion,index)=>(
                <li key={index}
                className="p-2 hover:bg-gray-950 cursor-pointer"
                onMouseDown={() => handleSuggestionClick(suggestion)}

                >
                  {suggestion.name}, {suggestion.region}, {suggestion.country}

                </li>
              ))
            }
          </ul>
        )
      }
    </form>
  );
}

export default SearchBar;
