import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchLocationSuggestions = createAsyncThunk(
    'suggestions/fetchLocationSuggestions',
    async (query)=>{
        const res = await axios.get(`https://api.weatherapi.com/v1/search.json?key=d2bab93f87d44b239ce94045243105&q=${query}`);
        return res.data;

    }
);

const suggestionSlice = createSlice({
    name: 'suggestions',
    initialState:{
        suggestions:[],
        state:'idle',
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchLocationSuggestions.pending, (state)=>{
            state.status='loading';
        }).addCase(fetchLocationSuggestions.fulfilled,(state,action)=>{
            state.status ='succeeded';
            state.suggestions = action.payload;

        }).addCase(fetchLocationSuggestions.rejected,(state,action)=>{
            state.status ='failed';
            state.error =action.error.message;
        });
    },
});

export default suggestionSlice.reducer;