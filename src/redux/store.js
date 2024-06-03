// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";  
import suggestionsReducer  from './slices/suggestionSlice';// Correct import path

export const store = configureStore({
  reducer: {
    location: locationReducer, 
    suggestions: suggestionsReducer, // Corrected reducer name
  },
});
