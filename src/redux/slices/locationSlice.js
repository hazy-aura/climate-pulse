// redux/slices/locationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "location/fetchWeatherData",  // Corrected action type
  async (location) => {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=d2bab93f87d44b239ce94045243105&q=${location}&days=5&hour=12&alerts=yes&aqi=yes`
    );
    return res.data;
  }
);

const locationSlice = createSlice({
  name: "location",  // Consistent naming
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
