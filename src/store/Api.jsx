import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import axios from 'axios';

export const restCountries = createAsyncThunk(
    'Countriesname/restCountries',
    async function (region, { rejectWithValue }) {
        try {
            let data = await axios.get(`https://restcountries.com/v2/region/${region}`);
            let res = data.data
            console.log(res);
            if (!data.statusText === "OK") {
                throw new Error('Server Errpr')
            }
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const countriesSlice = createSlice({
    name: "Countriesname",
    initialState: {
        Countriess: [],
        status: null,
        error: null
    },
    extraReducers: {
        [restCountries.pending]: (state,) => {
            state.status = "logding";
            state.error = null
        },
        [restCountries.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.Countriess = action.payload;
        },
        [restCountries.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export default countriesSlice.reducer; 